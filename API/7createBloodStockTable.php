<?php
require_once '1database_connection.php';

$sql = "CREATE TABLE blood_stock (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    `A+` INT NOT NULL DEFAULT 0,
    `A-` INT NOT NULL DEFAULT 0,
    `B+` INT NOT NULL DEFAULT 0,
    `B-` INT NOT NULL DEFAULT 0,
    `AB+` INT NOT NULL DEFAULT 0,
    `AB-` INT NOT NULL DEFAULT 0,
    `O+` INT NOT NULL DEFAULT 0,
    `O-` INT NOT NULL DEFAULT 0
)";

if ($conn->query($sql) === true) {
    echo("blood_stock table created Successfully!");
} else {
    echo("Error in creating blood_stock table" . $conn->error);
}
?>

