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

    $donorname = $data->donorname;
    $bloodgroup = $data->bloodgroup;
    $unit = $data->unit;
    $disease = isset($data->disease) ? $data->disease : 'nothing';
    $age = $data->age;
    $email = $data->email;
    $phone = isset($data->phone) ? $data->phone : '';
    $donationdate = $data->donationdate;
    $status = 'Pending';
    
    $sql = "INSERT INTO donation_records(donorname, bloodgroup, unit, disease, age, email, phone, donationdate, status)
            VALUES('$donorname', '$bloodgroup', $unit, '$disease', $age, '$email', '$phone', '$donationdate', '$status')";
    
    if ($conn->query($sql) === true) {
        $response['success'] = true;
        $response['message'] = 'Record inserted successfully!';
        
        // Get the ID of the inserted record
        $insertedId = $conn->insert_id;
        
        // Fetch the inserted data
        $insertedData = array(
            'id' => $insertedId,
            'donorname' => $donorname,
            'bloodgroup' => $bloodgroup,
            'unit' => $unit,
            'disease' => $disease,
            'age' => $age,
            'email' => $email,
            'phone' => $phone,
            'donationdate' => $donationdate,
            'status' => $status
        );
        
        $response['data'] = $insertedData;
    } else {
        $response['success'] = false;
        $response['message'] = "Error inserting data into table: " . $conn->error;
    }
}

$conn->close();

// Return the response as JSON
echo json_encode($response);
?>
