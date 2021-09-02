import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as swipe from './customJS/swipe.js';
import * as scroll from './customJS/scroll.js';
import * as visible from './customJS/visibleElement.js';
import * as changePopUp from './customJS/changePopUp.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let home = document.querySelector('div[data-id="home-logo"]');
let track = document.querySelector('div[data-elem="slider-track"]');
let slides = Array.from(document.querySelectorAll('div[data-elem="slide"]'));
let buttonNextPage = document.querySelector('button[data-id="nextPage"]');
let scrollBtn = document.querySelector('input[data-id="thumb"]');
let scrollArea = document.querySelector('div[data-id="scrollArea"]');

let popUp = document.querySelector('div[data-id="popUp"]');
let mask = document.querySelector('div[data-id="mask"]');
let closeItem = document.querySelector('div[data-id="close-item"]');
let detailsBtn = document.querySelector('button[data-id="details"]');

let prevUl = document.querySelector('ul[data-id="firstUl"]');
let nextUl = document.querySelector('ul[data-id="secondUl"]');

let arrowPrev = document.querySelector('span[data-id="prev"]');
let arrowNext = document.querySelector('span[data-id="next"]');
let radioPrev = document.querySelector('input[data-id="prevRadio"]');
let radioNext = document.querySelector('input[data-id="nextRadio"]');

let spermBlock = document.querySelector('div[data-id="sperm-wrapper"]');

scrollBtn.value = 0;
popUp.style.display = 'none';
nextUl.style.display = 'none';
radioPrev.checked = true;

prevUl.style.opacity = 0;
nextUl.style.opacity = 0;

mask.style.opacity = 0;
mask.style.display = 'none';

spermBlock.style.display = 'none';

home.addEventListener('click', (event) => {
  swipe.homeState(slides, spermBlock);
});

track.addEventListener('touchstart', (event) => {
  swipe.swipeStart(event);
});

track.addEventListener('touchmove',  (event) => {
  swipe.swipeAction(event, slides);
});

track.addEventListener('touchend',  (event) => {
  swipe.swipeEnd(event, slides, spermBlock);
});

buttonNextPage.addEventListener('click', (event) => {
  swipe.nextPage(event, slides, spermBlock);
});

scrollBtn.addEventListener('input', (event) => {
  scroll.scroll(event, scrollArea);
});

closeItem.addEventListener('click', (event) => {
  visible.hide(event, popUp, mask);
});

detailsBtn.addEventListener('click', (event) => {
  visible.show(event, popUp, mask);
  changePopUp.defaultSettings(radioPrev, prevUl, nextUl);
});

arrowPrev.addEventListener('click', (event) => {
  event.preventDefault();
  changePopUp.defaultSettings(radioPrev, prevUl, nextUl);
});

arrowNext.addEventListener('click', (event) => {
  event.preventDefault();
  changePopUp.showSecondList(radioNext, prevUl, nextUl);


});

radioPrev.addEventListener('change', (event) => {
  event.preventDefault();
  changePopUp.chosePrevRadio(radioPrev, nextUl, prevUl);
});


radioNext.addEventListener('change', (event) => {
  event.preventDefault();
  changePopUp.choseNextRadio(radioNext, nextUl, prevUl);
});
