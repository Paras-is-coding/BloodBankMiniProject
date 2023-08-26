
<?php
require_once '1database_connection.php';

$sql = "create table registration(
id int(6) auto_increment primary key,
firstname varchar(60) not null,
lastname varchar(60) not null,
email varchar(60) not null,
password varchar(100) not null,
age int(3) not null,
bloodgroup varchar(6) not null,
disease varchar(60) not null,
categorie varchar(10) not null
)";
if($conn->query($sql)==true){
    echo("Registration table created Successfully!");
}
else{
    echo("Error in creating registration table".$conn->error);
}


?>
