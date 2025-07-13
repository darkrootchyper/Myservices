const heroSection = document.getElementById('heroSection');
const aboutSection = document.getElementById('aboutMe');
const contactSection = document.getElementById('contactInfo');
const servicesSection = document.getElementById('services');

const aboutBtn = document.getElementById('aboutBtn');
const contactBtn = document.getElementById('contactBtn');
const servicesBtn = document.getElementById('servicesBtn');
const heroServicesBtn = document.getElementById('heroServicesBtn');
const backBtn2 = document.getElementById('backBtn2');
const backBtn2Contact = document.getElementById('backBtn2Contact');

// تابع لإظهار القسم المطلوب وإخفاء الباقي
function showSection(section) {
  heroSection.style.display = 'none';
  aboutSection.style.display = 'none';
  contactSection.style.display = 'none';
  servicesSection.style.display = 'none';

  if (section === 'hero') heroSection.style.display = 'flex';
  else if (section === 'about') aboutSection.style.display = 'flex';
  else if (section === 'contact') contactSection.style.display = 'block';
  else if (section === 'services') servicesSection.style.display = 'block';
}

// أحداث الأزرار
aboutBtn.addEventListener('click', e => {
  e.preventDefault();
  showSection('about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

contactBtn.addEventListener('click', e => {
  e.preventDefault();
  showSection('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
});

servicesBtn.addEventListener('click', e => {
  e.preventDefault();
  showSection('services');
  servicesSection.scrollIntoView({ behavior: 'smooth' });
});

if(heroServicesBtn){
  heroServicesBtn.addEventListener('click', e => {
    e.preventDefault();
    showSection('services');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  });
}

backBtn2.addEventListener('click', () => {
  showSection('hero');
  heroSection.scrollIntoView({ behavior: 'smooth' });
});

backBtn2Contact.addEventListener('click', () => {
  showSection('hero');
  heroSection.scrollIntoView({ behavior: 'smooth' });
});

// روابط زر التواصل تحت كل خدمة
const contactButtons = document.querySelectorAll('.service-contact-btn');
contactButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    showSection('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// بدء عرض الصفحة الرئيسية عند تحميل الموقع
showSection('hero');
