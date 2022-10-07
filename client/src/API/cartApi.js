import {$host, $authHost} from './index'

export const createCartDevice = async (device) => {
  const {data} = await $authHost.post('api/cart', device)
  return data
}
export const fetchCartDevices = async () => {
  const {data} = await $authHost.get('api/cart')
  return data
}
export const deleteDevice = async (id) => {console.log(id);
  const {data} = await $authHost.delete('api/cart/' + id)
  return data
 }
export const countDevice = async (id, count) => {
  const {data} = await $host.put('api/cart', {count, id})
  return data
}
