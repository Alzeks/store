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
  const [message, setMessage] = useState()

   const click = async () => {
     try{
        let data;
        if(isLogin){
        data = await login(email, password)
         if(data.message)
         return setMessage(data.message)
        }
         else{
          data = await registration(email, password)
           if(data.message)
           return setMessage(data.message)
         }console.log(data);
           localStorage.setItem('token', data.token)
            user.setUser(data.user)
            user.setIsAuth(true)
            navigate('/')//history.push('/')
          }catch(e){alert(e.response.data.message)}
          }

  return (
<Container className='d-flex justify-content-center align-items-center'
          style={{height: window.innerHeight - 54}}>
   <Card className='align-items-center' style={{width: 600, height: 210}}
   >
     <h2 className=''>{isLogin ? 'Authorisation' : 'Registration'}</h2>
    <Form className='d-flex flex-column' style={{width: 400}}
    >
      <div className={'text-danger'}>
          {message  ? message : ''}
          </div>
     <Form.Control className='mt-2' placeholder='enter email'
          value={email} onChange={e => setEmail(e.target.value)}
          onFocus={()=>setMessage(null)}
     />
     <Form.Control className='mt-2' placeholder='enter password' type='password'
          value={password} onChange={e => setPassword(e.target.value)}/>
     </Form>
     <Row className='mt-0 d-flex justify-content-between ' >
         {isLogin ?
         <div className='d-flex align-items-center'>
               not registration?-
            <Link to={REGISTRATION_ROUTE} className={'text-decoration-none'}
              > get registration </Link>
          <Button  variant={"outline-success"} onClick={click}
               className='m-1 align-self-end'>Sign in</Button>
        </div> :
        <div>registrated?-
            <Link to={LOGIN_ROUTE} className={'text-decoration-none'}> get authorization
            </Link>
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
