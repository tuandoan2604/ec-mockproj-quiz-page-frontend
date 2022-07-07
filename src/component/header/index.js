import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "../../features/userSlice";
import {useNavigate} from "react-router-dom";
import "./header.css"
function HeaderComponent(props){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return(
        <header className="header">
        <ul className="navbar">
            <li><img className="inline-block h-9 w-9 rounded-full ring-2 ring-white"
                     src={props.user.avatar}
                     alt=""/> Hello, {props.user.username}</li>
            <li><button onClick={(e) => {
                e.preventDefault();
                dispatch(logout())
                navigate('/login')
            }}>
                Log out
            </button></li>
        </ul>

    </header>
    )
}

export default HeaderComponent

