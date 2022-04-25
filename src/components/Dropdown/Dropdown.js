import React from 'react';
import s from './Dropdown.module.css';

class Dropdown extends React.Component {
  render() {
    return (
      <div className={s.dropdown}>
        <button type="button" className="toggle">
          Показать
        </button>

        <div className={s.menu}>Выпадающее меню</div>
      </div>
    );
  }
}

export default Dropdown;
