import style from './thirdSlide.module.css';

export function ThirdSlide (props) {
  return <>

    <div className={style.bubble1}></div>
    <div className={style.bubble2}></div>
    <div className={style.bubble3}></div>
    <div className={style.bubble4}></div>
    <div className={style.bubble5}></div>
    <div className={style.bubble6}></div>
    <div className={style.bubble7}></div>
    <div className={style.bubble8}></div>

    <div className={style.wrapper}>

      <div className={style.content} >
        <div className={style.title}>
          <div className={style.textTitle}>КЛЮЧЕВОЕ СООБЩЕНИЕ</div>
          <div className={style.brandTitle}>BREND<b>XY</b></div>
        </div>
        <div className={style.article}>
          <div className={style.food}>
            <div className={style.foodText}>
            Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies
            </div>
          </div>
          <div className={style.calendar}>
            <div className={style.calendarBlock}>
              <div className={style.calendarText}>
                A arcu cursus vitae
              </div>
            </div>
            <button className={style.button} data-id={'details'}>
              <span className={style.circle}></span>
              <span className={style.text}>Подробнее</span>
            </button>
          </div>
        </div>
      </div>
      <div className={style.mask} data-id={'mask'}></div>
      <div className={style.popUp} data-id={'popUp'}>

        <div className={style.cross} data-id={'close-item'}></div>

        <div className={style.popUp_textTitle}>ПРЕИМУЩЕСТВА</div>
        <div className={style.popUp_brandTitle}>BREND<b>XY</b></div>

        <ul className={style.list} data-id={'firstUl'}>
          <li>
            <div className={style.num}>01</div>
            <div className={style.listElem}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>
            <div className={style.num}>02</div>
            <div className={style.listElem}>
              Faucibus pulvinar elementum integer enim
            </div>
            <div className={style.num}>03</div>
            <div className={style.listElem}>
              Faucibus pulvinar elementum integer enim
            </div>
          </li>
        </ul>
        <ul className={style.list} data-id={'secondUl'}>
          <li>
            <div className={style.num}>04</div>
            <div className={style.listElem}>
            Mi bibendum neque egestas congue quisque egestas diam
            </div>
            <div className={style.num}>05</div>
            <div className={style.listElem}>
              Venenatis lectus magna fringilla urna
            </div>
            <div className={style.num}>06</div>
            <div className={style.listElem}>
              Venenatis lectus magna fringilla urna
            </div>
          </li>
        </ul>
        <div className={style.groupRadio}>
          <label>
            <span className={style.previous} data-id={'prev'}>&#5176;</span>
            <input type='radio' className={style.radio} name='group1' data-id={'prevRadio'} />
            <input type='radio' className={style.radio} name='group1' data-id={'nextRadio'}/>
            <span className={style.next} data-id={'next'}>&#5171;</span>
          </label>
        </div>
      </div>
    </div>
  </>;
}
