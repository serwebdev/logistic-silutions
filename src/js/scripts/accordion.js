(function () {
  const accordion = document.querySelector('.accordion');
  if (!accordion) return;
  const accordionHeader = accordion.querySelectorAll('.accordion__header');
  const accordionBody = accordion.querySelectorAll('.accordion__body');

  accordionHeader.forEach((item, i) => {
    item.addEventListener('click', () => {
      // Закрывает все item
      accordionHeader.forEach((header, ind) => {
        if (header !== item) {
          accordionBody[ind].classList.remove('show');
          accordionBody[ind].style.height = 0 + 'px';
          header.classList.remove('active');
        }
      });
      // Открывает текущий item
      accordionBody[i].classList.toggle('show');
      if (accordionBody[i].classList.contains('show')) {
        accordionBody[i].style.height = accordionBody[i].scrollHeight + 'px';
        item.classList.add('active');
      } else {
        accordionBody[i].style.height = 0 + 'px';
        item.classList.remove('active');
      }
    });
  });
})();
