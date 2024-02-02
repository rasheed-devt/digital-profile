/*========= toggle icon navbar ========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========= scroll sections active link ========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*========= scroll sections active link ========*/
    let header= document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*========= remove toggle icon and navbar when click navbar link (scroll) ========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

 /*========= scroll reveal ========*/
 ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*========= typed js ========*/
const typed = new Typed('.multiple-text', {
    strings: ['IT Support Expert', 'System Administrator', 'DevOps Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const restrictedElements = [
    "facebookIcon",
    "twitterIcon",
    "instagramIcon",
    "aboutme readmore",
    "service1 readmore",
    "service2 readmore",
    "service3 readmore",
    "link1",
    "link2",
    "link3",
    "link4",
    "link5",
    "link6"
  ];
  
  restrictedElements.forEach(elementId => {
    document.getElementById(elementId).addEventListener("click", function() {
      alert("Restricted: Not Allowed");
    });
  });

  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Display custom message
    alert("At this time, the server is undergoing maintenance. Please send an email to networktechies9@gmail.com.");

  }