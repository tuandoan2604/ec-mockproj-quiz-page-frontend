import './App.css';
import LoginForm from './page/user/login'
import {Routes, Route, useNavigate, Redirect} from "react-router-dom"
import RegisterForm from "./page/user/register";
import StatusComponent from "./component/status";
import QuestComponent from "./page/question";
import  {useSelector} from "react-redux";
import {selectUser} from "./reducers/user";
import OnboardPage from "./page/onboard";
import ProfilePage from "./page/user/profile";
import HeaderComponent from "./component/header";
import ResultPage from "./page/result";
import ReviewPage from "./page/result/review";
function App() {
    const user = useSelector(selectUser)

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
                    <Route path="/question/result" element={<ResultPage/>}/>
                    <Route path="/question/result/review" element={<ReviewPage/>}/>
                </Routes>
        </div>
        </>
    )
}

export default App;
