import React,{useContext} from 'react'
import {Context} from '../index'
import {Row, Card, Col} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import {observer} from 'mobx-react-lite'

const BrandBar = observer( () => {
  const  {device} = useContext(Context)
  //const skip = () => {device.setSelectedBrand(0)}

  return (
<Row className='d-flex mt-3'>
  <div >Brands</div>
  {device.brands.map(brand => <div>
<Card className='p-1' style={{cursor: 'pointer'}}
  onClick={() => device.setSelectedBrand(brand)}
  border={brand.id === device.selectedBrand.id ?  'danger' : 'light'}
  key={brand.id}>
  {brand.name}
</Card>
</div> )}
</Row>
);
})
export default BrandBar;
