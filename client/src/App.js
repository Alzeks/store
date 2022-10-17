import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/appRouter'
import NavBar from './components/navBar'

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
