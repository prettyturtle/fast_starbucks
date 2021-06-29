const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input');
// 4번 줄은 2번 줄과 같은 의미
const searchInputEl = searchEl.querySelector('input');

// 괄호 안의 function을 핸들러라 부른다.
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();