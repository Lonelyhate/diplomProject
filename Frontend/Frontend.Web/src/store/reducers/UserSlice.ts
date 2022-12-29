import {IUser} from "../../models/User";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    currentUser: IUser | null;
    isLoading: boolean;
    error: string;
    isAuth: boolean;
}

const initialState: UserState = {
    currentUser: null,
    isLoading: false,
    error: '',
    isAuth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoading(state) {
            state.isLoading = true;
        },
        userSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.error = "";
            state.currentUser = action.payload;
            state.isAuth = true;
        },
        userError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default userSlice.reducer;