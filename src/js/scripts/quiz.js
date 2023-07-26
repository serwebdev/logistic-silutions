function progressBar(selector) {
  const quizForm = document.querySelector(selector);
  if (!quizForm) return;
  const quizList = quizForm.querySelectorAll('.quiz');
  const btnPrev = quizForm.querySelectorAll('.quiz__btn-prev');
  const btnNext = quizForm.querySelectorAll('.quiz__btn-next');
  const progressbar = quizForm.querySelectorAll('.quiz__progressbar');

  const quizTotal = 6;
  let quizActiveNumber = 0;

  calculateProgress();

  // Расчитывает прогресс==============================================
  function calculateProgress() {
    const progress = progressbar[quizActiveNumber].querySelector('span');
    const widthBar = progressbar[quizActiveNumber].offsetWidth;
    const widthProgress = ((quizActiveNumber + 1) / quizTotal) * widthBar;

    progressbar.forEach(bar => {
      bar.querySelector('span').style.width = '';
    });

    progress.style.width = widthProgress + 'px';
  }

  // Листает назад=====================================================
  btnPrev.forEach(prev => {
    prev.addEventListener('click', () => {
      quizActiveNumber--;
      quizList[quizActiveNumber + 1].classList.remove('active');
      quizList[quizActiveNumber].classList.add('active');

      calculateProgress();
    });
  });

  // Листает вперед=====================================================
  btnNext.forEach(next => {
    next.addEventListener('click', () => {
      quizActiveNumber++;
      quizList[quizActiveNumber - 1].classList.remove('active');
      quizList[quizActiveNumber].classList.add('active');

      calculateProgress();
    });
  });
}

progressBar('.quiz-section__form');
