import {Urls} from "./urls";
import {MenuName} from "./Menu/MenuName";

class NavigationApp
{
    readonly Names: MenuName = new MenuName();

    readonly Urls: Urls = new Urls();
}

export default NavigationApp;