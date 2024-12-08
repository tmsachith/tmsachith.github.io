<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get data from form
    $name = $_POST['name'];
    $email = $_POST['emailaddress'];
    $message = $_POST['massage'];
    $to = "me@tmsachith.com";
    $subject = $_POST['subject'];
    $txt = "Name: " . $name . "\r\nEmail: " . $email . "\r\nMessage: " . $message;
    $headers = "From: noreply@tmsachith.com" . "\r\n" . "CC: social.tmsachith@gmail.com";

    // Send email
    if ($email != NULL && mail($to, $subject, $txt, $headers)) {
        // Email sent successfully
        echo json_encode(array("status" => "success"));
    } else {
        // Email sending failed
        echo json_encode(array("status" => "error"));
    }
} else {
    // Invalid request
    echo json_encode(array("status" => "error"));
}
?>
