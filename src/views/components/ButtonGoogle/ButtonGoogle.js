import { Button } from 'antd'
import React from 'react'
import googleIcon from '../../../google.png'

export default function ButtonGoogle(props) {
  return (
    <Button
      value="default"
      style={{
        ...props.style,
        color: 'black',
        width: '360px',
        height: '63px',
        border: '1px solid rgba(0, 0, 0, 0.01)',
        borderRadius: '38px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontSize: '14px',
        fontWeight: '400',
        position: 'relative',
      }}
      icon={
        <img
          src={googleIcon}
          alt="googleIcon"
          style={{
            position: 'absolute',
            top: '19.47px',
            left: '33.54px',
          }}
        />
      }
    >
      CONTINUE WITH GOOGLE
    </Button>
  )
}
