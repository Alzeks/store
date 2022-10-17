import React, {useState, useEffect, useContext} from 'react'
import {Col, Container, Button} from 'react-bootstrap'
import {deleteUser, getUser} from '../API/userAPI'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'

const User = () => {
  const {user} = useContext(Context)
  const [data, setData] = useState()
  const [mainuser, setMainUser] = useState({})
  const delete_User = () => {deleteUser(mainuser.id).then(data=>setData(data))}
 console.log(mainuser);
 useEffect(()=>{
   getUser(user.user.id).then(data=>{console.log(data);setMainUser(data)})
 },[])

  return (
<Container className={'d-flex flex-column'}>
        <h3>Userpage</h3>
        <Button variant={'outline-danger'}className={'my-2'}
            onClick={()=> delete_User()}>Delete acount</Button>
        {mainuser.message !== '1' ? ''
       : <Container>user deleted</Container>}
</Container>
);
}
export default User;
