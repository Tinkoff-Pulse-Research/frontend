import React from 'react';
import styles from './Content.module.scss'

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__research}>
        <textarea
          name=""
          id=""
          className={styles.content__research__field}
        ></textarea>
        <button className={styles.content__research__submit}>ПОИСК</button>
      </div>
    </div>
  );
};

export default Content;