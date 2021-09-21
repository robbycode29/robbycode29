<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $m = $_POST['message'];
    
    $message = "From: {$mailFrom} \nMessage: {$m}";
    
   // $messageS="{$message}{$mailFrom}";

    $mailTo = "robert00oprescu@yahoo.com";
    $headers = "From: ".$mailFrom;
   // $txt = "You have received an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $message, $headers);
    //header("Location: index.php?mailsend");
    
}

?>