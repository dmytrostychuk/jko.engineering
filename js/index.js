const navBarBtn = document.querySelector('.navbar__button');
const menu = document.querySelector('.menu');
const headerContainer = document.querySelector('.header__container');

navBarBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
  headerContainer.classList.toggle('header--active');
  navBarBtn.classList.toggle('opened');
});
document.addEventListener('click', function (event) {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickInsideNavbarBtn = navBarBtn.contains(event.target);
  const isClickInsideHeaderContainer = headerContainer.contains(event.target);

  if (
    !isClickInsideMenu &&
    !isClickInsideNavbarBtn &&
    !isClickInsideHeaderContainer
  ) {
    // Якщо клік відбувся поза меню, поза кнопкою і поза header__container, закриємо меню
    menu.classList.remove('menu--active');
    headerContainer.classList.remove('header--active');
    navBarBtn.classList.remove('opened');
  }
});

var rellax = new Rellax('.rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: false,
  horizontal: false,
});

const scrollpos = window.scrollY;
const header = document.querySelector('header');
const scrollChange = 1;

const addClassOnScroll = () => {
  header.classList.add('header__scroll');
  document.querySelector('.nav__inner').classList.add('header__scroll-nav');
  document.querySelector('.menu').classList.add('header__scroll');
  document
    .querySelector('.accessories__nav')
    .classList.add('accessories__nav--scroll'); // Добавляем класс к accessories__nav
};

const removeClassOnScroll = () => {
  header.classList.remove('header__scroll');
  document.querySelector('.nav__inner').classList.remove('header__scroll-nav');
  document.querySelector('.menu').classList.remove('header__scroll');
  document
    .querySelector('.accessories__nav')
    .classList.remove('accessories__nav--scroll'); // Удаляем класс из accessories__nav
};

window.addEventListener('scroll', function () {
  const scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
    addClassOnScroll();
  } else {
    removeClassOnScroll();
  }
});

// - modal
var modal = document.querySelector('.modal');
var triggers = document.querySelectorAll('.modal-active');
var closeButton = document.querySelector('.close-button');

function toggleModal() {
  modal.classList.toggle('show-modal');

  console.log('toggleModal');

  if (window.innerWidth > 991) {
    document.body.classList.toggle('lock');
  } else if (!modal.classList.contains('show-modal')) {
    document.body.classList.remove('lock');
  }
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

triggers.forEach(function (trigger) {
  trigger.addEventListener('click', toggleModal);
});

closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

// Get the scroll button element
var scrollButton = document.getElementById('scrollButton');

// Show scroll button when scrolling 100vh
window.addEventListener('scroll', function () {
  if (window.scrollY >= window.innerHeight) {
    scrollButton.style.opacity = '1';
  } else {
    scrollButton.style.opacity = '0';
  }
});

// Function to scroll to the top when the button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// form
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.modal__form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent the form from submitting normally

    const email = document.querySelector('.modal__input').value;
    sendEmail(email);
  });

  function sendEmail(email) {
    fetch('send_email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Message sent!');
        } else {
          alert('Error sending message');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error sending message');
      });
  }
});
