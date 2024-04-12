const allLangs = ['ua', 'en', 'de'];
let currentLang =
  localStorage.getItem('language') || checkBrowserLang() || 'ua';
const langButtons = document.querySelectorAll('[data-btn]');
const currentPathName = window.location.pathname;
let currentTextObject = {};

const homeTexts = {
  'nav_page-1': {
    ua: 'Обробка на верстатах із ЧПК',
    en: 'Computer Numerical Control (CNC) Machining',
  },
  'nav_page-2': {
    ua: 'Розробка конструкторської документації',
    en: 'Engineering Documentation Development',
  },
  'nav_page-3': {
    ua: 'Збройові аксесуари',
    en: 'Firearm Accessories',
  },
};
function checkPagePathName() {
  switch (currentPathName) {
    case '/index.html':
      currentText = homeTexts;
      break;
    default:
      currentText = homeTexts;
      break;
  }
}
checkPagePathName();
function changeLang() {
  checkPagePathName(); // Оновлення поточного тексту залежно від шляху сторінки
  for (const key in currentText) {
    const elem = document.querySelector(`[data-lang=${key}]`);
    if (elem) {
      if (elem.tagName === 'INPUT') {
        elem.placeholder = currentText[key][currentLang];
        elem.value = currentText[key][currentLang]; // Додано для зміни значення інпута
      } else {
        elem.textContent = currentText[key][currentLang];
      }
    }
  }
}
changeLang();

langButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    currentLang = event.target.dataset.btn;
    localStorage.setItem('language', event.target.dataset.btn);
    resetActiveClass(langButtons, 'header__btn_active');
    btn.classList.add('header__btn_active');
    changeLang();
  });
});

function resetActiveClass(arr, activeClass) {
  arr.forEach((elem) => {
    elem.classList.remove(activeClass);
  });
}

function checkActiveLengButton() {
  switch (currentLang) {
    case 'ua':
      document
        .querySelector('[data-btn="ua"]')
        .classList.add('header__btn_active');
      break;
    case 'en':
      document
        .querySelector('[data-btn="en"]')
        .classList.add('header__btn_active');
      break;
    case 'de':
      document
        .querySelector('[data-btn="de"]')
        .classList.add('header__btn_active');
      break;

    default:
      document
        .querySelector('[data-btn="ua"]')
        .classList.add('header__btn_active');
      break;
  }
}
checkActiveLengButton();

function checkBrowserLang() {
  const navLang = navigator.language.slice(0, 2).toLowerCase();
  const result = allLangs.some((elem) => {
    return elem === navLang;
  });
  if (result) {
    return navLang;
  }
}

document
  .getElementById('disabledLink')
  .addEventListener('click', function (event) {
    event.preventDefault(); // Забороняємо дійсне переходити по посиланню
  });
