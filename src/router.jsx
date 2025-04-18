// import { createBrowserRouter, createHashRouter, createMemoryRouter, createStaticRouter } from "react-router";
import {createBrowserRouter} from 'react-router'
import aLayout from './layout/aLayout'
import About from './pages/About'
import Home from './pages/Home'

import min_web from './views/min_web/min_web'
import test1_img_cookie from './views/test1_img_cookie/test1_img_cookie'
import Test2 from './views/Test2/Test2'
import Test3 from './views/Test3/Test3'

const router = createBrowserRouter([
    // const router = createHashRouter([
    // const router = createMemoryRouter([
    {
        path: '/',
        // path: "/index",
        Component: aLayout, //父路由可以省略path
        //子路由不需要加/
        children: [
            {
                path: 'Home',
                index: true,
                Component: Home,
                state: '111',
                meta: {title: '首页'},
            },
            {
                path: 'About',
                Component: About,
                state: '222',
                meta: {title: '关于'},
            },
            {
                path: 'min_web',
                Component: min_web,
                state: 'min_web',
                meta: {title: 'min_web'},
            },
            {
                path: 'test1_img_cookie',
                Component: test1_img_cookie,
                state: 'test1_img_cookie',
                meta: {title: 'test1_img_cookie'},
            },
            {
                path: 'Test2',
                Component: Test2,
                state: 'Test2',
                meta: {title: 'Test2'},
            },

            {
                path: 'Test3',
                Component: Test3,
                state: 'Test3',
                meta: {title: 'Test3'},
            },
        ],
    },
    // {
    //     path: "/about",
    //     Component: About,
    // },
])

export default router
