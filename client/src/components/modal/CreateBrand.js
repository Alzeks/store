import React, {useState} from 'react'
import {Col, Container, Row, Card, Button} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import {createBrand} from '../../API/DeviceApi'

const CreateBrand = ({show, onHide}) => {
  const [value, setValue] = useState('')
  const addBrand = () => {
    createBrand({name: value}).then(data => setValue(''))
    onHide()
  }

  return (
<Modal show={show} onHide={onHide} size='lg' cantered>
  <Modal.Header closeButton>
      <Modal.Title className='justify-content-center'
         >add brand
      </Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
     <Form.Control value={value} onChange={e=>setValue(e.target.value)}/>
    </Form>
  </Modal.Body>
  <Modal.Footer>
     <button type="button" className="btn btn-secondary"onClick={onHide}>Close
     </button>
     <button type="button" className="btn btn-primary"onClick={addBrand} >Add brand
     </button>
  </Modal.Footer>
</Modal>
);
}
export default CreateBrand;
