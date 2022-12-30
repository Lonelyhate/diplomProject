import {AppDispatch} from "../store";
import AuthorizationAPI from "../../models/API/AuthorizationAPI";
import {userSlice} from "./UserSlice";
import {Console} from "inspector";

export const fetchUserLogin = (login: string, password: string) => async (dispacth: AppDispatch) => {
    let response;
    try {
        dispacth(userSlice.actions.userLoading());
        response = await AuthorizationAPI.UserLogin(login, password);
        if (!response.isSuccess) {
            dispacth(userSlice.actions.userError(response.displayMessage!));
            return;
        }
        dispacth(userSlice.actions.userSuccess(response.data!))
    } catch (e) {
        dispacth(userSlice.actions.userError("Error userLogin"))
    }
}