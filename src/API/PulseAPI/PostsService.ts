import axios from "axios";

export class PostsService {
  private static API_URL = 'https://www.tinkoff.ru/api/invest-gw/social/v1/profile/25cf055b-1543-47a8-b22e-4aa51b124f7b/post?limit=1'

  public static async getLastPost() {
    await axios.get(this.API_URL).then((request) => {
      console.log(request.data)
    })
  }
}