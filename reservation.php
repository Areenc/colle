<?php
// تعريف معلومات الاتصال بقاعدة البيانات
$server = "localhost";  // اسم السيرفر المحلي
$user = "root";  // اسم المستخدم لقاعدة البيانات
$pass = "";  // كلمة المرور لقاعدة البيانات
$database = "leto";  // اسم قاعدة البيانات

// محاولة الاتصال بقاعدة البيانات
$con = mysqli_connect($server, $user, $pass, $database)
or die("Connection failed: " . mysqli_connect_error());  // في حال فشل الاتصال تطلع رسالة خطأ

// تعريف متغيرات لرسائل النجاح أو الخطأ
$successMessage = "";
$errorMessage = "";

// إنشاء جدول إذا ما كان موجود مسبقاً
mysqli_query($con, "CREATE TABLE IF NOT EXISTS FORM (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,  
    NAME_USER VARCHAR(20),  
    EMAIL VARCHAR(30),  
    PHONE VARCHAR(10),  
    NUM INT,  
    DATE_DAY DATE,  
    TIME_DAY TIME 
)");

// التحقق إذا كان الطلب من نوع POST (أي تم إرسال النموذج)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // التأكد من أن كل الحقول المطلوبة موجودة
    if (!empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["phone"]) && 
        !empty($_POST["num"]) && !empty($_POST["date"]) && !empty($_POST["time"])) {

        // تنظيف المدخلات لتجنب هجمات SQL Injection
        $name = mysqli_real_escape_string($con, $_POST["name"]);
        $email = mysqli_real_escape_string($con, $_POST["email"]);
        $phone = mysqli_real_escape_string($con, $_POST["phone"]);
        $num = mysqli_real_escape_string($con, $_POST["num"]);
        $date = mysqli_real_escape_string($con, $_POST["date"]);
        $time = mysqli_real_escape_string($con, $_POST["time"]);

        // إعداد استعلام لإدخال البيانات في الجدول
        $query = "INSERT INTO FORM (NAME_USER, EMAIL, PHONE, NUM, DATE_DAY, TIME_DAY) 
                  VALUES ('$name', '$email', '$phone', '$num', '$date', '$time')";

        // تنفيذ الاستعلام وإذا نجح يظهر رسالة نجاح، وإذا فشل تظهر رسالة خطأ
        if (mysqli_query($con, $query)) {
            $successMessage = '<div class="message-box success" data-i18n="reservation-alert-success">✅ تم إرسال الحجز بنجاح!</div>';
        } else {
            $errorMessage = '<div class="message-box error">❌ حدث خطأ أثناء إرسال الحجز: ' . mysqli_error($con) . '</div>';
        }
    } else {
        $errorMessage = '<div class="message-box error" data-i18n="reservation-alert-fill">❗️ من فضلك قم بملء جميع الحقول المطلوبة.</div>';
    }
}

// إغلاق الاتصال بقاعدة البيانات بعد إتمام العملية
mysqli_close($con);
?>

<!-- بداية الصفحة HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title data-i18n="reservation-title">حجز</title>
  <link rel="stylesheet" href="projectStyle.css" />
</head>
<body>
  <header>
    <h1 data-i18n="reservation-title">حجز</h1>
  </header>

  <main>
    <div class="text-style" style="max-width: 400px; margin: 0 auto; text-align: center;">

    <!-- بداية الكود الخاص برسائل النجاح والخطأ -->
    <style>
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
    </style>

    <!-- هنا بنعرض رسالة النجاح أو الخطأ حسب الحالة -->
    <?php
    if (!empty($successMessage)) {
        echo $successMessage;
    } elseif (!empty($errorMessage)) {
        echo $errorMessage;
    }
    ?>

    <!-- نموذج الحجز -->
    <form action="reservation.php" method="post" onsubmit="return confirmSubmit()">
        <label for="name" data-i18n="reservation-name">الاسم:</label>
        <br>
        <input type="text" id="name" name="name" required />
        <label for="email" data-i18n="reservation-email">البريد الإلكتروني:</label>
        <input type="email" id="email" name="email" required />
        <br>
        <label for="phone" data-i18n="reservation-phone">رقم الهاتف:</label>
        <input type="tel" id="phone" name="phone" required />
        <br>

        <label for="people" data-i18n="reservation-people">عدد الأشخاص:</label>
        <input type="number" id="people" name="num" min="1" required />
        <br>

        <label for="date" data-i18n="reservation-date">التاريخ:</label>
        <input type="date" id="date" name="date" required />
        <br>

        <label for="time" data-i18n="reservation-time">الوقت:</label>
        <input type="time" id="time" name="time" required />
        <br>

        <button type="submit" class="button" data-i18n="reservation-submit">إرسال</button>
    </form>
    </div>

    <div style="text-align: center; margin-top: 20px;">
        <a href="interface.html" class="button" data-i18n="reservation-back">الرجوع إلى الواجهة</a>
    </div>
  </main>

  <footer>
    <div class="contact">
        <a href="contact.html" data-i18n="interface-contact">نود سماع آرائكم</a>
    </div>
    <p data-i18n="interface-rights">&copy; 2025 جميع الحقوق محفوظة</p>
  </footer>

  <div class="language-switcher">
    <button onclick="setLanguage('en')">English</button> |
    <button onclick="setLanguage('ar')">العربية</button>
  </div>
  <script src="javafile.js"></script>
</body>
</html>
