(function () {
  const label = document.querySelector('.quiz-page-5__label');
  if (!label) return;
  const quizInputFile = label.querySelector('.quiz-page-5__input-file');
  const textStart = label.querySelector('.quiz-page-5__label-text-start');
  const textChange = label.querySelector('.quiz-page-5__label-text-change');

  // Заменяет текст в label==========================================
  function changeText(fileList) {
    if (fileList && fileList.length) {
      textStart.style.display = 'none';
      textChange.style.display = 'inline';
      textChange.querySelector('span').textContent = fileList.length;
    } else {
      textStart.style.display = '';
      textChange.style.display = '';
    }
  }

  // Выбор файла===========================================
  quizInputFile.addEventListener('change', e => {
    const fileList = e.target.files;
    changeText(fileList);
  });

  // Перетаскивание файлов================================================
  label.addEventListener('dragover', e => {
    e.preventDefault();
    // Создается копия файла
    e.dataTransfer.dropEffect = 'copy';
  });

  label.addEventListener('drop', e => {
    e.preventDefault();
    const fileList = e.dataTransfer.files;
    changeText(fileList);
  });
})();
