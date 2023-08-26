<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    exit;
}

require_once '1database_connection.php'; // Include the appropriate database connection file

$response = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'));

    
    $id = $data->id;
    $category = $data->category;

    if ($category === "donor") {
        // Delete from donation_records table
        $sql = "DELETE FROM donation_records WHERE id = ?";
    } elseif ($category === "patient") {
        // Delete from request_records table
        $sql = "DELETE FROM request_records WHERE id = ?";
    } else {
        $response['status'] = "error";
        $response['message'] = "Invalid category";
        echo json_encode($response);
        exit;
    }

    $stmt = $conn->prepare($sql);//Using prepared statements helps prevent SQL injection attacks. When you directly insert variables into your SQL query, if those variables contain malicious code, they could potentially manipulate or harm your database. Prepared statements automatically handle escaping and sanitizing input data.
    $stmt->bind_param("i", $id);//also efficient    

    if ($stmt->execute()) {
        $response['status'] = "success";
        $response['message'] = "Record deleted successfully";
    } else {
        $response['status'] = "error";
        $response['message'] = "Error deleting record: " . $conn->error;
    }

    $stmt->close();
}

$conn->close(); // Close the database connection

// Return the response as JSON
echo json_encode($response);
?>
