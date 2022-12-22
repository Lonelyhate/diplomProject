import ApiRequest from "./ApiRequest";
import ApiType from "./ApiType";
import axios from "axios";

class BaseAPI<T> {
    baseUrl
    async SendAsync(apiRequest: ApiRequest<T>) {
        const request = axios.create({

        });
        switch (apiRequest.ApiType) {
            case ApiType.GET:

        }
    }
}

export default BaseAPI;