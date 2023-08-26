<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    exit;
}

require_once '1database_connection.php'; // Include the appropriate database connection file

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $data = json_decode(file_get_contents('php://input'));

    $patientname = $data->patientname;
    $bloodgroup = $data->bloodgroup;
    $unit = $data->unit;
    $age = $data->age;
    $email = $data->email;
    $phone = isset($data->phone) ? $data->phone : '';
    $reason = isset($data->reason) ? mysqli_real_escape_string($conn, $data->reason)  : '';//special character insert garda problem thew like I'm sick now fine
    $requestdate = $data->requestdate;
    $status = 'Pending';

    $sql = "INSERT INTO request_records(patientname, bloodgroup, unit, age, email, phone, reason, requestdate, `status`)
            VALUES('$patientname', '$bloodgroup', $unit, $age, '$email', '$phone', '$reason', '$requestdate', '$status')";

    if ($conn->query($sql) === true) {
        $response['success'] = true;
        $response['message'] = 'Record inserted successfully!';
        
        // Get the ID of the inserted record
        $insertedId = $conn->insert_id;
        
        // Fetch the inserted data
        $insertedData = array(
            'id' => $insertedId,
            'patientname' => $patientname,
            'bloodgroup' => $bloodgroup,
            'unit' => $unit,
            'age' => $age,
            'email' => $email,
            'phone' => $phone,
            'reason' => $reason,
            'requestdate' => $requestdate,
            'status' => $status
        );
        
        $response['data'] = $insertedData;
    } else {
        $response['success'] = false;
        $response['message'] = "Error inserting data into table: " . $conn->error;
    }
}

$conn->close(); // Close the database connection

// Return the response as JSON
echo json_encode($response);
?>
