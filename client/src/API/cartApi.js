import {$host, $authHost} from './index'

export const createCartDevice = async (device) => {console.log(device);
  const {data} = await $host.post('api/cart', device)
  return data
}
export const fetchCartDevices = async () => {
  const {data} = await $host.get('api/cart')
  return data
}
export const deleteDevice = async (id) => {console.log(id);
  const {data} = await $host.delete('api/cart/' + id)
  return data
 }
export const countDevice = async (id, count) => {console.log(id);
  const {data} = await $host.put('api/cart', {count, id})
  return data
}
