import React, {useContext, useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import {fetchCartDevices} from '../API/cartApi'
import BasketItem from './basketItem'
import {Context} from '../index'
import {observer} from 'mobx-react-lite'

const Basket = () => {
  const {user} = useContext(Context)
  const [devices, setDevices] = useState([])
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)

useEffect(()=>{
  fetchCartDevices(user.user.id).then(data => {setDevices(data)}
)
}, [devices]);
useEffect(()=>{
   fetchCartDevices().then(data =>
   setTotal(data.reduce((sum, el)=>sum + el.count * el.price,0)))
}, [devices,count])
 const changeTotalCount = ()  => setCount(count + 1)

  return (
<div>
    <div> Basket</div>
   <div className='card'>
      <Row >
         <Col md={9} >
            {devices.map((el) =>
            <BasketItem key={el.id} device1={el}
            changeTotalCount={changeTotalCount}/>)}
        </Col>
        <Col md={3}>
           <div className='card d-flex align-items-center justify-content-center m-2'
              mt={2}>
              <div>total:  {total}</div>
           </div>
        </Col>
    </Row>
</div>
</div>

)
}
export default Basket;
