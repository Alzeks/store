import React, {useContext, useEffect, useState} from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'//no in bootstrap
// import NavLink from 'react-bootstrap/NavLink'
import {Context} from '../index'
import {SHOP_ROUTE, REGISTRATION_ROUTE, ADMIN_ROUTE,
  BASKET_ROUTE} from '../utils/const'
import {observer} from 'mobx-react-lite'
import {Col, Container, Button, Row} from 'react-bootstrap'
import {Link, Route, NavLink} from 'react-router-dom'
import {fetchCartDevices} from '../API/cartApi'

const NavBar = observer(() => {
  const {user, device} = useContext(Context)

  useEffect(()=>{
 fetchCartDevices().then(data=>device.setBasketCount(data.length))
}, [])

  return (
    <Navbar bg="dark" variant="dark" >
    <Container style={{width: '800px'}}>
<Link style={{color: 'white'}} to='/'
      className={'text-decoration-none ms-4'} >Home
      </Link>

      <Navbar.Brand >Best Store</Navbar.Brand>
      <Nav className={'d-flex justify-content-center align-item-center'}>
      { user.isAuth ? <div >

  <Link style={{color: 'white'}} to={ADMIN_ROUTE}
        className={'text-decoration-none'}>Admin
        </Link>
  <Link to={BASKET_ROUTE} style={{color: 'white'}}
       className={'text-decoration-none m-3' }>
       <img width={30} src='/cart.png'
       />{device.basketCount}
       </Link>

  <Button onClick={() => user.setIsAuth(false)}
      className={'bg-blue me-4'}
        > Exit</Button>
        </div> :
        <div>
  <Link to={REGISTRATION_ROUTE} style={{color: 'white'}}
        className={'text-decoration-none me-4'}
        > ENTER</Link>
  <Link to={BASKET_ROUTE}style={{color: 'white'}}
        className={'text-decoration-none'}
        >  BASKET: {device.basketCount}
  </Link>
        </div>
      }
      </Nav>
</Container>
    </Navbar>
);
})
export default NavBar;
