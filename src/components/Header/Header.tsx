import { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <img src="images/tinkoff.png" alt="" width="128px"/>
      <p className={styles.header__title}>ПОИСК БИРЖЕВОГО СЛЕНГА</p>
      <img src="images/kotchoubey.png" alt="" width="128px"/>
    </div>
  );
};

export default Header;