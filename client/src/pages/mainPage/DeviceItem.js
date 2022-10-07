import React from 'react'
import {Col, Card, Button, Image} from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import {DEVICE_ROUTE} from '../../utils/const';
//'https://klike.net/uploads/posts/2020-07/1594278030_1.jpg'

const DeviceItem = ({device} ) => {
 const type = {...device.type};
 const brand = {...device.brand};
 const navigate  = useNavigate();
const addToCart = () => {}
console.log(device);
  return (
<Col md={4} className='mt-4' style={{ cursor: 'pointer'}}
    onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
   <Card>
      {device.name}
      <Card>
         <Image style={{width: 172, height: 170}}
        alt={'Run PosgreSQLserver!Then server npm run dev'}
        src={'http://localhost:5000/' + device.img} alt='img'/>
      </Card>
        <div>
          <div className='text-black-50'>brand {brand.name}</div>
          <div>Price:{ device.price}</div>
          <div className='text-black-50'>type {type.name}</div>
        </div>
   </Card>
</Col>
);
}
export default DeviceItem;
