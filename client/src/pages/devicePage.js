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
    const [onedevice, setOneDevice] = useState(
      {info: [], type: {}, brand: {}})
    const {id} = useParams()
const [conformDelete, setConformDelete] = useState()

useEffect(() => {
  fetchOneDevice(id).then(data =>{
    if(data) return setOneDevice(data)
    alert('data for this page deleted or unavailable')
  })
}, [])
const addToCart = (deviceId) => {
const cartDevice = {
  name: onedevice.name, price: onedevice.price, count: 1,
  deviceId: deviceId, img: onedevice.img
}
createCartDevice(cartDevice).then(data => {
setData(data)
//device.setBasketCount(device.basketCount + 1)//1-variant
fetchCartDevices().then(data =>           //2-variant
  device.setBasketCount(data.length))
})
}
const delete_Device=(deviceId) => {
  deleteDevice(id).then(data => {console.log(data)
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
  src={'http://localhost:5000/' + onedevice.img}/>
 </Col>
<Col md={4}>
<Row>
 <h2>{onedevice.name}</h2>
<div className={'d-flex align-item-center '}>
  type: {onedevice.type ? onedevice.type.name : ''}</div>
<div className={'d-flex align-item-center '}>
  brand: {onedevice.brand ? onedevice.brand.name : ''}</div>
</Row>
</Col>
<Col md={4} className={''}>
 <Card >
    <h2 className={'d-flex justify-content-center'}
    >{onedevice.price}</h2>
    <div className={'text-danger'}>
    {data === 'exist'?'device exist in cart':''}</div>
<Button variant={'outline '}
   onClick={()=>addToCart(onedevice.id)}>add to cart</Button>
</Card><Card >
<div className={'text-danger'}>
    {conformDelete == 1 ? 'device deleted' : ''}</div>
<div className={'d-flex justify-content-center'}>
<Button className={'mt-2'} variant='outline-danger'
       onClick={()=>delete_Device(onedevice.id)}>
       delete device</Button>
</div></Card>
</Col>
</Row>
<Row className={'d-flex flex-column m-3'}>
 <h2>Description</h2>
  {onedevice.info.map((el, index)=><Row key={el.id}
  style={{background: index % 2 === 0 ? 'lightgrey' : '', padding: 0}}
 >{el.title}----------{el.description}</Row>)}
</Row>
</Card>
</Container>
  </div>
);
})
export default Device;
