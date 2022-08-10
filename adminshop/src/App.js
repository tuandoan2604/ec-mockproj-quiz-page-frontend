import './App.css'
import Admin from './views/admin-pages/Admin'
import User from './views/user-pages/User'
import { useEffect, useState } from 'react'
import { decryptData } from './util/util'

import 'antd/dist/antd.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from './views/admin-pages/authPage/AuthPage'

function App() {
  const [admin, setAdmin] = useState()
  let encryptedUser = localStorage.getItem('user')
  useEffect(() => {
    console.log(encryptedUser)
    if (encryptedUser?.length > 0) {
      const salt = process.env.REACT_APP_SALT
      console.log(salt)

      let decryptedUser = decryptData(encryptedUser, salt)
      console.log(decryptedUser)
      if (decryptedUser.role === 'admin') {
        setAdmin(decryptedUser)
      }
    }
  }, [encryptedUser])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {admin?.username ? (
            <>
              <Route path="/admin/*" element={<Admin />} />
            </>
          ) : (
            <Route path="/admin/*" element={<AuthPage />} />
          )}
          <Route path="/*" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
