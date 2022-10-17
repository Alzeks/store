import React, {useContext, useEffect} from 'react'
import DeviceList from './DeviceList'
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
 //const typ = {...device.devices};

 if(user.loader) {
        return (
            <div className="loader">
                <div className="lds-dual-ring">loading...</div>
            </div>
        )
    }
  return (
<div className=' container d-flex justify-content-center'>
  <div className='card' style={{background: '#eeeeee', }}>

       <div className=' row mt-2 ' style={{width: 900}}>
          <div className='col-md-3 border-end border-primary'>
                <h3>Settings</h3>
             <TypeBar />
             <BrandBar />
             <div className='btn btn-secondary btn-sm mt-2'
                 onClick={()=>filter(device.selectedType.id, device.selectedBrand.id)}
                 >Filter
             </div>
             <div className='btn btn-dark btn-sm mt-2'
                  onClick={()=>{filter(null, null)}}>Skip Filter
             </div>
          </div>

          <div className='col-md-9'>
             <DeviceList />
          </div>
        </div>
    </div>
</div>
);
})
export default Shop;
