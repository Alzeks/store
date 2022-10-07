import React, {useContext, useEffect} from 'react'
import ReactDOM from "react-dom"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {pablicRoutes, authRoutes} from '../routes'
import {SHOP_ROUTE} from '../utils/const'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import {checkAuth} from '../API/userAPI'

const AppRouter = observer( () => {
  const {user} = useContext(Context)

  useEffect(() => {
  checkAuth().then(data => {
    user.setIsAuth(true)
    localStorage.setItem('token', data.token)
 })
}, [])

  return (
<Routes>
  {!user.isAuth ? pablicRoutes.map(({path, Component}) =>
     <Route key={path} path={path} element={Component} exact/>
   ) :
    authRoutes.map(({path, Component}) =>
   <Route key={path} path={path} element={Component}/>
   )}

</Routes>
);
})
export default AppRouter;
