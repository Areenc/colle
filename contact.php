<?php
// إعدادات الاتصال بقاعدة البيانات
$server = "localhost"; // اسم الخادم
$user = "root"; // اسم المستخدم
$pass = ""; // كلمة المرور
$database = "leto"; // اسم قاعدة البيانات

// إنشاء الاتصال بقاعدة البيانات
$con = mysqli_connect($server, $user, $pass, $database);

// التحقق من الاتصال
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// إنشاء جدول "contact" إذا لم يكن موجودًا
mysqli_query($con, "CREATE TABLE IF NOT EXISTS contact (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NAME_USER VARCHAR(20),
    EMAIL VARCHAR(30),
    MESSAGE_USER VARCHAR(250)
)");

// متغيرات الرسائل
$successMessage = "";
$errorMessage = "";

// التحقق من إرسال النموذج عبر POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // التأكد من أن الحقول المطلوبة غير فارغة
    if (!empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["message"])) {
        $name = mysqli_real_escape_string($con, $_POST["name"]); // تنظيف البيانات
        $email = mysqli_real_escape_string($con, $_POST["email"]);
        $message = mysqli_real_escape_string($con, $_POST["message"]);

        // إدخال البيانات في الجدول
        $query = "INSERT INTO contact (NAME_USER, EMAIL, MESSAGE_USER) 
                  VALUES ('$name', '$email', '$message')";

        // التحقق من نجاح الإدخال
        if (mysqli_query($con, $query)) {
            // إذا تم بنجاح، عرض رسالة النجاح
            $successMessage = '<div class="message-box success" data-i18n="contact-alert-success">✅ Your message has been sent successfully!</div>';
        } else {
            // في حال حدوث خطأ، عرض رسالة الخطأ
            $errorMessage = '<div class="message-box error">❌ An error occurred while sending your message: ' . mysqli_error($con) . '</div>';
        }
    } else {
        // في حال وجود حقول فارغة، عرض رسالة تحذير
        $errorMessage = '<div class="message-box error" data-i18n="reservation-alert-incomplete">❗️ Please fill out all fields.</div>';
    }
}

// غلق الاتصال بقاعدة البيانات بعد المعالجة
mysqli_close($con);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title data-i18n="interface-contact">Contact Us</title>
    <link rel="stylesheet" href="projectStyle.css">
    <style>
        /* تنسيق رسائل النجاح والخطأ */
        .message-box {
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 8px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            font-weight: bold;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        form {
            max-width: 600px;
            margin: auto;
        }
    </style>
</head>
<body>

<header>
    <h1 data-i18n="interface-contact">Contact Us</h1>
</header>

<main>
    <!-- عرض رسائل النجاح أو الخطأ بناءً على النتيجة -->
    <?= $successMessage ?>
    <?= $errorMessage ?>

    <!-- نموذج الاتصال -->
    <form method="POST" action="" class="text-style">
        <label for="name" data-i18n="reservation-name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email" data-i18n="reservation-email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message" data-i18n="interface-contact">Message:</label>
        <textarea id="message" name="message" rows="5" style="width: 90%; display: block; margin: 0 auto 15px auto;" required></textarea>

        <div style="text-align: center;">
            <button type="submit" class="button" data-i18n="reservation-submit">Send Message</button>
        </div>
    </form>

    <!-- رابط العودة إلى واجهة المستخدم -->
    <div style="text-align: center; margin-top: 20px;">
        <a href="interface.html" class="button" data-i18n="reservation-back">Back to Interface</a>
    </div>
</main>

<div class="language-switcher">
    <button onclick="setLanguage('en')">English</button> |
    <button onclick="setLanguage('ar')">العربية</button>
</div>

<footer>
    <p data-i18n="interface-rights">&copy; 2025 Your Website. All rights reserved.</p>
</footer>

<script src="javafile.js"></script>
</body>
</html>
