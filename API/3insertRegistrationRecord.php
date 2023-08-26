<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    exit;
}

require_once '1database_connection.php';

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $user = json_decode(file_get_contents('php://input'));

    $firstname = $user->firstname;
    $lastname = $user->lastname;
    $email = $user->email;
    $password = md5($user->password);
    $age = $user->age;
    $bloodgroup = $user->bloodgroup;
    $disease = ($user->disease)?$user->disease:'nothing';
    $categorie = $user->categorie;
    
    echo($firstname.$lastname.$email.$password.$age.$bloodgroup.$disease.$categorie);

    $sql = "INSERT INTO registration(firstname,lastname,email,`password`,age,bloodgroup,disease,categorie)VALUES('$firstname','$lastname','$email','$password',$age,'$bloodgroup','$disease','$categorie')";

    if($conn->query($sql) === true){
        echo'record inserted successfully!';
    }
    else{
        echo"Error inserting data in table".$conn->error;
    }
}

?>

