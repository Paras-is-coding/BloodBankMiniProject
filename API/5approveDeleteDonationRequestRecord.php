<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    exit;
}

require_once '1database_connection.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $data = json_decode(file_get_contents('php://input'));

    $id = $data->id;
    $action = $data->action;

    if ($action === 'approve') {
        $newStatus = 'Approved';
        $unit = $data->unit;
        $bloodgroup = $data->bloodgroup;
        
        // Update the status of the record
        $sqlUpdateStatus = "UPDATE donation_records SET status = '$newStatus' WHERE id = $id";
        if ($conn->query($sqlUpdateStatus) === true) {
            // Update blood_stock table
            $sqlUpdateBloodStock = "UPDATE blood_stock SET `$bloodgroup` = `$bloodgroup` + $unit WHERE id = 1"; // Assuming you want to update the first row (id = 1)
            if ($conn->query($sqlUpdateBloodStock) === true) {
                $response['success'] = true;
                $response['message'] = "Record status updated to $newStatus and blood stock updated.";
            } else {
                $response['success'] = false;
                $response['message'] = "Error updating blood stock: " . $conn->error;
            }
        } else {
            $response['success'] = false;
            $response['message'] = "Error updating record status: " . $conn->error;
        }
    } elseif ($action === 'reject') {
        $newStatus = 'Rejected';
        // Update the status of the record
        $sql = "UPDATE donation_records SET status = '$newStatus' WHERE id = $id";
        if ($conn->query($sql) === true) {
            $response['success'] = true;
            $response['message'] = "Record status updated to $newStatus.";
        } else {
            $response['success'] = false;
            $response['message'] = "Error updating record status: " . $conn->error;
        }
    } else {
        $response['success'] = false;
        $response['message'] = 'Invalid action specified.';
    }
}

$conn->close(); // Close the database connection

// Return the response as JSON
echo json_encode($response);
?>

