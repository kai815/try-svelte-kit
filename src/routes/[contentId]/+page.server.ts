import { getArticle } from "../../lib/newt";
import type { PageServerLoad } from "./$types"

export const load:PageServerLoad = async ({params}) => {
  return await getArticle({contentId:params.contentId});
};

export const prerender = true;
