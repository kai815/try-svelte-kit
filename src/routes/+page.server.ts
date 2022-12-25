import { getArticleList } from "../lib/newt";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return await getArticleList();
};

export const prerender = true;
