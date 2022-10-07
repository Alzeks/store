import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../../index'
import {Row} from 'react-bootstrap'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
  const {device} = useContext(Context)

  return (<div>
    <div>
  {device.devices.length !== 0 ? '' :
      <h3 >Loading...</h3>
    }
    </div>
<Row className='d-flex '>
  {device.devices.map(device =>
  <DeviceItem key={device.id} device={device}/>
  )}
</Row>
  </div>
);
})
export default DeviceList;
