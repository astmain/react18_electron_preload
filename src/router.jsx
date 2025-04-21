// import { createBrowserRouter, createHashRouter, createMemoryRouter, createStaticRouter } from "react-router";
import React, {Suspense, lazy} from 'react';
import {createBrowserRouter} from 'react-router'
import aLayout from './layout/aLayout'
import About from './pages/About'
import Home from './pages/Home'

import min_web from './views/min_web/min_web'
import test1_img_cookie from './views/test1_img_cookie/test1_img_cookie'
import Test2 from './views/Test2/Test2'
import Test3 from './views/Test3/Test3'
import {AppstoreOutlined} from "@ant-design/icons";

const router_children = [
    {
        path: 'Home',
        index: true,
        Component: Home,
        key: 'Home',
        label: '首页',
        icon: <AppstoreOutlined/>,
    },
    {
        path: 'About',
        Component: About,
        meta: {title: '关于'},
        key: 'About',
        label: '关于',
        icon: <AppstoreOutlined/>,
    },
    {
        path: 'min_web',
        Component: min_web,
        state: 'min_web',
        key: 'min_web',
        label: 'min_web',
        icon: <AppstoreOutlined/>,
    },
    {
        path: 'test1_img_cookie',
        Component: test1_img_cookie,
        key: 'test1_img_cookie',
        label: 'test1_img_cookie',
        icon: <AppstoreOutlined/>,
    },
    {
        path: 'Test2',
        Component: Test2,
        key: 'Test2',
        label: 'Test2',
        icon: <AppstoreOutlined/>,
    },

    {
        path: 'Test3',
        Component: Test3,
        key: 'Test3',
        label: 'Test3',
        icon: <AppstoreOutlined/>,
    },

    {
        path: 'Test4',
        Component: lazy(() => import("@src/views/Test4/Test4")),
        key: 'Test4',
        label: 'Test4',
        icon: <AppstoreOutlined/>,
    },


]

const router = createBrowserRouter([
    // const router = createHashRouter([
    // const router = createMemoryRouter([
    {
        path: '/',
        // path: "/index",
        Component: aLayout, //父路由可以省略path
        //子路由不需要加/
        children: router_children,
    },
])


export {router, router_children}

// export default {router,router_children}
