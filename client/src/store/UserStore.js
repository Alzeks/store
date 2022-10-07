import {makeAutoObservable} from 'mobx'

export default class UserStore{
  constructor(){
    this._isAuth = false
    this._user = {}
    this._loader = false
      makeAutoObservable(this)
    }
    setIsAuth(bool){this._isAuth = bool}
      setUser(user){this._user = user}
       setLoader(bool){this._isAuth = bool}
       
        get isAuth(){return this._isAuth}
          get user(){return this._user}
           get loader(){return this._loader}
}
