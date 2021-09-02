let startTap = 0;
let offset = 0;
let state = 1;

function homeState(slides, spermBlock) {
  state = 1;
  setTimeout(() => {
    spermBlock.style.display = 'none';
  }, 500)
  slides.forEach((item, i) => {
    item.style.transform = `translateX(0px)`;
  });
}

function swipeStart(event) {
  startTap = event.targetTouches[0].clientX;
}

function swipeAction(event, slides) {

  if (event.target.dataset.id !== 'thumb') {
    offset = event.targetTouches[0].clientX - startTap;
    slides.forEach((item, i) => {

      if (state == 1) {
        item.style.transform = `translateX(${offset}px)`;
      } else if (state == 2) {
        item.style.transform = `translateX(calc(-100% + ${offset}px))`;
      } else if (state == 3) {
        item.style.transform = `translateX(calc(-200% + ${offset}px))`;
      } else {

        throw('notExpect');
      }
    });
  }

}

function swipeEnd(event, slides, spermBlock) {
  //debugger
  if (event.target.dataset.id !== 'thumb') {

    if (offset < -200) {
      if(state == 3) {
        state = state;
      } else  {
        state = state + 1;
      }
    } else if (offset > 200) {
      if(state == 1) {
        state = state;
      } else  {
        state = state - 1;
      }
    } else {
      state = state;
    }

    offset = 0;

    slides.forEach((item, i) => {
      if (state == 1) {
        item.style.transform = `translateX(0px)`;
        if (event.target.dataset.id !== 'nextPage' && event.target.dataset.id !== 'nextPageCirc' && event.target.dataset.id !== 'nextPageText') {
          setTimeout(() => {
            spermBlock.style.display = 'none';
          }, 500)
        }

      } else if (state == 2) {
        spermBlock.style.display = 'block';
        item.style.transform = `translateX(-100%)`;
      } else if (state == 3) {
        item.style.transform = `translateX(-200%)`;
      } else {

        throw('notExpect');
      }
    });
  }

}

function nextPage(event, slides, spermBlock) {
  state = 2;
  slides.forEach((item, i) => {
    item.style.transform = `translateX(-100%)`;
  });
  spermBlock.style.display = 'block';
}

function test() {
  // slides.forEach((item, i) => {
  //   console.log(item);
  // });
}


export { swipeStart, swipeAction, swipeEnd, test, homeState, nextPage };
