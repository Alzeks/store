import React, {useContext, useEffect} from 'react'
import DeviceList from './DeviceList'
import {Container, Row, Col, Button, Card} from 'react-bootstrap'
import TypeBar from './TypeBar'
import BrandBar from './BrandBar'
import {observer} from 'mobx-react-lite'
import {Context} from '../../index'
import {fetchTypes, fetchBrands, fetchDevices} from '../../API/DeviceApi'

const Shop = observer(() => {
const {device, user} = useContext(Context)
console.log(user.IsAuth);
useEffect(() => {
  user.setLoader(true)
  fetchDevices().then(data => {device.setDevices(data)})
   fetchTypes().then(data => device.setTypes(data))
  fetchBrands().then(data => device.setBrands(data))
  user.setLoader(false)
}, [])
const filter = (typeId, brandId) => {
fetchDevices(typeId, brandId).then(data => {
  device.setDevices(data)
})
}
const typ = {...device.devices};

if(user.loader) {
        return (
            <div className="loader">
                <div className="lds-dual-ring">loading...</div>
            </div>
        )
    }
  return (
<Container className={'d-flex justify-content-center '}>
  <Card  style={{background: '#eeeeff', }}>

       <Row className='mt-2 ' style={{width: 1000}}>
          <Col md={3} className='border-end border-primary'>
                <h3>Seting</h3>
             <TypeBar />
             <BrandBar />
             <Button className='m-2'
                 onClick={()=>filter(device.selectedType.id, device.selectedBrand.id)}
                 >Filter</Button>
             <Button className='m-2'
                  onClick={()=>{filter(null, null)}}>Skip Filter
             </Button>
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
