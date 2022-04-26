import React, {useContext, useState} from 'react'
import axios from 'axios'
import {login, registration} from '../API/userAPI'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {Col, Container, Row, Card, Button, Form} from 'react-bootstrap'
import {NavLink, Link, useLocation, useNavigate} from 'react-router-dom'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/const'


const Auth = observer( () => {
const location = useLocation()
const isLogin = location.pathname === LOGIN_ROUTE
const {token, setToken} = useState(null)

const {user} = useContext(Context)
 let navigate = useNavigate();
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')

   const click = async () => {
     try{
        let data;
        if(isLogin){
        data = await login(email, password)
        console.log('pass login');
          console.log(data);
        }
         else{
          data = await registration(email, password)
        console.log('pass registration');
        console.log(data);
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate('/')
          }catch(e){
            alert(e.response.data.message)}
          }
  return (
  <Container className='d-flex justify-content-center align-items-center'
  style={{height: window.innerHeight - 54}}
  >
<Card className='align-items-center' style={{width: 600, height: 200}}
>
<h2 className=''>{isLogin ? 'authorisation' : 'registration'}</h2>
<Form className='d-flex flex-column' style={{width: 400}}
>
<Form.Control className='mt-2' placeholder='enter email'
value={email} onChange={e => setEmail(e.target.value)}
/>
<Form.Control className='mt-2' placeholder='enter password' type='password'
 value={password} onChange={e => setPassword(e.target.value)}/>
</Form>
<Row className='mt-2 d-flex '>
{isLogin ?
  <div className='d-flex justify-content-space-between align-items-center'>
  not registration?
<Link to={REGISTRATION_ROUTE} className={'text-decoration-none'}
      > get registration </Link>
<Button  variant={"outline-success"} onClick={click}
        className='m-2'>Sign in</Button>
</div> :
<div>registrated?
<Link to={LOGIN_ROUTE} className={'text-decoration-none'}
      > get auth </Link>
<Button  variant={"outline-success"} onClick={click}
         className='m-2'>registration</Button>
</div>
}
</Row>
</Card>
  </Container>
);
}  )
export default Auth;
