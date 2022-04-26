import React, {useContext, useEfect} from 'react'
import {Context} from '../index'
import {SHOP_ROUTE, REGISTRATION_ROUTE, ADMIN_ROUTE,
  BASKET_ROUTE} from '../utils/const'
import {observer} from 'mobx-react-lite'
import {Link, Route, NavLink} from 'react-router-dom'
import '../index.scss';
//import {logo} from 'public/logo192.png'

const NavBar1 = observer(() => {
  const {user} = useContext(Context)
  //const isAuth = false
return (
    <div className='header'>
  <header>
<div className='headerLeft'>

<Link style={{color: 'white'}} to='/'>
<img width={30} src='/logo192.png' className='headerImg'/>
<div><h3>Home</h3><p>Home is home</p>
</div>
</Link>
</div>
      { user.isAuth ? <div >
  <Link style={{color: 'white'}} to={ADMIN_ROUTE}>Admin
        </Link>
  <Link to={BASKET_ROUTE}>  BASKET
        </Link>
  <button onClick={() => user.setIsAuth(false)}
  > Exit</button>
        </div> :
        <div>
  <Link to={REGISTRATION_ROUTE}style={{color: 'blue'}}
        > ENTER</Link>
  <Link to={BASKET_ROUTE}style={{color: 'white'}}>  BASKET
<img width={30} src='/cart.png' className='headerImg'/></Link>

        </div>
      }
</header>
    </div>
);
})
export default NavBar1;
