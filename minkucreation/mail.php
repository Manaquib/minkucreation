<?php

if(isset($_POST["btn-send"])){
    $userName = $_POST["name"];
    $userEmail = $_POST["email"];
    $userSub = $_POST["subject"];
    $userMsg = $_POST["message"];
    // $headers = "From:" . $from;
    $from = "noreply@minkucreation.com";
    // $headers  = "From: $from\r\n"; 
    $headers .= "From: Minku Creation <noreply@minkucreation.com>\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $minkucreation = "https://minkucreation.com";
    $to = "connect@minkucreation.com";
    $messege .= "
    <html>
    <head>
    <style>
        body{
            background-color: black;
            color: aliceblue;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            text-align: center;
        }
        a{
            text-decoration: none;
        }
    </style>
    </head>
    <body>
    <h2>Minku Creation</h2>
    <p>Dear <b> $userName </b><br />
        Thanks For Visiting <b>Minku creation</b><br />
        We Will Contact You Soon On $userEmail <br /></p>
    <a href= $minkucreation >Visit MinkuCreation</a>
    </body>
    </html>
    ";
    mail($to,$userSub,$userMsg,$userEmail);
    mail($userEmail,"Thanks For Visiting Minku Creation",$messege,$headers);

    header("location:index.php?success");
}else{
    header("location:index.php");
}

?>