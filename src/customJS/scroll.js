
function scroll(event, scrollArea) {
  scrollArea.scrollTop = event.target.value*(scrollArea.scrollHeight/200);
}

export { scroll };
