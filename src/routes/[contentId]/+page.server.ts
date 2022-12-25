import { getArticle } from "../../lib/newt";
import type { PageServerLoad } from "./$types"

type ServerProps = {
  params:{
    contentId:string
  }
}
export const load:PageServerLoad = async ({params}:ServerProps) => {
  return await getArticle({contentId:params.contentId});
};

export const prerender = true;
