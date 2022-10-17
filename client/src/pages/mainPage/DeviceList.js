import React, {useContext} from 'react'
import {observer} from 'mobx-react-lite'
import {Context} from '../../index'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
  const {device} = useContext(Context)

  return (
<div>
  <div>
     {device.devices.length !== 0 ? '' :
      <h3 >Loading...</h3>
     }
  </div>
  <div className=' row d-flex '>
     {device.devices.map(device =>
     <DeviceItem key={device.id} device={device}/>
  )}
  </div>
</div>
);
})
export default DeviceList;
