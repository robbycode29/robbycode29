<?php
    if(isset($_POST['submit'])){
        $gdpr = $_POST['GDPR'];
        if(isset($gdpr)){
        ?>
        <style>
        .continut {
            position: relative;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: center;
            height: 600px;
        }
        .continut .box {
            background-color: #f1f1f1;
            margin-top: 300px;
            width: 50%;
            margin: 10px;
            text-align: center;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            border-radius: 10px;
            border-color: #59ab02;
            border-width: 3px;
            border-style: solid;
        }
    
    </style>
    
    <div class = "continut">
        <div class = "box" id = "continut">
            <h2>Multumim ca ati ales serviciile noastre!</h2>
            <h4>Cererea dumneavoastra a fost trimisa si veti primi in scurt timp un email de confirmare a inregistrarii</h4>
        </div>
    </div>
    
    <?php

        $name = $_POST['name'];
        $tel = $_POST['tel'];
        $subject = "Cerere oferta";
        $mailFrom = $_POST['mail'];
        $m = $_POST['message'];
        

        

      //  $SSF = $_POST['checkboxSSF'];
      //  $PI = $_POST['checkboxPI'];
        $OP = null;
        $checkbox = $_POST["checkbox"];

        for($i = 0; $i < count($checkbox); $i++) {
            $OP = "{$OP}   {$checkbox[$i]}";
        }

        $gdpr = $_POST["GDPR"];
        
        
        $message = "From: {$mailFrom} \nTel: {$tel} \nSelected: {$OP} \nMessage: {$m} \nProcesarea Datelor: {$gdpr} ";
        
       // $messageS="{$message}{$mailFrom}";
    
        $mailTo = "relatiiclienti@amibios.ro";
        $headers = "From: ".$mailFrom;
       // $txt = "You have received an email from ".$name.".\n\n".$message;
    
        mail($mailTo, $subject, $message, $headers);
        //header("Location: index.php?mailsend");

        $subjectRes = "Confirmare Inregistrare Cerere";
        $messageRes = "Cererea dumneavoastra a fost inregistrata! In continuare veti fi contactat de un agent relatii cu clientii.";
        $headersRes = "From: noreply";
        mail($mailFrom, $subjectRes, $messageRes, $headersRes);
        
        }
        else {?>
        <style>
        .continut {
            position: relative;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: center;
            height: 600px;
        }
        .continut .box {
            background-color: #f1f1f1;
            margin-top: 300px;
            width: 50%;
            margin: 10px;
            text-align: center;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            border-radius: 10px;
            border-color: #ff0f0f;
            border-width: 3px;
            border-style: solid;
        }
    
    </style>
    
    <div class = "continut">
        <div class = "box" id = "continut">
            <h2>Trimitere esuata!</h2>
            <h4>Cererea dumneavoastra nu a fost trimisa. Va rugam sa verificati completarea corecta a formularului.</h4>
        </div>
    </div>
    <?php
        }
    }
?>