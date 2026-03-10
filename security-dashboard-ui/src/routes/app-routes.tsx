import LayoutComponent from '@/components/layout/layout.component'
import { DashboardPage, LoginPage } from '@/pages'
import LocationPage from '@/pages/location.page'
import { Route, Routes } from 'react-router'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' Component={LoginPage}/>
      <Route Component={LayoutComponent}>
      <Route path='dashboard' Component={DashboardPage}/>
      <Route path='location' Component={LocationPage}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes