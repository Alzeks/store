import {$host, $authHost} from './index'
import jwt_decode from 'jwt-decode'


export const registration = async (email, password) => {
  //const response = await $host.post('api/user/registration',
  //{email, password, role: 'ADMIN'}
  const {data} = await $host.post('api/user/registration',
  {email, password, role: 'ADMIN'})
  //return response
  localStorage.setItem('token', data.token)
 return jwt_decode(data.token)
}
export const login = async (email, password) => {
  //const response = await $host.post('api/user/registration',
  const {data} = await $host.post('api/user/login',
  {email, password, role: 'ADMIN'})
console.log(data.token);
  //return response
  localStorage.setItem('token', data.token)
  console.log(localStorage);
  return jwt_decode(data.token)
}
export const check = async () => {
//  const response = await $host.post('api/auth/auth')
   const {data} = await $authHost.get('api/user/auth')
  //const {data} = await $authHost.get('api/auth/registration')
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
  //return response
}
