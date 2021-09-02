import style from './secondSlide.module.css';

export function SecondSlide (props) {
  return <>

    <div className={style.spermWrapper} data-id={'sperm-wrapper'}>
      <div className={style.sperm1}></div>
      <div className={style.sperm2}></div>
      <div className={style.sperm3}></div>
      <div className={style.sperm4}></div>
      <div className={style.sperm5}></div>
    </div>
    <div className={style.wrapper}>
      <div className={style.hello} >ТЕКСТ</div>
      <div className={style.hello} >СООБЩЕНИЯ</div>
      <div className={style.article}>
        <input type="range" className={style.bar} data-id="thumb" />
        <div className={style.textWrapper}>
          <div className={style.textarea} data-id="scrollArea">
            <p>
              <b>Lorem ipsum dolor sit amet</b> consectetur adipisicing elit. Atque itaque, porro temporibus quidem non eaque magni. Harum accusantium possimus exercitationem fugiat, est voluptate nulla temporibus enim quisquam perferendis alias neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque, porro temporibus quidem non eaque magni. Harum accusantium possimus exercitationem fugiat, est voluptate nulla temporibus enim quisquam perferendis alias neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque, porro temporibus quidem non eaque magni. Harum accusantium possimus exercitationem fugiat, est voluptate nulla temporibus enim quisquam perferendis alias neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque, porro temporibus quidem non eaque magni. Harum accusantium possimus exercitationem fugiat, est voluptate nulla temporibus enim quisquam perferendis alias neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque, porro temporibus quidem non eaque magni.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque, porro temporibus quidem non eaque magni. Harum accusantium possimus exercitationem fugiat, est voluptate nulla temporibus enim quisquam perferendis alias neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque, porro temporibus quidem non eaque magni. Harum accusantium possimus exercitationem fugiat, est voluptate nulla temporibus enim quisquam perferendis alias neque?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </>;
}
