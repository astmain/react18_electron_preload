
import router from './router.jsx'
import { RouterProvider } from 'react-router'




function App() {
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    )
}

export default App
