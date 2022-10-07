import Admin from './pages/admin'
import Basket from './pages/basket'
import MainPage from './pages/mainPage/MainPage'
import Auth from './pages/Auth'
import DevicePage from './pages/Device'
import {ADMIN_ROUTE, BASKET_ROUTE, MAIN_ROUTE,LOGIN_ROUTE,
REGISTRATION_ROUTE, DEVICE_ROUTE, NOTFOUND_ROUTE} from './utils/const'

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
