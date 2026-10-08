// فتح وإغلاق القائمة في الموبايل
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// التعامل مع نموذج التواصل (Contact Form)
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    
    const name = document.getElementById('name').value;
    
    // عرض رسالة نجاح تفاعلية للمستخدم
    formResponse.textContent = `شكراً لك يا ${name}! تم إرسال رسالتك بنجاح، وسنتواصل معك قريباً.`;
    formResponse.style.color = '#16a34a';
    
    // تفريغ الحقول بعد الإرسال
    contactForm.reset();
    
    // إخفاء الرسالة بعد 5 ثوانٍ
    setTimeout(() => {
        formResponse.textContent = '';
    }, 5000);
});