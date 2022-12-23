import React from 'react';
import "./styles/global.scss";
import Header from "./shared/Header/Header";
import Auth from "./shared/Auth/Auth";
import {Route, Routes} from "react-router-dom";
import {HOME_URL} from "./models/urls";
import HomePage from "./pages/HomePage/HomePage";
import AuthorizationAPI from "./models/API/AuthorizationAPI";
import Spinner from "./UI/Spinner/Spinner";

function App() {
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
