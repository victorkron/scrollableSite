import style from './firstSlide.module.css';

export function FirstSlide (props) {
  return <>

    <div className={style.layer5}></div>
    <div className={style.bakti1}></div>
    <div className={style.layer8}></div>
    <div className={style.layer4}></div>

    <div className={style.layer7}></div>
    <div className={style.pinkSperm1}></div>
    <div className={style.layer4copy}></div>
    <div className={style.layer4copy2}></div>
    <div className={style.pinkSperm}></div>

    <div className={style.wrapper}>
      <div className={style.hello} >ПРИВЕТ,</div>
      <div className={style.content}><span data-id={'expanded'}>ЭТО</span> <b className={style.space}>НЕ</b></div>
      <div className={style.content}>КОММЕРЧЕСКОЕ</div>
      <div className={style.content}>
        <span>ЗАДАНИЕ</span>
        <button className={style.button} data-id={'nextPage'}>
          <span className={style.circle} data-id={'nextPageCirc'}></span>
          <span className={style.text} data-id={'nextPageText'}>Что дальше?</span>
        </button>
      </div>
    </div>
  </>;
}
