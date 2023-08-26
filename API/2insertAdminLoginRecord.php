<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    exit;
}

require_once '1database_connection.php';


    $password = "admin";

    $sql = "insert into adminlogin(email,password)
    values('admin@gmail.com','$password')";

    if($conn->query($sql) === true){
        echo'record inserted successfully!';
    }
    else{
        echo"Error inserting data in table".$conn->error;
    }

?>

