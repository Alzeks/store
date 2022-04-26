import React, {useContext, useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import {createType} from '../../API/DeviceApi'

//<!-- Vertically centered modal -->
//<!-- Vertically centered scrollable modal -->
const CreateType = ({show, onHide}) => {
const [value, setValue] = useState('')
const addType = () => {
  createType({name: value}).then(data => setValue(''))
  onHide()
}

  return (
  <Modal show={show} onHide={onHide} size='lg' cantered>
<Modal.Header closeButton>
  <Modal.Title className='d-flex justify-content-center align-item-center'
    >add type
  </Modal.Title>
</Modal.Header>
<Modal.Body>
  <Form>
    <Form.Control value={value} onChange={e=>setValue(e.target.value)}/>
  </Form>
</Modal.Body>
<Modal.Footer>
  <button type="button" className="btn btn-secondary"
        onClick={onHide}>Close</button>
 <button type="button" class="btn btn-primary"
        onClick={addType}>addType</button>
</Modal.Footer>
</Modal>
);
}
export default CreateType;
