interface IOwner {
  "id": string,
  "nickname": string,
  "image": string,
  "donationActive": boolean,
  "block": boolean,
  "serviceTags": ITag[]
}

interface ITag {
  "id": string
}

interface IInstrument {
  "type": string,
  "ticker": string,
  "lastPrice": number,
  "currency": string,
  "image": string,
  "briefName": string,
  "dailyYield": null,
  "relativeDailyYield": number,
  "price": number,
  "relativeYield": number
}

export interface IResponseData {
  "id": string,
  "text": string,
  "likesCount": number,
  "commentsCount": number,
  "isLiked": boolean,
  "inserted": string,
  "isEditable": boolean,
  "instruments": IInstrument[],
  "profiles": [],
  "serviceTags": ITag[]
  "profileId": string,
  "nickname": string,
  "image": string,
  "postImages": [],
  "hashtags": [],
  "owner": IOwner,
  "reactions": {
    "totalCount": number,
    "myReaction": null,
    "counters": []
  },
  "content": {
    "type": string,
    "title": string,
    "announce": string,
    "instruments": IInstrument[],
    "headerImage": {
      "url": string
    },
    "video": null
  },
  "baseTariffCategory": string,
  "isBookmarked": boolean,
  "status": string
}