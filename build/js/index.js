const navBarBtn = document.querySelector('.navbar__button');
const menu = document.querySelector('.menu');
const headerContainer = document.querySelector('.header__container');

navBarBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
  headerContainer.classList.toggle('header--active');
});

opened = false;
window.onload = function () {
  var btn = document.getElementsByTagName('button')[0];
  btn.addEventListener('click', onBtnClick);
};

function onBtnClick(e) {
  this.classList.toggle('opened');
}

// Also can pass in optional settings block
var rellax = new Rellax('.rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: false,
  horizontal: false,
});

//Записываем, сколько проскроллено по вертикали
let scrollpos = window.scrollY;

const header = document.querySelector('header');

//Сколько пикселей нужно проскролить, чтобы добавить класс. Можете изменить значение
const scrollChange = 1;

//Функция, которая будет добавлять классheader__menu
const addClassOnScroll = () => header.classList.add('header__scroll');
//Отслеживаем событие "скролл"
window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  //Если прокрутили больше, чем мы указали в переменной scrollChange, то выполняется функция добавления класса
  if (scrollpos >= scrollChange) {
    addClassOnScroll();
  }
});

const removeClassOnScroll = () => header.classList.remove('header__scroll');

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

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
