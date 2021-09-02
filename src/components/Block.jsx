import style from './block.module.css';
import { Header } from './Header.jsx';
import { SliderTrack } from './SliderTrack.jsx';
import { Footer } from './Footer.jsx';

let str = style.page + ' ' + style.layers;

export function Block() {
  return <>
    <div className={str}>
      <Header />
      <SliderTrack />
      <Footer />
    </div>
  </>;
}

// <Header />
// <SliderTrack />
// <Footer />
