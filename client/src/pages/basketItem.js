import React, {useContext, useState} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {Row, Button, Card, Image, Col, Container} from 'react-bootstrap'
import {countDevice, deleteDevice} from '../API/cartApi'
import {useNavigate } from "react-router-dom";
import {DEVICE_ROUTE} from '../utils/const';
const BasketItem = ({device1, changeTotalCount}) => {
const {device} = useContext(Context)
const  [count, setCount] = useState(device1.count)
const [destroyDevice, setDestroyDevice] = useState(false)
const navigate = useNavigate();

const delete_Device = (id) => {
 deleteDevice(id).then(data => {
 setDestroyDevice(true);
  changeTotalCount();
 device.setBasketCount(device.basketCount - 1)
}
)}
const count_Device = (id, count) => {
  if(count >= 1 ){
  countDevice(id, count).then(data =>
  {setCount(data); changeTotalCount()})}
}
 return (
<div>{destroyDevice ||
<Card style={{width: ' 900px'}}>
  <Row >
    <Col md={5} className={'mt-2'}>
      <Image  width={150} height={180} style={{cursor: 'pointer'}}
         onClick={() => navigate(DEVICE_ROUTE + '/' + device1.deviceId)}
         src={'http://localhost:5000/' + device1.img}/>
    </Col>
    <Col md={5} >
       <h2>{device1.name}</h2>
       <div className={'d-flex align-items-center justify-content-start'}>
         <Button
           onClick={()=>count_Device(device1.id, count - 1)}>-</Button>
           <div>{count}</div>
         <Button onClick={()=>count_Device(device1.id, count + 1)}>+</Button>
       </div>
       <div className={'d-flex ' } >
         <Button className={'mt-5'}
           onClick={()=>delete_Device(device1.id)}>DELETE
         </Button>
       </div>
     </Col>
   <Col md={2}>{device1.price}</Col>
 </Row>
</Card>
}
</div>
);
}
export default BasketItem;
