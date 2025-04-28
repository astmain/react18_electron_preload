import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './store/index'
import './css.css'
import 'normalize.css'
import App from './App.jsx'


const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}>

    <App/>
</Provider>);
