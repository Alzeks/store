import React, {useContext, useEffect} from 'react'
import DeviceList from '../components/DeviceList'
import {Container, Row, Col, Button, Card} from 'react-bootstrap'
import TypeBar from '../components/TypeBar'
import BrandBar from '../components/BrandBar'
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {fetchTypes, fetchBrands, fetchDevices} from '../API/DeviceApi'

const Shop = observer(() => {
const {device} = useContext(Context)

useEffect(() => {
  fetchDevices().then(data => {device.setDevices(data)})
  fetchTypes().then(data => device.setTypes(data))
  fetchBrands().then(data => device.setBrands(data))
}, [])
const filter = (typeId, brandId) => {
fetchDevices(typeId, brandId).then(data => {
  device.setDevices(data)
})
}
const skip=()=>{}

  return (
  <Container className={'d-flex justify-content-center '}>
  <Card style={{background: '#eeeeee'}}>
<Row className='mt-2' style={{width: 800}}>
  <Col md={3}>
    <TypeBar skip={skip}/>
    <BrandBar />
    <Button className='m-2'
onClick={()=>filter(device.selectedType.id, device.selectedBrand.id)}
     >Filter</Button>
     <Button className='m-2'
 onClick={()=>{filter(null, null);skip()}}
      >Skip Filter</Button>
  </Col>
  <Col md={9}>
    <DeviceList />
  </Col>
</Row>
</Card >
  </Container>

);
})
export default Shop;
