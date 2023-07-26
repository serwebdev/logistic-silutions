import noUiSlider from 'nouislider';

(function () {
  // rangeSlider1========================================================
  const rangeSlider1 = document.getElementById('slider-range1');
  if (!rangeSlider1) return;

  noUiSlider.create(rangeSlider1, {
    start: [30],
    connect: 'lower',
    range: {
      min: [0],
      max: [100],
    },
    tooltips: {
      to: function (numericValue) {
        return Math.round(numericValue);
      },
    },
  });

  // rangeSlider2========================================================
  const rangeSlider2 = document.getElementById('slider-range2');
  if (!rangeSlider2) return;

  noUiSlider.create(rangeSlider2, {
    start: [3000],
    connect: 'lower',
    range: {
      min: [0],
      max: [10000],
    },
    tooltips: {
      to: function (numericValue) {
        return Math.round(numericValue);
      },
    },
  });
})();
