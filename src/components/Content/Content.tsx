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
      <div className={styles.content__description}>
        СД - Совет компании по Дивидендам

        Дивы - дивиденды, часть суммы чистой прибыли акционерного общества, распределяемая между акционерами в соответствии с количеством акций

        Памп - провоцируемый рост акционерами спроса на активы с целью дальнейшей его продажи по высокой цене
      </div>
    </div>
  );
};

export default Content;