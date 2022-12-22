import ApiType from "./ApiType";

class ApiRequest<T>
{
    public ApiType: ApiType = ApiType.GET;

    public Url: string = "";

    public Data?: T;

    public AccessToken?: string;
}

export default ApiRequest;