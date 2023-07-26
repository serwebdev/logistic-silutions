(function () {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.menu');
  const menuLink = document.querySelectorAll('.menu__link');

  // Сбросит transition с menu
  menu.style.transition = 'none';

  burger.addEventListener('click', () => {
    if (!menu.classList.contains('open')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // Открывает меню
  function openMenu() {
    menu.style.transition = '';
    // Ширина body до открытия меню
    const widthBodyBefore = document.body.clientWidth;
    menu.classList.add('open');
    burger.classList.add('active');
    // Блокирует скролл на body
    document.body.style.overflow = 'hidden';

    addPaddingBody(widthBodyBefore);
  }
  // Закрывает меню
  function closeMenu() {
    menu.classList.remove('open');
    burger.classList.remove('active');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  // Добавляет padding-right для body
  function addPaddingBody(widthBodyBefore) {
    // Ширина body после открытия меню
    const widthBodyAfter = document.body.clientWidth;
    // Ширина скролл-бара
    const widthScroll = widthBodyAfter - widthBodyBefore;
    // padding-right для body
    document.body.style.paddingRight = widthScroll + 'px';
  }

  // Закрывает меню при клике на пункт меню
  menuLink.forEach(item => {
    item.addEventListener('click', () => {
      // Сбросит transition с бургура
      burger.classList.add('no-transition');
      // Сбросит transition с menu
      menu.style.transition = 'none';
      closeMenu();
    });
  });
})();
