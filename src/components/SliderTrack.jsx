import style from './sliderTrack.module.css';
import { Slider } from './Slider.jsx';

export function SliderTrack() {
  return <>
    <div className={style.wrapper} data-elem={'slider-track'}>
      <Slider myId={1}/>
      <Slider myId={2}/>
      <Slider myId={3}/>
    </div>
  </>;
}
// <Slider myId={1}/>
