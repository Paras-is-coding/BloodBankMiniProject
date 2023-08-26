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
    $donorname = $data['donorname'];
    $bloodgroup = $data['bloodgroup'];
    $unit = $data['unit'];
    $disease = $data['disease'];
    $age = $data['age'];
    $phone = $data['phone'];
    $donationdate = $data['donationdate'];
    $status = $data['status'];

    // Update the record in the database
    $sql = "UPDATE donation_records SET
                donorname = '$donorname',
                bloodgroup = '$bloodgroup',
                unit = $unit,
                disease = '$disease',
                age = $age,
                phone = '$phone',
                donationdate = '$donationdate',
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
