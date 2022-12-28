import {AppDispatch} from "../store";
import AuthorizationAPI from "../../models/API/AuthorizationAPI";
import {userSlice} from "./UserSlice";

export const fetchUserLogin = () => async (dispacth: AppDispatch) => {
    let response;
    try {
        dispacth(userSlice.actions.userLoading);
        response = await AuthorizationAPI.UserLogin("user@example.com", "string");
        dispacth(userSlice.actions.userSuccess(response.data!))
    } catch (e) {
        dispacth(userSlice.actions.userError(response?.displayMessage!))
    }
}