import { Button } from 'antd'
import React from 'react'
import onboardLogo from '../../onboard1.png'
import { useNavigate } from "react-router-dom"; 

export default function Onboard() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup')
    }

  return (
    <>
        <div>
            <img src={onboardLogo} alt='logo'></img>
            <div style={{fontSize: '30px', color: 'white'}}>QuizzMe</div>
            <div style={{fontSize: '16px', color: 'white'}}>Test your knowledge</div>
            <Button style={{
                width: '353px',
                height: '50.6px',
                marginTop: '66.3px',
                borderRadius: '38px',
                color: '#010101',
                fontSize:'14px',
                fontWeight: '400'
            }}
                onClick={handleSignUp}
            >SIGN UP</Button>
            <div style={{
                marginTop:'16.06px',
                fontSize: '14px',
                color: 'white',
            }}>ALREADY HAVE AN ACCOUNT? <a href='signin' style={{color: 'black'}}>LOG IN</a></div>
        </div>
    </>
  )
}
