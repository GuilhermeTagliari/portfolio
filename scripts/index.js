const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.menumobile');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

{
  function animateText() {
    const textElement = document.querySelector('.animate-text');
    const text = textElement.textContent;
    textElement.textContent = '';

    let i = 0;
    let delay = 50;

    function addNextLetter() {
      if (i < text.length) {
        textElement.textContent += text.charAt(i);
        i++;
        setTimeout(addNextLetter, delay);
      }
    }

    addNextLetter();
  }

  function controlarAnimacao(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateText();
      }
    });
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(controlarAnimacao, options);

  const textElement = document.querySelector('.animate-text');
  observer.observe(textElement);

  const chk = document.getElementById('chk')
}

var navbarButtonsBlocked = false;

function handleNavbarButtonClick() {
  navbarButtonsBlocked = true;
}

var navbarButtons = document.querySelectorAll('.navbar .navbar__content .navbar__links .menumobile .navbar__mobile.active .mobile__links li a');
navbarButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    handleNavbarButtonClick();
    const navbar = document.querySelector('.navbar');
  });
});

function handleScroll() {
  if (!navbarButtonsBlocked && isUserScrolling) {
    var scrollOffset = window.innerHeight / 2.5; 

    var targetSection = null;

    
    images.forEach(function (image) {
      var rect = image.getBoundingClientRect();
      var sectionCenter = rect.top + rect.height / 2;
      var windowCenter = window.innerHeight / 2;

      if (Math.abs(sectionCenter - windowCenter) <= scrollOffset) {
        targetSection = image;
      }
    });

    if (targetSection) {
      console.log(targetSection.id);
      location.hash = "#" + targetSection.id;
    }
  }
}

var isUserScrolling = false;

var images = document.querySelectorAll('.navbar, #header, #skills, #projects, #footer, section[id]');

document.addEventListener('wheel', function (event) {
  isUserScrolling = true;
  setTimeout(function () {
    isUserScrolling = false;
    handleScroll();
  }, 100);
});

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('hashchange', function () {
    navbarButtonsBlocked = false;
  });

  window.addEventListener('scroll', handleScroll);
});
