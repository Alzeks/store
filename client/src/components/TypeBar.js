import React,{useContext, useEffect} from 'react'
import {Context} from '../index'
import Row from 'react-bootstrap'
import Col from 'react-bootstrap'
import {Container, Button} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import {observer} from 'mobx-react-lite'

//active={type.id === device.selectedType.id}
const TypeBar = observer(({skip}) => {
  const  {device} = useContext(Context)
//skip()
  return (
  <ListGroup >
  Types
   { device.types.map(type => <ListGroup.Item
   style={{cursor: 'pointer'}}
   onClick={() => device.setSelectedType(type)}
   active={type.id === device.selectedType.id}
   key={type.id}>
   {type.name}</ListGroup.Item>)}
</ListGroup>
);
})
export default TypeBar;
