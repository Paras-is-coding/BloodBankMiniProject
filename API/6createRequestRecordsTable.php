<?php
require_once '1database_connection.php'; // Make sure to include the appropriate database connection file

$sql = "CREATE TABLE request_records (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    patientname VARCHAR(100) NOT NULL,
    bloodgroup VARCHAR(5) NOT NULL,
    unit INT NOT NULL,
    age INT,
    email VARCHAR(60) NOT NULL,
    phone VARCHAR(20),
    reason VARCHAR(255),
    requestdate DATE,
    status VARCHAR(20) NOT NULL
)";

if ($conn->query($sql) === true) {
    echo "Table created successfully!";
} else {
    echo "Error in creating table: " . $conn->error;
}

$conn->close(); // Close the database connection
?>
