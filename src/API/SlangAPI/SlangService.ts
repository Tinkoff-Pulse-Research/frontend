import axios from "axios";

export class SlangService {
  private static API_URL = 'https://tinkoff.dan.tatar/'

  public static async detectSlang(text: string) {
    const response = await axios.post(
      this.API_URL + 'detect_slang',
      {text: text}
    )
    return response.data
  }
}