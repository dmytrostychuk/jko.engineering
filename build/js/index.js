const navBarBtn = document.querySelector('.navbar__button');
const menu = document.querySelector('.menu');
const headerContainer = document.querySelector('.header__container');

navBarBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
  headerContainer.classList.toggle('header--active');
  navBarBtn.classList.toggle('opened');
});

// Also can pass in optional settings block
var rellax = new Rellax('.rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: false,
  horizontal: false,
});

let scrollpos = window.scrollY;

const header = document.querySelector('header');

// Скільки пікселів потрібно прокрутити, щоб додати клас. Можете змінити значення
const scrollChange = 1;

// Функція, яка додає клас header__scroll
const addClassOnScroll = () => {
  header.classList.add('header__scroll');
  document.querySelector('.nav__inner').classList.add('header__scroll-nav');
  document.querySelector('.menu').classList.add('header__scroll');
};

// Функція, яка видаляє клас header__scroll
const removeClassOnScroll = () => {
  header.classList.remove('header__scroll');
  document.querySelector('.nav__inner').classList.remove('header__scroll-nav');
  document.querySelector('.menu').classList.remove('header__scroll');
};

// Відстежуємо подію "скрол"
window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  // Якщо прокрутили більше, ніж ми вказали в змінній scrollChange, то виконується функція додавання класу
  if (scrollpos >= scrollChange) {
    addClassOnScroll();
  } else {
    removeClassOnScroll();
  }
});

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
