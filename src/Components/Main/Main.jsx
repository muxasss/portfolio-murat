import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoSearch, IoLogoWhatsapp, IoMail } from 'react-icons/io5';
import './Main.css';

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для отслеживания открытости меню

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  // Добавляем или удаляем класс "menu-open" на body, когда меню открывается/закрывается
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    // Очистка эффекта при размонтировании компонента
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <div>
      {/* Иконка гамбургера, которая будет видна только на мобильных устройствах */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <RxHamburgerMenu className="Hamburger-icon" size={30} color="#fff" />
      </div>
      <img className='logo' src='logo-ma.png' alt="Logo" />
      <div>
        <IoSearch className="Search-icon" size={30} color="#fff" />
      </div>
      <div className='all-menu'>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <button className="close-menu" onClick={toggleMenu}>
            <RxCross1 />
          </button>
          <img className='logo' src='logo-ma.png' alt="Logo" />
          <details>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>ОБО МНЕ</summary>
            <p className='ppp'>Резюме</p>
            <p>Образование</p>
            <p>Научная степень и звание</p>
            <p>Членство в различных организациях</p>
            <p>Награды</p>
          </details>
          <details>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>ПУБЛИКАЦИИ</summary>
            <p>Научные статьи</p>
            <p>Научные ставки scopus</p>
            <p>Монографии</p>
            <p>Учебные книги и пособии</p>
            <p>Учебные книги и пособии с грифом</p>
            <p>Авторские свидетельства</p>
          </details>
          <details>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Повышение квалификации</summary>
            <p>Участие в конференциях и форумах</p>
            <p>Участие в семинарах и тренингах</p>
            <p>Академическая мобильность</p>
          </details>
          <details>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Членство в научных журналах</summary>
            <p>Журнал "ЭИБ"</p>
            <p>Журнал "АВЕЭ"</p>
          </details>
          <details>
            <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Общественные работы</summary>
          </details>
          <a href='https://www.facebook.com/people/%D0%9C%D1%83%D1%80%D0%B0%D1%82-%D0%90%D0%B1%D0%B4%D0%B8%D0%B5%D0%B2/pfbid0u53et5mM3Yq1Da2q6tqDraHcxWGkLVkbj8bh18zH4qPPoFQxqN5yo4MHuvZ1vKrpl/'>
            <FaFacebookF className='logo-facebook2'/>
          </a>
          <a href='https://www.instagram.com/mabdiev1977/'>
            <FaInstagram className='logo-insta2' />
          </a>
          <a href='https://wa.me/+996772456100'>
            <IoLogoWhatsapp className='logo-whatsapp2' />
          </a>
          <a href='https://mabdiev1977@mail.ru'>
            <IoMail className='logo-mail2' />
          </a>
        </div>
      </div>
      <section>
        <img className='murat-photo' src='murat-photo-2.jpg' alt="Murat" />
        <h1>Абдиев <br /> <span className='murat'>Мурат</span> <br /> Журатович</h1>
        <div className='orange'></div>
        <h3><span className='dok'>Док</span>тор экономических наук, профессор</h3>
      </section>
      <section className='second-section'>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L120,106.7C240,117,480,139,720,128C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
      
      </section>
      <section className='third-section'>
      <div className="wave-container">

  
</div>
      </section>
      <footer>
        <div className='orange2'></div>
        <h3>Murat Abdiev</h3>
        <div className='all-a'>
          <a href='https://www.facebook.com/people/%D0%9C%D1%83%D1%80%D0%B0%D1%82-%D0%90%D0%B1%D0%B4%D0%B8%D0%B5%D0%B2/pfbid0u53et5mM3Yq1Da2q6tqDraHcxWGkLVkbj8bh18zH4qPPoFQxqN5yo4MHuvZ1vKrpl/'><FaFacebookF className='logo-facebook'/></a>
          <a href='https://www.instagram.com/mabdiev1977/'><FaInstagram className='logo-insta' /></a>
          <a href='https://wa.me/+996772456100'><IoLogoWhatsapp className='logo-whatsapp' /></a>
          <a href='https://mabdiev1977@mail.ru'><IoMail className='logo-mail' /></a>
        </div>
        <p>Сайт разработан pixelcraft</p>
      </footer>
    </div>
  );
};

export default Main;
