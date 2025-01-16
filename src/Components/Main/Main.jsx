import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx'; 
import { IoSearch, IoLogoInstagram, IoLogoFacebook, IoLogoWhatsapp, IoMailOutline } from 'react-icons/io5';
import './Main.css';

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для отслеживания открытости меню

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Переключаем состояние меню
  };

  return (
    <div>
      {/* Иконка гамбургера, которая будет видна только на мобильных устройствах */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <RxHamburgerMenu className="Hamburger-icon" size={30} color="#fff" />
      </div>
      <img className='logo' src='logo-ma.png' />
      {/* Иконка поиска, видна только на десктопах */}
      <div>
        <IoSearch className="Search-icon" size={30} color="#fff" />
      </div>
      <div className='all-menu'>
        
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <details>
          <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Обо мне</summary>
          <p>Резюме</p>
          <p>Образование</p>
          <p>Научная степень и звание</p>
          <p>Членство в различных организациях</p>
          <p>Достижения</p>
        </details>
        <details>
          <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>Публикации</summary>
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
      </div>
      </div>
      <section>
        <img className='murat-photo' src='murat-photo-2.jpg' />
      <h1>Абдиев <br></br> Мурат <br></br> Журатович</h1>
      <div className='orange'></div>
      <h3><span className='dok'>Док</span>тор экономических наук, профессор</h3>
      </section>
      <section className='second-section'>

      </section>
      <section className='third-section'>

      </section>
      <footer>
      <div className='orange2'></div>
      <div className='all-a'>

      <a href='https://www.instagram.com/mabdiev1977/'><IoLogoInstagram /></a>
      <a href='https://www.facebook.com/people/%D0%9C%D1%83%D1%80%D0%B0%D1%82-%D0%90%D0%B1%D0%B4%D0%B8%D0%B5%D0%B2/pfbid0u53et5mM3Yq1Da2q6tqDraHcxWGkLVkbj8bh18zH4qPPoFQxqN5yo4MHuvZ1vKrpl/'><IoLogoFacebook /></a>
      <a href='https://wa.me/+996772456100'><IoLogoWhatsapp /></a>
      <a href='mabdiev1977@mail.ru'><IoMailOutline /></a>
      </div>
      </footer>
    </div>
  );
};

export default Main;
