import './App.css'
import Admin from './views/admin-pages/Admin'
import User from './views/user-pages/User'

import 'antd/dist/antd.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/*" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
