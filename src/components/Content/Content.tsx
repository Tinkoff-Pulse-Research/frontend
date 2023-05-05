import {FC, useCallback, useEffect, useState} from 'react';
import styles from './Content.module.scss'
import {PostsService} from "../../API/PulseAPI/PostsService";
import {IResponseData} from "../../interfaces/interfaces";
import DetectSlangForm from "../DetectSlangForm/DetectSlangForm";

const Content: FC = () => {
  const [lastPost, setLastPost] = useState<IResponseData>()

  const getData = useCallback(async () => {
    await PostsService.getLastPost().then((response) => {
      if (response?.status === 'Ok') {
        setLastPost(response?.payload?.items[0])
      }
    })
  }, [])

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.content}>
      <DetectSlangForm />
      <div className={styles.content__description}>
        <p>
          <span className={styles.content__description__highlight}>СД</span> - Совет компании по Дивидендам
        </p>
        <p>
          <span className={styles.content__description__highlight}>Дивы</span> - дивиденды, часть суммы чистой прибыли
          акционерного общества, распределяемая между акционерами в соответствии с количеством акций
        </p>
        <p>
          <span className={styles.content__description__highlight}>Памп</span> - провоцируемый рост акционерами спроса
          на активы с целью дальнейшей его продажи по высокой цене
        </p>
      </div>
      <div className={styles.content__pulse}>
        <div className={styles.content__pulse__wrapper}>
          <a href="https://www.tinkoff.ru/invest/social/profile/Tinkoff_Investments/" target="_blank">
            <h3 className={styles.content__pulse__wrapper__title}>Рекомендуем прочитать</h3>
            <div className={styles.content__pulse__wrapper__owner}>
              <img
                src={`https://www.tinkoff.ru/api/invest-gw/social/file/v1/cache/profile/avatar/${lastPost?.image}?size=big&appName=invest&platform=web`}
                alt=""
                className={styles.content__pulse__wrapper__owner__image}
              />
              <h4 className={styles.content__pulse__wrapper__owner__nickname}>{lastPost?.owner?.nickname}</h4>
            </div>
            <div className={styles.content__pulse__wrapper__post}>
              <h3 className={styles.content__pulse__wrapper__post__title}>{lastPost?.content?.title}</h3>
              <p className={styles.content__pulse__wrapper__post__text}>{lastPost?.content?.text}</p>
              <img className={styles.content__pulse__wrapper__post__image} src={lastPost?.content?.headerImage?.url}
                   alt=""/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;