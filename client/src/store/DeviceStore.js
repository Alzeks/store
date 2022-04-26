import {makeAutoObservable} from 'mobx'

export default class DeviceStore{
  constructor(){
    this._types = [
      {id: 1, name: 'refregirator'},
      {id: 2, name: 'smartphon'},
      {id: 3, name: 'tools'},
      {id: 4, name: 'devices'}
    ]
    this._brands = [
      {id: 1, name: 'samsung'},
      {id: 2, name: 'aple'},
      {id: 3, name: 'samsung'},
      {id: 4, name: 'lenovo'},
      {id: 5, name: 'xiaomi'},
      {id: 6, name: 'lg'}
    ]
    this._devices = [
      {id: 1, name: 'iphon 12', price: 350, rating: 5, img: 'https://klike.net/uploads/posts/2020-07/1594278030_1.jpg'},
      {id: 2, name: 'iphon 12', price: 450, rating: 5, img: 'https://klike.net/uploads/posts/2020-07/1594278030_1.jpg'},
      {id: 3, name: 'iphon 12', price: 550, rating: 5, img: 'https://klike.net/uploads/posts/2020-07/1594278030_1.jpg'},
      {id: 4, name: 'iphon 12', price: 650, rating: 5, img: 'https://klike.net/uploads/posts/2020-07/1594278030_1.jpg'},
      {id: 5, name: 'iphon 12', price: 750, rating: 5, img: 'https://klike.net/uploads/posts/2020-07/1594278030_1.jpg'},
      {id: 6, name: 'iphon 12', price: 850, rating: 5, img: 'https://klike.net/uploads/posts/2020-07/1594278030_1.jpg'},
      {id: 7, name: 'iphon 12', price: 950, rating: 5, img: 'https://klike.net/uploads/posts/2020-07/1594278030_1.jpg'},
      {id: 8, name: 'iphon 12', price: 950, rating: 5, img: 'https://klike.net/uploads/posts/2020-07/1594278030_1.jpg'}
    ]
    this._selectedType={}
    this._selectedBrand={}
    this._basket = []
    this._basketCount = []
      makeAutoObservable(this)
    }
    setTypes(types){this._types = types}
      setBrands(brands){this._brands = brands}
        setDevices(devices){this._devices = devices}
        setSelectedType(type){this._selectedType = type}
        setSelectedBrand(brand){this._selectedBrand = brand}
        setBasket(basketItem){this._basketItem = basketItem}
  setBasketCount(basketCount){this._basketCount = basketCount}

        get types(){return this._types}
          get brands(){return this._brands}
            get devices(){return this._devices}
            get selectedType(){return this._selectedType}
            get selectedBrand(){return this._selectedBrand}
          get basketItem(){return this._basketItem}
         get basketCount(){return this._basketCount}

}
