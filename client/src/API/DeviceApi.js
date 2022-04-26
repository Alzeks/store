import {$host, $authHost} from './index'
import jwt_decode from 'jwt-decode'


export const createType = async (type) => {console.log(type);
  const {data} = await $host.post('api/type', type)
return data
}
export const fetchTypes = async () => {
  const {data} = await $host.get('api/type')
  return data
}
export const deleteType = async (id) => {console.log(id);
  const {data} = await $host.delete('api/type/' + id)
  return data
}
export const createBrand = async (brand) => {
  console.log(brand);
  const {data} = await $host.post('api/brand', brand)
return data
}
export const deleteBrand = async (id) => {
  const {data} = await $host.delete('api/brand/' + id)
  return data
}
export const fetchBrands = async () => {
   const {data} = await $authHost.get('api/brand')
  return data
}
export const createDevice = async (device) => {
  const {data} = await $host.post('api/device', device)
return data
}
export const fetchDevices = async (typeId, brandId) => {
  const {data} = await $host.get('api/device',
  {params:{typeId, brandId}}
)
  return data
}
export const fetchOneDevice = async (id) => {
  const {data} = await $host.get('api/device/' + id)
  return data
}
export const deleteDevice = async (id) => {console.log(id);
  const {data} = await $host.delete('api/device/' + id)
  return data
}
