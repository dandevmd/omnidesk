import {Routes, Route} from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu'
import './main.scss'
import { routes } from '../../routes/routes'



const Main = () => {
  return (
    <div className="container">
      <SideMenu/>
      <Routes>
      {routes.map(route=>(
        <Route path={route.path} element={route.element} key={route.path}/>
      ))}</Routes>
    </div>
  )
}

export default Main