import { createClient } from "newt-client-js";
import { SPACE_ID, TOKEN, APP_UID } from '$env/static/private';

const client = createClient({
  spaceUid: SPACE_ID,
  token: TOKEN,
  apiType: 'cdn' // You can specify "cdn" or "api".
})

const ArticleId = 'article'

export type Article = {
  _id: string,
  title: string,
  slug: string,
  body?: string,
}

export const getArticleList = async () => {
  const articles = await client.getContents<Article>({
    appUid:APP_UID,
    modelUid:ArticleId,
    query:{
      //https://developers.newt.so/apis/cdn#tag/contents_general/Queries/Format
      body: { fmt: 'text' },
      select: ['title', 'body','slug']
    }
  })
  return articles
}
