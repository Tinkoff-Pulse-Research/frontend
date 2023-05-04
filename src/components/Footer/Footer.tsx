import { FC } from 'react';
import styles from './Footer.module.scss';
import GithubIcon from "../UI/GithubIcon/GithubIcon";
import HSEIcon from "../UI/HSEIcon/HSEIcon";

const Footer: FC = () => {

  const dt = new Date()

  return (
    <div className={styles.footer}>
      <a
        className={styles.footer__link}
        href="https://github.com/Tinkoff-Pulse-Research"
      >
        <GithubIcon />
        <p>GitHub</p>
      </a>
      <a
        className={styles.footer__link}
        href="https://spb.hse.ru/"
      >
        <HSEIcon />
        <p>HSE SPB</p>
      </a>
      <a
        className={styles.footer__link}
        href="https://www.tinkoff.ru/"
      >
        <img src="images/tinkoff.svg" width="32px" alt=""/>
        <p>TINKOFF</p>
      </a>
      <p className={styles.footer__title}>	{dt.getFullYear()} &#169; All rights reserved</p>
    </div>
  );
};

export default Footer;