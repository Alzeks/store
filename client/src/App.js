import React, {useContext, useState, useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/appRouter'
import NavBar from './components/navBar'
//import NavBar1 from './components/NavBar1'
import {observer} from 'mobx-react-lite'

//function App() {
  const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
<NavBar/>
<AppRouter/>
    </div>
    </BrowserRouter>
  );
}
export default App;
