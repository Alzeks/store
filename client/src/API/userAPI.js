import {$host, $authHost} from './index'
import jwt_decode from 'jwt-decode'


export const registration = async (email, password) => {
  const {data} = await $host.post('api/user/registration',
  {email, password, role: 'ADMIN'})
  if(!data.token) return data
  //localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const login = async (email, password) => {console.log(email);
  const {data} = await $host.post('api/user/login',
  {email, password, role: 'ADMIN'})
  return data
}

export const checkAuth = async () => {
  const {data} = await $authHost.get('api/user/auth')
  //  const {data} = await $host.get('api/user/auth',
  // {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
  // )
  localStorage.setItem('token', data.token)
  return data
}

export const fetchUsers = async () => {
  const {data} = await $host.get('api/user/registration')
  return data
}

export const getUser = async (id) => {console.log(id);
  const {data} = await $host.get('api/user/registration/' + id)
  return data
}

export const deleteUser = async (id) => {
  const {data} = await $host.delete('api/user/registration/' + id)
  return data
}
