<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    exit;
}

require_once '1database_connection.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sql = "SELECT * FROM blood_stock";
    
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        $bloodStockData = array();
        while ($row = $result->fetch_assoc()) {
            $bloodStockData[] = $row;
        }
        
        $response['success'] = true;
        $response['data'] = $bloodStockData;
    } else {
        $response['success'] = false;
        $response['message'] = "No records found.";
    }
} else {
    $response['success'] = false;
    $response['message'] = "Invalid request method.";
}

$conn->close(); // Close the database connection

// Return the response as JSON
echo json_encode($response);

?>