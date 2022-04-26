import React, {useContext, useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
// import Dropdown from 'react-bootstrap/Dropdown'
import {Context} from '../../index'
import {Col, Container, Button, Row, Dropdown, Form} from 'react-bootstrap'
import {fetchTypes, fetchBrands, fetchDevices, createDevice,
deleteType, deleteBrand} from '../../API/DeviceApi'
import {observer} from 'mobx-react-lite'

const CreateDevice = observer( ({show, onHide}) => {
  const {device} = useContext(Context)
  const [info, setInfo] = useState([])
  const [file, setFile] = useState(null)
  const [type, setTape] = useState(null)
  const [brand, setBrand] = useState(null)
  const [price, setPrice] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
  }, [])

  const addInfo = () => setInfo(  [...info,
    {title: '', description: '', number: Date.now()}]
    )
    const deleteInfo = (number) =>  {
      setInfo(info.filter(el => el.number !== number))
    }
    const changeInfo = (key, value, number) => {
setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
console.log(info);
    }
    const selectFile = e => {
      setFile(e.target.files[0])
    }
    const addDevice = () => {////???(info)
    const  formData = new FormData()
    formData.append('name', name)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('brandId', device.selectedBrand.id)
    formData.append('typeId', device.selectedType.id)
    formData.append('info', JSON.stringify(info))
    createDevice(formData).then(data =>{
      console.log(data); onHide()})
    }
const delete_Type = (id = 0)=> {deleteType(id).then(
  data => {console.log(data)})
}
  const delete_Brand = (id = 0)=> {deleteBrand(id).then(
    data => {console.log(data)})}

  return (
  <Modal show={show} onHide={onHide} size='lg' cantered>
  <Modal.Header closeButton>
    <Modal.Title className='d-flex justify-content-center align-item-center'
          >Add type</Modal.Title>
  </Modal.Header>
<Modal.Body>
  <Form>
    <Dropdown>
<Dropdown.Toggle>{device.selectedType.name || 'pick type'}</Dropdown.Toggle>
<Dropdown.Menu>{device.types.map(el =>
<Dropdown.Item onClick={()=>device.setSelectedType(el)} key={el.id}
          >{el.name}</Dropdown.Item>
)}
</Dropdown.Menu>
   </Dropdown>
<Dropdown className='mt-2 mb-2'>
<Dropdown.Toggle>{device.selectedBrand.name ||'pick brand'}</Dropdown.Toggle>
<Dropdown.Menu>{device.brands.map(el =>
<Dropdown.Item onClick={()=>device.setSelectedBrand(el)} key={el.id}
           >{el.name}</Dropdown.Item>
)}
</Dropdown.Menu>
</Dropdown>

<Form.Control placeholder='enter name' value={name}
      onChange={e=>setName(e.target.value)}
      />
<Form.Control className='mt-2 mb-2' type='number'
      placeholder='enter price' value={price}
      onChange={e=>setPrice(Number(e.target.value))}
      />
<Form.Control placeholder type='file' placeholder='enter image'
      onChange={selectFile}/>

<button type="button" className="btn btn-primary"
       onClick={addInfo}>add characteristic</button>
{info.map(el => <Row className='mt-2' key={el.namber}>
<Col md={4}><Form.Control placeholder='enter name'
   value={el.title}
   onChange={(e)=>changeInfo('title', e.target.value, el.number)}/>
</Col>
<Col md={4}><Form.Control placeholder='enter description'
  value={el.description}
  onChange={(e)=>changeInfo('description', e.target.value, el.number)}/>
</Col>
<Col md={4}>
    <Button variant={'outline-danger'}
    onClick={() => deleteInfo(el.number)}>delete</Button>
</Col>
  </Row>
)}
</Form>
</Modal.Body>
<Modal.Footer>
  <button type="button" className="btn btn-primary"
   data-bs-toggle="modal" data-bs-target="#staticBackdrop"
   onClick={()=>delete_Type(device.selectedType.id)}
   >Delete Type
  </button>
  <button type="button" className="btn btn-primary"
   data-bs-toggle="modal" data-bs-target="#staticBackdrop"
   onClick={()=>delete_Brand(device.selectedBrand.id)}
   >Delete Brand
  </button>
  <button type="button" className="btn btn-secondary"
  onClick={onHide}>Close
  </button>
  <button type="button" className="btn btn-primary"
          onClick={addDevice}>Add Device
  </button>
</Modal.Footer>
</Modal>
);
})
export default CreateDevice;
