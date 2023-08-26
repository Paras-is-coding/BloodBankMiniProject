<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    exit;
}

require_once '1database_connection.php';

$response = array(); // Create an associative array for the response data

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true); // Decode JSON data into an associative array

    $id = $data['id']; 
    $patientname = mysqli_real_escape_string($conn, $data['patientname']);
    $bloodgroup = mysqli_real_escape_string($conn, $data['bloodgroup']);
    $unit = intval($data['unit']);
    $reason = isset($data['reason']) ? mysqli_real_escape_string($conn, $data['reason']) : ''; // Escape special characters
    $phone = mysqli_real_escape_string($conn, $data['phone']);
    $requestdate = mysqli_real_escape_string($conn, $data['requestdate']);
    $status = mysqli_real_escape_string($conn, $data['status']);

    // Update the record in the database
    $sql = "UPDATE request_records SET
                patientname = '$patientname',
                bloodgroup = '$bloodgroup',
                unit = $unit,
                reason = '$reason',
                phone = '$phone',
                requestdate = '$requestdate',
                status = '$status'
            WHERE id = $id";

    if ($conn->query($sql) === TRUE) {
        // Update successful
        $response['success'] = true;
        $response['message'] = "Record updated successfully";
    } else {
        // Update failed
        $response['success'] = false;
        $response['message'] = "Error updating record: " . $conn->error;
    }
}

$conn->close();

// Return the response as JSON
echo json_encode($response);
?>
