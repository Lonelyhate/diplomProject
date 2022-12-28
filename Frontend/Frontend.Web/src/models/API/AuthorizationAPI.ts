import BaseAPI from "./BaseAPI";
import ApiType from "./ApiType";
import {IUser} from "../User";

class AuthorizationAPI extends BaseAPI
{
    BaseUrl = "https://localhost:7175/api/"

    public async  UserChekByLogin(email: string) {
        return await this.SendAsync<boolean>({
            Url: `/User/check?email=${email}`,
            ApiType: ApiType.GET,
        });
    }

    public async UserLogin(login: string, password: string) {
        return await this.SendAsync<IUser>({
            Url: `User/login`,
            ApiType: ApiType.POST,
            Data: {
                email: login,
                password: password
            }
        })
    }
}

export default new AuthorizationAPI();