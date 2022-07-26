import { IRouteObject } from "@/routes";

export const searchRoute = (path: string, rootRouter: IRouteObject[]): IRouteObject => {
  let result: IRouteObject = {};
  for (let item of rootRouter){
    if (item.path === path) return item;
    if (item.children) {
			const res = searchRoute(path, item.children);
			if (Object.keys(res).length) result = res;
		}
  }
  return result;
};