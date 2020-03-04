(function () {
  const menu = document.getElementById('menu');
  const dropDown = document. getElementById('drop-down');
  const list = document.getElementById('list');

  menu.addEventListener('click', () => {
    if (dropDown.classList.contains('unfold')) {
      dropDown.classList.remove('unfold');
    } else {
      dropDown.classList.add('unfold');
    }
  });
})();

const getDot = (num) => {
  let dot = document.getElementsByClassName('dot')[num - 1];

  return { dot };
};

const colorDot = (num) => {
  for (let i = 0; i < 9; i++) {
    if (i === (num - 1)) {
      getDot(num).dot.style.background = 'grey';
    } else {
      getDot(i + 1).dot.style.background = 'transparent';
    }
  }
};

const moveImage = (num) => {
  const picsContainer = document.getElementById('pics-container');
  picsContainer.style.right = `${(num - 1) * 500}px`;
};

const picChangeAction = (num) => {
  moveImage(num);
  colorDot(num);
};

(function  () {
  let num = 1;

  picChangeAction(num);

  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');

  leftArrow.addEventListener('click', () => {
    num -= 1;
    if (num < 1) {
      num = 9;
    }

    picChangeAction(num);
  });

  rightArrow.addEventListener('click', () => {
    num += 1;
    if (num > 9) {
      num = 1;
    }

    picChangeAction(num);
  });

  setInterval(function () {
    num += 1;
    if (num > 9) {
      num = 1;
    }

    for (let i = 0; i < 9; i++) {
      getDot(i + 1).dot.addEventListener('click', () => {
        picChangeAction(i + 1);
        num = i + 1;
      });
    }

    picChangeAction(num);
    console.log('done');
  }, 5000);
})();
