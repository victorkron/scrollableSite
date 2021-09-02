
function defaultSettings (radioPrev, prevUl, nextUl) {
  radioPrev.checked = true;

  prevUl.style.display = 'block';
  nextUl.style.display = 'none';

  nextUl.style.opacity = 0;
  setTimeout(() => {
      prevUl.style.opacity = 1;
  }, 0);
}

function showSecondList (radioNext, prevUl, nextUl) {
  radioNext.checked = true;

  prevUl.style.display = 'none';
  nextUl.style.display = 'block';

  prevUl.style.opacity = 0;
  setTimeout(() => {
    nextUl.style.opacity = 1;
  }, 0);
}

function chosePrevRadio (radioPrev, nextUl, prevUl) {
  if (radioPrev.checked) {
    nextUl.style.display = 'none';
    prevUl.style.display = 'block';

    nextUl.style.opacity = 0;
    setTimeout(() => {
        prevUl.style.opacity = 1;
    }, 0);

  } else {
    nextUl.style.display = 'block';
    prevUl.style.display = 'none';

  }
}

function choseNextRadio (radioNext, nextUl, prevUl) {
  if (radioNext.checked) {
    nextUl.style.display = 'block';
    prevUl.style.display = 'none';

    prevUl.style.opacity = 0;
    setTimeout(() => {
      nextUl.style.opacity = 1;
    }, 0);

  } else {
    nextUl.style.display = 'block';
    prevUl.style.display = 'none';
  }
}



export { defaultSettings, showSecondList, chosePrevRadio, choseNextRadio };
