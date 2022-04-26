import React, {useContext, useState, useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/appRouter'
import NavBar from './components/navBar'
import NavBar1 from './components/NavBar1'
import {observer} from 'mobx-react-lite'
import {Context} from './index'
import {check} from './API/userAPI'


//function App() {
  const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
  //console.log(localStorage);

// useEffect( () => {
//    check().then(data => {
//      user.setUser(true)
//      user.setIsAuth(true)
//    })//.finally( () => setLoading(false))
//  }, [])
  return (
    <BrowserRouter>
    <div className="App">

<NavBar/>
<AppRouter/>
    </div>
    </BrowserRouter>
  );
})

export default App;
