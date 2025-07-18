const toggleMenuBtn = document.getElementById('toggleMenu');
const sideMenu = document.getElementById('sideMenu');

const aboutBtn = document.getElementById('aboutBtn');
const servicesBtn = document.getElementById('servicesBtn');
const contactBtn = document.getElementById('contactBtn');

const aboutBtnSide = document.getElementById('aboutBtnSide');
const servicesBtnSide = document.getElementById('servicesBtnSide');
const contactBtnSide = document.getElementById('contactBtnSide');

const heroServicesBtn = document.getElementById('heroServicesBtn');
const heroSection = document.getElementById('heroSection');
const aboutSection = document.getElementById('aboutMe');
const servicesSection = document.getElementById('services');
const contactSection = document.getElementById('contactInfo');

const backBtnAbout = document.getElementById('backBtn2');
const backBtnContact = document.getElementById('backBtn2Contact');

toggleMenuBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});

function showSection(section) {
  heroSection.style.display = 'none';
  aboutSection.style.display = 'none';
  servicesSection.style.display = 'none';
  contactSection.style.display = 'none';

  section.style.display = 'block';
  sideMenu.classList.remove('open');
}

function showHome() {
  heroSection.style.display = 'flex';
  aboutSection.style.display = 'none';
  servicesSection.style.display = 'none';
  contactSection.style.display = 'none';

  sideMenu.classList.remove('open');
}

aboutBtn.addEventListener('click', e => {
  e.preventDefault();
  showSection(aboutSection);
});
servicesBtn.addEventListener('click', e => {
  e.preventDefault();
  showSection(servicesSection);
});
contactBtn.addEventListener('click', e => {
  e.preventDefault();
  showSection(contactSection);
});
aboutBtnSide.addEventListener('click', e => {
  e.preventDefault();
  showSection(aboutSection);
});
servicesBtnSide.addEventListener('click', e => {
  e.preventDefault();
  showSection(servicesSection);
});
contactBtnSide.addEventListener('click', e => {
  e.preventDefault();
  showSection(contactSection);
});

heroServicesBtn.addEventListener('click', e => {
  e.preventDefault();
  showSection(servicesSection);
});

document.querySelectorAll('.service-contact-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    showSection(contactSection);
  });
});

backBtnAbout.addEventListener('click', e => {
  e.preventDefault();
  showHome();
});
backBtnContact.addEventListener('click', e => {
  e.preventDefault();
  showHome();
});


document.getElementById("aboutBtn").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
