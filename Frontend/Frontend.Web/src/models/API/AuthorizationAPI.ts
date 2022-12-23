import BaseAPI from "./BaseAPI";
import ApiType from "./ApiType";
import {IBaseResponse} from "./BaseResponse";

class AuthorizationAPI extends BaseAPI
{
    BaseUrl = "https://localhost:7175/"

    public async  UserChekByLogin(email: string) {
        return await this.SendAsync<boolean>({
            Url: `api/User/check?email=${email}`,
            ApiType: ApiType.GET,
        });
    }
}

export default new AuthorizationAPI();