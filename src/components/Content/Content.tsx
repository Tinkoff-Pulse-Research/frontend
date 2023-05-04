import {FC, useEffect, useState} from 'react';
import styles from './Content.module.scss'
import {PostsService} from "../../API/PulseAPI/PostsService";

const Content: FC = () => {
  const [lastPost, setLastPost] = useState()

  useEffect(() => {
    const result = PostsService.getLastPost()
  }, [])

  return (
    <div className={styles.content}>
      <div className={styles.content__research}>
        <textarea
          name=""
          id=""
          className={styles.content__research__field}
          placeholder="Введите пост для поиска в нем биржевого сленга"
        ></textarea>
        <button className={styles.content__research__submit}>ПОИСК</button>
      </div>
      <div className={styles.content__description}>
        <p>
          <span className={styles.content__description__highlight}>СД</span> - Совет компании по Дивидендам
        </p>
        <p>
          <span className={styles.content__description__highlight}>Дивы</span> - дивиденды, часть суммы чистой прибыли акционерного общества, распределяемая между акционерами в соответствии с количеством акций
        </p>
        <p>
          <span className={styles.content__description__highlight}>Памп</span> - провоцируемый рост акционерами спроса на активы с целью дальнейшей его продажи по высокой цене
        </p>
      </div>
      <div className={styles.content__images}>
        <img src="images/pulse_3d.png" alt=""/>
      </div>
      <div className={styles.content__pulse_last_post}>
        <h3>Рекомендуем прочитать</h3>
        ...
      </div>
    </div>
  );
};

export default Content;