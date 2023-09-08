import logo from '../images/logo.svg';
import mainpic from '../images/mainpic.png';
import tgicon from '../images/tg-icon.svg';
import vkicon from '../images/vk-icon.svg';

function Main() {
  return (
    <div className="main">
      <div class="main__info">
        <img src={logo} className="logo"></img>
        <h1 className="main__title">ТВОЯ ТЕРРИТОРИЯ СИЛЫ</h1>
        <p className="main__startdate">СТАРТ ПРОДАЖ 9 СЕНТЯБРЯ 2023 ГОДА</p>
        <p className="main__ordertext">Заказать экскурсию по комфортной жизни прямо сейчас:</p>
        <button className="main__button">
          <a href="tel:+74992297575" className="main__telephone">
            +7 499 229-75-75
          </a>
        </button>
      </div>
      <img src={mainpic} className="main__pic" alt="Фотография дома"></img>
      <footer className="footer">
        <p className="footer__address">
          Московская область, Можайский район Координаты: 55.587218, 36.083127
        </p>
        <ul className="buttons">
          <li>
            <a className="button__link">
              <img src={tgicon} />
            </a>
          </li>
          <li>
            <a className="button__link">
              <img src={vkicon} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Main;
