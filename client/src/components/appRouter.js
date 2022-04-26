import React, {useContext} from 'react'
import ReactDOM from "react-dom"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {pablicRoutes, authRoutes} from '../routes'
import {SHOP_ROUTE} from '../utils/const'
import {Context} from '../index'

const AppRouter = () => {
  const isAuth = true
  const {user} = useContext(Context)

  return (
<Routes>
{pablicRoutes.map(({path, Component}) =>
<Route key={path} path={path} element={Component} exact/>
)}
{isAuth && authRoutes.map(({path, Component}) =>
<Route key={path} path={path} element={Component}/>
)}

</Routes>

);
}
export default AppRouter;
