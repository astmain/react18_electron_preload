import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BUS from './BUS'

createRoot(document.getElementById('root')).render(<StrictMode>
    <App/>
</StrictMode>,)

window.BUS = BUS
