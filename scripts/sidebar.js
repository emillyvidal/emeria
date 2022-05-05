const sideNavItem = document.querySelectorAll('#sidebar-nav li');
const cardapioList = document.querySelector('.isActiveCardapio');

sideNavItem[1].addEventListener('click', activeMenuOnClick);

function activeMenuOnClick(){
  cardapioList.classList.toggle('isActiveCardapio');
}