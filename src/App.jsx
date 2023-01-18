import React from 'react'

//* Router *// 
import { Navigate, Route, Routes } from 'react-router-dom'

//* Pages *// 
import Home from './pages/Home/Home'
import List from './pages/List/List'
import Login from './pages/Login/Login'
import Single from './pages/Single/Single'
import New from './pages/New/New'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' >
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='users' >
            <Route index element={<List />} />
            <Route path='new' element={<New />} />
            <Route path=":userId" element={<Single />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  )
}

export default App