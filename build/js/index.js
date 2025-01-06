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

var modal = document.querySelector('.modal');
var triggers = document.querySelectorAll('.modal-active');
var closeButton = document.querySelector('.close-button');

function toggleModal() {
  modal.classList.toggle('show-modal');

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

// Додаємо обробники подій для відкриття та закриття модального вікна
triggers.forEach(function (trigger) {
  trigger.addEventListener('click', toggleModal);
});

closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('modalForm');
  const closeButton = document.querySelector('.close-button');

  closeButton.addEventListener('click', closeModal);

  let formSubmitted = false;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (formSubmitted) return;

    formSubmitted = true;

    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    const formData = new FormData(form);

    fetch('/send_email_modal.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        document.body.classList.remove('lock');

        const modal = document.querySelector('.modal');
        if (modal.classList.contains('show-modal')) {
          modal.classList.remove('show-modal');
        }

        alert('Ваш запит відправлено!');
        closeModal(); // Закриваємо модальне вікно після відправки форми

        formSubmitted = false;
        submitButton.disabled = false;
      })
      .catch((error) => {
        console.error('Помилка:', error);
        alert('Сталася помилка при відправці форми.');
        formSubmitted = false;
        submitButton.disabled = false;
      });
  });
});

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('show-modal'); // Приховуємо модальне вікно, знімаючи клас
}

// Функція для перевірки видимості блоку calculation
function checkCalculationVisibility() {
  const scrollButton = document.getElementById('scrollButton');
  const calculationSection = document.querySelector('.calculation');
  const rect = calculationSection.getBoundingClientRect();

  // Перевірка, чи блок calculation повністю видимий на екрані
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    scrollButton.classList.remove('visible'); // Сховати кнопку
  } else {
    scrollButton.classList.add('visible'); // Показати кнопку
  }
}

// Додати обробник події скролу
window.onscroll = function () {
  checkCalculationVisibility();
};

// Функція для скролу догори
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Плавний скролінг
  });
}

// Отримати кнопку прокрутки
var scrollButton = document.getElementById('scrollButton');

document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    disable: function () {
      var isMobile = window.innerWidth < 768;
      console.log('AOS disabled:', isMobile);
      return isMobile;
    },
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 100,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });
});

// Викликати функцію при завантаженні сторінки
checkCalculationVisibility();
