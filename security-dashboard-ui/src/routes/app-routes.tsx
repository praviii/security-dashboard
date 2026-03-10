import { Route, Routes } from 'react-router'
import { LoginPage } from '../pages'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' Component={LoginPage}/>
    </Routes>
  )
}

export default AppRoutes