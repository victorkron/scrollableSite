function hide(event, popUp, mask) {
  popUp.style.display = 'none'
  popUp.style.opacity = 0;
  mask.style.opacity = 0;
  setTimeout(() => {
    mask.style.display = 'none'
  }, 500);
}

function show(event, popUp, mask) {
  popUp.style.display = 'block';
  mask.style.display = 'block'
  setTimeout(() => {
    popUp.style.opacity = 1;
  }, 0);

  setTimeout(() => {
    mask.style.opacity = 0.4;
  }, 0);
}

export { hide, show };
