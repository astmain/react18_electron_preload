import {router} from './router.jsx'
import {RouterProvider} from 'react-router'

export default function App() {
    return (<div>
        <RouterProvider router={router}></RouterProvider>
    </div>)
}
