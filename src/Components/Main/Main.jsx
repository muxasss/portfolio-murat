import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <div>
      <div className='menu'>

        <details>
        <summary style={{ cursor: "pointer", fontWeight: "bold" }}>Обо мне</summary>
        <p>Резюме</p>
        <p>Образование</p>
        <p>Научная степень и звание</p>
        <p>Членство в различных организациях</p>
        <p>Достижения</p>
      </details>
      <details>
        <summary style={{ cursor: "pointer", fontWeight: "bold" }}>Публикации</summary>
        <p>Научные статьи</p>
        <p>Научные ставки scopus</p>
        <p>Монографии</p>
        <p>Учебные книги и пособии</p>
        <p>Учебные книги и пособии с грифом</p>
        <p>Авторские свидетельства</p>
      </details>
      <details>
        <summary style={{ cursor: "pointer", fontWeight: "bold" }}>Повышение квалификации</summary>
        <p>Участие в конференциях и форумах</p>
        <p>Участие в семинарах и тренингах</p>
        <p>Академическая мобильность</p>
      </details>
      <details>
        <summary style={{ cursor: "pointer", fontWeight: "bold" }}>Членство в научных журналах</summary>
        <p>Журнал "ЭИБ"</p>
        <p>Журнал "АВЕЭ"</p>
      </details>
      <details>
        <summary style={{ cursor: "pointer", fontWeight: "bold" }}>Общественные работы</summary>
      </details>
      </div>
    </div>
  );
};

export default Main;