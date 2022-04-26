import Admin from './pages/admin'
import Basket from './pages/basket'
import Shop from './pages/shop'
import Auth from './pages/Auth'
import DevicePage from './pages/devicePage'
import {ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE,LOGIN_ROUTE,
REGISTRATION_ROUTE, DEVICE_ROUTE, NOTFOUND_ROUTE} from './utils/const'

export const authRoutes = [
{
  path: ADMIN_ROUTE,
  Component: <Admin/>
},
{
  path: BASKET_ROUTE,
  Component: <Basket/>
}
]
export const pablicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: <Shop/>
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
    Component: <Shop/>
  }
]
