import AuthorizationAPI from "./API/AuthorizationAPI";

export const HOME_URL = "/";
export const MAN_URL = HOME_URL + "man"
export const WOMAN_URL = HOME_URL + "woman"
export const BRANDS_URL = HOME_URL + "brands"
export const FAVORITES_URL = HOME_URL + "favorites"

export class Urls {
    readonly Home: string = HOME_URL;
    readonly Man: string = MAN_URL;
    readonly Woman: string = WOMAN_URL;
    readonly Brands: string = BRANDS_URL;
    readonly Favorites: string = FAVORITES_URL;
}