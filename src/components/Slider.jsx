import style from './slider.module.css';
import { FirstSlide } from './FirstSlide.jsx';
import { SecondSlide } from './SecondSlide.jsx';
import { ThirdSlide } from './ThirdSlide.jsx';

export function Slider(props) {
  let { myId } = props;
  let elem = 'slide';
  let str = style.article;
  let inside = null;
  switch (myId) {
    case 1:
      inside = <FirstSlide />;
      break;
    case 2:
      inside = <SecondSlide />;
      break;
    case 3:
      inside = <ThirdSlide />;
      break;
    default:

  }

  return <>
    <div className={style.article} data-id={myId} data-elem={elem}>
      {inside}
    </div>
  </>;
}
