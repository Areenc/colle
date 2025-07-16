// هذا الكود يحتوي على الترجمة للنصوص المختلفة في الموقع باللغتين الإنجليزية والعربية
const translations = {
    en: {
        // هنا النصوص الخاصة بالواجهة (مثل العنوان والترحيب)
        "interface-title": "Website Interface", // عنوان الصفحة
        "interface-welcome": "Welcome to L‘ETO!", // رسالة الترحيب
        "interface-menu": "Check Out Our Delicious Menu!", // نص لعرض القائمة
        "interface-reservation": "Book Your Spot Now!", // نص لتشجيع المستخدم على الحجز
        "interface-about": "Discover the Story Behind L‘ETO", // نص للتوجه إلى صفحة "معلومات عنا"
        "interface-contact": "We’d Love to Hear from You", // نص للدعوة للتواصل
        "interface-rights": "2025 All Rights Reserved.", // حقوق الطبع والنشر
        // النصوص الخاصة بصفحة "معلومات عنا"
        "about-title": "About Us",
        "about-header": "About Us",
        "about-name": "THE NAME", // تعريف الاسم
        "about-name-description": "Every aspect of L’ETO was inspired by the core components of summer", // شرح الفكرة وراء الاسم
        "about-name-description-text": "L’ETO is a name created by synergy of French & Eastern European languages semantically similar to the word \"summer\": [L'ete (French) / Лето (Russian) / Lato (Polish)]", // التوضيح المعمق للاسم
        "about-restaurants": "40 Restaurants", // عدد المطاعم
        "about-restaurants-description": "L'ETO should always appear as a high-end restaurant with a warm feel.", // وصف لنمط المطاعم
        "about-countries": "7 Countries", // عدد الدول
        "about-countries-description": "Every L'ETO around the world will keep the main elements of the brand, however the location and the space will always show unique characteristics and specificities.", // وصف لخصوصيات الفروع حول العالم
        "about-members": "1000 Members", // عدد الأعضاء
        "about-members-description": "More than 1000 staff members of the L'ETO team bring pleasure and delights to our wonderful customers.", // وصف لفريق العمل
        "about-back": "Back to Interface", // العودة للواجهة الرئيسية
        "about-contact": "Contact Us", // الانتقال لصفحة التواصل
        "about-english": "English", // لغة الإنجليزية
        "about-arabic": "العربية", // اللغة العربية
        // النصوص الخاصة بالقائمة
        "menu-title": "Menu", // عنوان القائمة
        "nav-main-dishes": "Main Dishes", // الأطباق الرئيسية
        "nav-juices": "Juices", // العصائر
        "nav-salads": "Salads", // السلطات
        "nav-desserts": "Desserts", // الحلويات
        "main-dishes": "Main Dishes", // وصف الأطباق الرئيسية
        "juices": "Juices", // وصف العصائر
        "salads": "Salads", // وصف السلطات
        "desserts": "Desserts", // وصف الحلويات
        "menu-steak": "Grilled steak served with herbs.", // وصف شريحة اللحم
        "menu-chicken": "Roasted chicken with garlic sauce.", // وصف الدجاج
        "menu-fish": "Fresh fish with lemon zest.", // وصف السمك
        "menu-burger": "Classic beef burger with fries.", // وصف البرجر
        "menu-orange": "Freshly squeezed orange juice.", // وصف عصير البرتقال
        "menu-strawberry": "Strawberry smoothie.", // وصف سموثي الفراولة
        "menu-mango": "Sweet tropical mango juice.", // وصف عصير المانجو
        "menu-avocado": "Creamy avocado blend.", // وصف خليط الأفوكادو
        "menu-caesar": "Classic Caesar with chicken.", // وصف سلطة سيزر
        "menu-greek": "Greek salad with feta cheese.", // وصف السلطة اليونانية
        "menu-garden": "Fresh garden mix with vinaigrette.", // وصف خليط الحديقة الطازج
        "menu-quinoa": "Healthy quinoa and veggie bowl.", // وصف وعاء الكينوا
        "menu-cheesecake": "Delicious strawberry cheesecake.", // وصف تشيز كيك الفراولة
        "menu-brownie": "Fudgy chocolate brownie.", // وصف براوني الشوكولاتة
        "menu-mousse": "Rich chocolate mousse.", // وصف موس الشوكولاتة
        "menu-ice-cream": "Vanilla & chocolate ice cream", // وصف آيس كريم الفانيليا والشوكولاتة
        "menu-english": "English", // اللغة الإنجليزية
        "menu-arabic": "العربية", // اللغة العربية
        // النصوص الخاصة بالحجز
        "reservation-title": "Reservation", // عنوان صفحة الحجز
        "reservation-heading": "Reservation Form", // عنوان نموذج الحجز
        "reservation-name": "Name:", // حقل الاسم
        "reservation-email": "Email:", // حقل البريد الإلكتروني
        "reservation-phone": "Phone Number:", // حقل رقم الهاتف
        "reservation-people": "Number of People:", // حقل عدد الأشخاص
        "reservation-date": "Date:", // حقل التاريخ
        "reservation-time": "Time:", // حقل الوقت
        "reservation-submit": "Submit", // زر الإرسال
        "reservation-back": "Back to Interface", // زر العودة
        "reservation-alert-incomplete": "❗️ Please fill out all fields.", // تنبيه في حال لم يتم تعبئة الحقول
        "reservation-alert-success": "✅ Your reservation has been received. Thank you!", // تأكيد استلام الحجز
        // النصوص الخاصة بالتواصل
        "contact-alert-success": "✅ Your massage has been received" // تأكيد استلام الرسالة
    },
    ar: {
        // هنا النصوص الخاصة بالواجهة باللغة العربية
        "interface-title": "واجهة الموقع",
        "interface-welcome": "أهلاً بكم في L‘ETO!",
        "interface-menu": "تصفح قائمة الأطباق الشهية",
        "interface-reservation": "احجز طاولتك الآن واستمتع بتجربة فريدة",
        "interface-about": "تعرف أكثر عن قصة L‘ETO",
        "interface-contact": "يسعدنا سماع آرائكم",
        "interface-rights": "جميع الحقوق محفوظة ٢٠٢٥",
        // النصوص الخاصة بصفحة "معلومات عنا" بالعربية
        "about-title": "معلومات عنا",
        "about-header": "معلومات عنا",
        "about-name": "الاسم",
        "about-name-description": "تم استلهام كل جانب من جوانب L’ETO من مكونات الصيف الأساسية",
        "about-name-description-text": "L’ETO هو اسم نشأ من تآزر اللغات الفرنسية والشرقية الأوروبية مشابهة لفظياً لكلمة الصيف: [L'ete (فرنسية) / Лето (روسية) / Lato (بولندية)]",
        "about-restaurants": "40 مطعماً",
        "about-restaurants-description": "يجب أن يظهر L'ETO دائماً كمطعم فاخر مع إحساس دافئ.",
        "about-countries": "7 دول",
        "about-countries-description": "كل فرع من فروع L'ETO في العالم سيحافظ على العناصر الرئيسية للعلامة التجارية.",
        "about-members": "1000 عضو",
        "about-members-description": "أكثر من 1000 عضو من فريق L'ETO يجلبون السعادة والسرور لعملائنا.",
        "about-back": "العودة إلى الواجهة",
        "about-contact": "اتصل بنا",
        "about-english": "English",
        "about-arabic": "العربية",
        // النصوص الخاصة بالقائمة باللغة العربية
        "menu-title": "القائمة",
        "nav-main-dishes": "الأطباق الرئيسية",
        "nav-juices": "العصائر",
        "nav-salads": "السلطات",
        "nav-desserts": "الحلويات",
        "main-dishes": "الأطباق الرئيسية",
        "juices": "العصائر",
        "salads": "السلطات",
        "desserts": "الحلويات",
        "menu-steak": "شريحة لحم مشوية مع الأعشاب.",
        "menu-chicken": "دجاج مشوي مع صلصة الثوم.",
        "menu-fish": "سمك طازج بنكهة الليمون.",
        "menu-burger": "برجر لحم كلاسيكي مع البطاطس.",
        "menu-orange": "عصير برتقال طازج.",
        "menu-strawberry": "سموثي الفراولة.",
        "menu-mango": "عصير مانجو استوائي حلو.",
        "menu-avocado": "خليط كريمي من الأفوكادو.",
        "menu-caesar": "سلطة سيزر كلاسيكية مع الدجاج.",
        "menu-greek": "سلطة يونانية مع جبنة الفيتا.",
        "menu-garden": "خليط حديقة طازج مع صلصة.",
        "menu-quinoa": "وعاء كينوا صحي مع الخضار.",
        "menu-cheesecake": "تشيز كيك الفراولة اللذيذ.",
        "menu-brownie": "براوني شوكولاتة غني.",
        "menu-mousse": "موس الشوكولاتة الفاخر.",
        "menu-ice-cream":"آيس كريم بالفانيليا والشوكولاتة",
        // النصوص الخاصة بالحجز باللغة العربية
        "reservation-title": "الحجز",
        "reservation-heading": "نموذج الحجز",
        "reservation-name": "الاسم:",
        "reservation-email": "البريد الإلكتروني:",
        "reservation-phone": "رقم الهاتف:",
        "reservation-people": "عدد الأشخاص:",
        "reservation-date": "التاريخ:",
        "reservation-time": "الوقت:",
        "reservation-submit": "إرسال",
        "reservation-back": "العودة إلى الواجهة",
        "reservation-alert-incomplete": "❗️ يرجى تعبئة جميع الحقول.",
        "reservation-alert-success": "✅ تم استلام حجزك. شكراً لك!",
        // النصوص الخاصة بالتواصل باللغة العربية
        "contact-alert-success": "✅ تم استقبال رسالتك"
    }
};

// دالة لتغيير اللغة في الموقع بناءً على الاختيار
function setLanguage(lang) {
    // نخزن اللغة اللي اختارها المستخدم في localStorage عشان نقدر نرجعها بعدين
    localStorage.setItem("lang", lang);

    // نحدد لغة المستند (الصفحة) والاتجاه الخاص بالنصوص (من اليمين لليسار إذا كانت اللغة العربية)
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"; // إذا كانت اللغة العربية نخلي الاتجاه من اليمين لليسار

    // الآن نبحث عن كل العناصر اللي فيها خاصية data-i18n ونغير النصوص بناءً على اللغة المختارة
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n"); // نجيب مفتاح النص
        el.textContent = translations[lang][key] || key; // نغير النص بناءً على اللغة
    });
}

// عند تحميل الصفحة، نحدد اللغة بناءً على اللغة المخزنة في localStorage (أو نعرض الإنجليزية بشكل افتراضي إذا ما كان فيه لغة مختارة)
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en"; // إذا ما كانت فيه لغة مخزنة نعرض الإنجليزية
    setLanguage(savedLang); // نطبق اللغة المختارة
});
