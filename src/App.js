import React, {useEffect, useLayoutEffect} from 'react';
import './App.css';
import LoginForm from './page/user/login'
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom";
import RegisterForm from "./page/user/register";
import StatusComponent from "./component/status";
import QuestComponent from "./page/question";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "./features/userSlice";
import OnboardPage from "./page/onboard";
import ProfilePage from "./page/user/profile";
import HeaderComponent from "./component/header";

function App() {
    let user = useSelector(selectUser)
    return (
        <>
            {user && <HeaderComponent user={user}/>}
        <div className="container">
                <Routes>
                    <Route index element={<OnboardPage/>}></Route>
                    <Route path="/question" element={<QuestComponent/>}/>
                    <Route path="/register" element={<RegisterForm/>} />
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/status" element={<StatusComponent/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                </Routes>
        </div>
            </>
    )
}

export default App;
