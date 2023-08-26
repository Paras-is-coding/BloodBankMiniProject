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

    $data = json_decode(file_get_contents('php://input'));

    $email = isset($data->email) ? $data->email : null;

    if ($email !== null) {
        // Condition 1: Retrieve all records with the provided email
        $sql = "SELECT * FROM donation_records WHERE email = '$email'";
    } else {
        // Condition 2: Retrieve all records with status 'Approved'
        $sql = "SELECT * FROM donation_records";
    }

    $result = $conn->query($sql);

    if ($result) {
        $records = array();
        while ($row = $result->fetch_assoc()) {
            $records[] = $row;
        }
        $response['success'] = true;
        $response['data'] = $records;
    } else {
        $response['success'] = false;
        $response['message'] = "Error fetching records: " . $conn->error;
    }
}

$conn->close();

// Return the response as JSON
echo json_encode($response);
?>

