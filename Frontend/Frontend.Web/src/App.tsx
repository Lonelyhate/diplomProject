import React, {useEffect} from 'react';
import "./styles/global.scss";
import Header from "./shared/Header/Header";
import Auth from "./shared/Auth/Auth";
import {Route, Routes} from "react-router-dom";
import {HOME_URL} from "./models/urls";
import HomePage from "./pages/HomePage/HomePage";
import AuthorizationAPI from "./models/API/AuthorizationAPI";
import Spinner from "./UI/Spinner/Spinner";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUserLogin} from "./store/reducers/ActionCreator";

function App() {
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.userReducer);
    useEffect(() => {
        dispatch(fetchUserLogin())
    }, [])
    console.log(user);
  return (
    <div className="App">
        <Header/>
        <main className="App__main">
            <Routes>
                <Route path={HOME_URL} element={<HomePage/>} />
            </Routes>
        </main>
    </div>
  );
}

export default App;
