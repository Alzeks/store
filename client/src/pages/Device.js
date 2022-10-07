import React, {useContext, useState, useEffect} from 'react'
import {Col, Container, Row, Card, Button} from 'react-bootstrap'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import {useParams} from 'react-router-dom'
import {createCartDevice, fetchCartDevices} from '../API/cartApi'
import { fetchOneDevice, deleteDevice} from '../API/DeviceApi'

const Device = observer(() => {

    const  {device} = useContext(Context)
    const description = [
      {id: 1, title: 'title1', description: 'no server'},
      {id: 2, title: 'title2', description: 'npm run dev'},
      {id: 3, title: 'title1', description: ' or no internet'},
      {id: 4, title: 'title2', description: 'npm run dev'},
    ]
    const [data, setData] = useState()
    const [conformDelete, setConformDelete] = useState()
    const [thisDevice, setThisDevice] = useState(
      {info: [], type: {}, brand: {}})
    const {id} = useParams()

useEffect(() => {
    fetchOneDevice(id).then(data =>{
    if(data) return setThisDevice(data)
    alert('data for this page deleted or unavailable')
  })
}, [])
 const addToCart = (deviceId) => {
 const cartDevice = {
   name: thisDevice.name, price: thisDevice.price,
   count: 1,
   deviceId: deviceId, img: thisDevice.img
}
  createCartDevice(cartDevice).then(data => {
    setData(data)
    fetchCartDevices().then(data => device.setBasketCount(data.length))
})
}
 const delete_Device=(deviceId, deviceImg) => {
   deleteDevice(id).then(data => {
   setConformDelete(data)})
};

  return (
<div>
<Container >
  <div>Device</div>
    <Card style={{background: '#eeeeee'}}>
       <Row >
          <Col mt={4}>
            <img width={285} height={300} alt={'torn on PostgreSQL server!'}
            src={'http://localhost:5000/' + thisDevice.img}/>
         </Col>
         <Col md={4}>
            <Row>
              <h2>{thisDevice.name}</h2>
              <div className={'d-flex align-item-center '}>
                 type: {thisDevice.type ? thisDevice.type.name : ''}</div>
              <div className={'d-flex align-item-center '}>
                brand: {thisDevice.brand ? thisDevice.brand.name : ''}</div>
           </Row>
         </Col>
         <Col md={4} className={''}>
            <Card >
              <h2 className={'d-flex justify-content-center'}
              >{thisDevice.price}</h2>
              <div className={'text-success'}>{data && 'devace is in cart'}</div>
              <Button variant={'outline '}onClick={()=>addToCart(thisDevice.id)}>add to cart
              </Button>
            </Card>
            <Card style={{background: '#eeeeee', border:'#eeeeee'}}>
              <div className={'text-danger'}>
                 {conformDelete == 1 ? 'device deleted' : ''}</div>
              <div className={'d-flex justify-content-center'}>
                <Button className={'mt-2'} variant='outline-danger'
                  onClick={()=>delete_Device(thisDevice.id, device.img)}>delete device
                </Button>
              </div>
            </Card>
         </Col>
      </Row>
      <Row className={'d-flex flex-column m-3'}>
          <h2>Description</h2>
          {thisDevice.info.map((el, index)=>
        <Row key={el.id}
           style={{background: index % 2 === 0 ? 'lightgrey' : '', padding: 0}}
           >{el.title}----------{el.description}
       </Row>)}
     </Row>
  </Card>
</Container>
  </div>
);
})
export default Device;
