import React, {useContext, useState, useEffect} from 'react'
// import {observer} from 'mobx-react-lite'
// import {Context} from '../index'
import {Row, Button, Card, Image, Col, Container} from 'react-bootstrap'
import {fetchCartDevices, deleteDevice} from '../API/cartApi'
import BasketItem from './basketItem'

const Basket = () => {
  //const {device} = useContext(Context)
  const [devices, setDevices] = useState([])
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)

useEffect(()=>{
  fetchCartDevices().then(data => {setDevices(data)}
)
}, []);
useEffect(()=>{
fetchCartDevices().then(data =>
setTotal(data.reduce((sum, el)=>sum + el.count * el.price,0)))
}, [devices,count])
 const changeTotalCount = ()  => setCount(count + 1)

  return (
<div >
 <Container>
 <div> Basket</div>
 <Card >
 <Row >
<Col md={9} >
  {devices.map((el) =>
    <BasketItem key={el.id} device1={el}
    changeTotalCount={changeTotalCount}/>)}
</Col>
<Col md={3}>
<Card className='d-flex align-items-center justify-content-center m-2'
     mt={2}>
     <div>total:  {total}</div>
</Card>
</Col>
</Row>
</Card>
</Container>
    </div>
)
}
export default Basket;
