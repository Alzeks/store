import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
//import reportWebVitals from './reportWebVitals';

export const Context = createContext(null)

ReactDOM.render(
  <React.StrictMode>
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()}}>
    <App />
    </Context.Provider>,
</React.StrictMode>,
  document.getElementById('root')
);
