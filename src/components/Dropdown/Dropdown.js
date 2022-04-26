import React from 'react';
import s from './Dropdown.module.css';

class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className={s.dropdown}>
        <button type="button" className={s.toggle} onClick={this.toggle}>
          {visible ? 'Скрить' : 'Показать'}
        </button>

        {visible && <div className={s.menu}>Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
