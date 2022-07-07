import React, {useEffect, useState} from "react";
import "./status.css"

function StatusComponent(){
    const [status, setStatus] = useState(true)
    const Tick = () =>
        <div className="wrapper">
            <svg className="checkmark-tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle-tick" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
        </div>

    const Cross = () =>
        <div className="wrapper">
            <svg className="checkmark-cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark_circle-cross" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark_check" fill="none" d="M14.1 14.1l23.8 23.8 m0,-23.8 l-23.8,23.8"/>
            </svg>
        </div>
    return (
        <div className="section">
            {status && <Tick />}
            {!status && <Cross />}
        </div>
    )
}


export default StatusComponent