import {IUser} from "../../models/User";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    user: IUser | null;
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    user: null,
    isLoading: false,
    error: ''
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
            state.user = action.payload;
        },
        userError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default userSlice.reducer;