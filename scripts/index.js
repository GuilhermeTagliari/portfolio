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

{var navbarButtonsBlocked = false;

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

var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entryImage) {
    if (entryImage.isIntersecting && !navbarButtonsBlocked && isUserScrolling) {
      console.log(entryImage.target.id);
      requestAnimationFrame(function () {
        location.hash = "#" + entryImage.target.id;
      });
    }
  });
}, {
  rootMargin: '0px',
  threshold: 0.3
});

var isUserScrolling = false;

var images = document.querySelectorAll('.navbar, #header, #skills, #projects, #footer, section[id]');
images.forEach(function (image) {
  io.observe(image);
});

document.addEventListener('wheel', function (event) {
  if (!navbarButtonsBlocked) {
    isUserScrolling = true;
    setTimeout(function () {
      isUserScrolling = false;
    }, 100); 
  }
});}

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('hashchange', function () {
    navbarButtonsBlocked = false;
  });
});

