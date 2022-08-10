import React from 'react'

import { Card } from 'antd'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/actions/auth'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { decryptData } from '../../../util/util'

export default function MyAccount({ setUser }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const refreshToken = useSelector(
    (state) => state?.auth?.tokens?.refresh?.token
  )

  const deviceId = useSelector((state) => state?.auth?.deviceId)

  const handleLogout = () => {
    localStorage.clear()

    if (deviceId.length > 0) {
      const reqData = { refreshToken, deviceId }
      setUser(null)
      dispatch(logout(reqData, navigate))
    }
  }

  const handleAdminSite = () => {
    navigate('/admin/dashboard', { replace: true })
  }
  return (
    <>
      <h1 style={{ marginLeft: '144px' }}>My Account</h1>

      <Card
        title="Navigation"
        style={{
          width: 280,
          marginLeft: 144,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '400px',
          }}
        >
          <a onClick={handleAdminSite}>Admin site</a>
          <a>Order History</a>
          <a onClick={handleLogout}>Logout</a>
        </div>
      </Card>
    </>
  )
}
