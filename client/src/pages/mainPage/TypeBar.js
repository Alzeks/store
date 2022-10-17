import React,{useContext, useEffect} from 'react'
import {Context} from '../../index'
import ListGroup from 'react-bootstrap/ListGroup'
import {observer} from 'mobx-react-lite'

//active={type.id === device.selectedType.id}
const TypeBar = observer( () => {
  const  {device} = useContext(Context)

  return (
  <ListGroup >
  Types
   { device.types.map(type =>
    <ListGroup.Item key={type.id}
       style={{cursor: 'pointer', maxWidth: '200px'}}
       onClick={() => device.setSelectedType(type)}
       active={type.id === device.selectedType.id}
     > {type.name}
     </ListGroup.Item>
   )}
</ListGroup>
);
})
export default TypeBar;
