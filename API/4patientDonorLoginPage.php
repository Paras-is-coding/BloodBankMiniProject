<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    exit;
}

require_once '1database_connection.php';

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user = json_decode(file_get_contents('php://input'));

    $email = $user->email;
    $password = md5($user->password);
    $loginAs = $user->loginAs;
    $result = "";
    $userData = null; // Initialize to null

    $sql = "SELECT * FROM registration WHERE email='$email' AND password='$password' AND categorie='$loginAs'";
    $res = $conn->query($sql);

    if ($res->num_rows > 0) {
        $row = $res->fetch_assoc();
        $result = "Loggedin successfully!";
        $userData = array(
            'email' => $email,
            'id' => $row['id'] 
        );
    } else {
        $result = "Invalid email or password!";
    }

    // Create a custom response array
    $response = array(
        'status' => 'success',
        'message' => 'Login attempt result',
        'data' => array(
            'result' => $result,
            'user_data' => $userData // Include the user data here
        )
    );

    // Set the appropriate content type and encode the response array as JSON
    header('Content-Type: application/json');
    echo json_encode($response);
}
?>
