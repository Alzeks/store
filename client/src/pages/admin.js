import React, {useState} from 'react'
import {Col, Container, Button} from 'react-bootstrap'
import CreateType from '../components/modal/CreateType'
import CreateBrand from  '../components/modal/CreateBrand'
import CreateDevice from '../components/modal/CreateDevice'
//<CreateBrand show={isCreateBrand}/>
const Admin = () => {
  const [isCreateType, setIsCreateType] = useState(false)
  const [isCreateBrand, setIsCreateBrand] = useState(false)
  const [isCreateDevice, setIsCreateDevice] = useState(false)

  return (
  <Container className={'d-flex flex-column'}>
  <Button variant={'outline-dark'} className={'mt-2'}
  onClick={()=> setIsCreateType(true)}>Add type</Button>
  <Button variant={'outline-dark'}className={'mt-2'}
  onClick={()=> setIsCreateBrand(true)}>Add Brand</Button>
 <Button variant={'outline-dark'}className={'mt-2'}
 onClick={()=> setIsCreateDevice(true)}>Add Device</Button>
  <Button variant={'outline-dark'}className={'mt-2'}
  >Add </Button>
<CreateType show={isCreateType} onHide={() => setIsCreateType(false)} />
<CreateDevice show={isCreateDevice} onHide={() => setIsCreateDevice(false)}/>
<CreateBrand show={isCreateBrand} onHide={() => setIsCreateBrand(false)}/>
  </Container>
);
}
export default Admin;
