import Admin from './pages/admin'
import Basket from './pages/basket'
import MainPage from './pages/mainPage/MainPage'
import Auth from './pages/Auth'
import DevicePage from './pages/Device'
import User from './pages/User'
import {ADMIN_ROUTE, BASKET_ROUTE, MAIN_ROUTE,LOGIN_ROUTE,
REGISTRATION_ROUTE, DEVICE_ROUTE, NOTFOUND_ROUTE, USER_ROUTE} from './utils/const'

export const authRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <MainPage/>
  },
{
  path: ADMIN_ROUTE,
  Component: <Admin/>
},
{
  path: BASKET_ROUTE,
  Component: <Basket/>
},
{
  path: DEVICE_ROUTE + '/:id',
  Component: <DevicePage/>
},
{
  path: USER_ROUTE,
  Component: <User/>
},
{
  path: NOTFOUND_ROUTE ,
  Component: <MainPage/>
}
]
export const pablicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <MainPage/>
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth/>
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth/>
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: <DevicePage/>
  },
  {
    path: NOTFOUND_ROUTE ,
    Component: <MainPage/>
  }
]
