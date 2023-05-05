import {FC, useEffect, useRef, useState} from 'react';
import styles from "./DetectSlangForm.module.scss";
import {SlangService} from "../../API/SlangAPI/SlangService";

interface ResponseFromSlangAPI {
  status: 'ok',
  result: {
    slang: boolean,
    highlight: any
  }
}

const DetectSlangForm: FC = () => {

  const fieldRef = useRef<HTMLTextAreaElement>(null)
  // TODO: create loader, when users click to button
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [resultFromAPI, setResultFromAPI] = useState<ResponseFromSlangAPI>()
  const submitData = async () => {
    await SlangService.detectSlang(fieldRef.current!.value).then((response) => {
      console.log(response)
      if (response.status == 'ok') {
        setResultFromAPI(response)
      }
    })
  }

  useEffect(() => {

    console.log(resultFromAPI)
  })

  return (
    <>
      <div className={styles.content__research}>
          <textarea
            name=""
            id=""
            className={styles.content__research__field}
            placeholder="Введите пост для поиска в нем биржевого сленга"
            ref={fieldRef}
          ></textarea>
        <div className={styles.content__research__result}>
          {
            resultFromAPI?.result.highlight
            ?
              Object.entries(resultFromAPI.result.highlight).map(([key, value]) => {
                // @ts-ignore
                return <p key={key}>{key} {value}</p>
              })
              :
              <div></div>
          }
        </div>
        <button onClick={submitData} className={styles.content__research__submit}>
          ПОИСК
        </button>
      </div>
    </>
  );
};

export default DetectSlangForm;