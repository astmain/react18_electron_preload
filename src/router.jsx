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
        index: true,
        path: 'Home',
        key: 'Home',
        label: '首页',
        Component: Home,
        handle: {"title": "首页"},
        icon: <AppstoreOutlined/>,
    },
    {
        key: 'About',
        label: '关于',
        path: 'About',
        Component: About,
        handle: {"title": "关于"},
        icon: <AppstoreOutlined/>,
    },
    {
        key: 'min_web',
        label: 'min_web',
        state: 'min_web',
        path: 'min_web',
        Component: min_web,
        handle: {"title": "min_web"},
        icon: <AppstoreOutlined/>,
    },
    {
        key: 'test1_img_cookie',
        label: 'test1_img_cookie',
        path: 'test1_img_cookie',
        Component: test1_img_cookie,
        handle: {"title": "test1_img_cookie"},
        icon: <AppstoreOutlined/>,
    },
    {
        key: 'Test2',
        label: 'Test2',
        path: 'Test2',
        Component: Test2,
        handle: {"title": "Test2"},
        icon: <AppstoreOutlined/>,
    },

    {
        key: 'Test3',
        label: 'Test3',
        path: 'Test3',
        Component: Test3,
        handle: {"title": "Test3"},
        icon: <AppstoreOutlined/>,
    },

    {
        key: 'Test4',
        label: 'Test4',
        path: 'Test4',
        Component: lazy(() => import("@src/views/Test4/Test4")),
        handle: {"title": "Test4"},
        icon: <AppstoreOutlined/>,
    },

    {
        key: 'Test5_bjotai',
        label: 'Test5_bjotai',
        path: 'Test5_bjotai',
        Component: lazy(() => import("@/views/Test5_bjotai/Test5_bjotai")),
        handle: {"title": "Test5_bjotai"},
        icon: <AppstoreOutlined/>,
    },

    {
        key: 'Test11_useState',
        label: 'Test11_useState',
        path: 'Test11_useState',
        Component: lazy(() => import("@/views/Test11_useState/Test11_useState")),
        handle: {"title": "Test11_useState"},
        icon: <AppstoreOutlined/>,
    },

    {
        key: 'Demo11_comment',
        label: 'Demo11_comment',
        path: 'Demo11_comment',
        Component: lazy(() => import("@/views/Demo11_comment/Demo11_comment")),
        handle: {"title": "Demo11_comment"},
        icon: <AppstoreOutlined/>,
    },
    {
        key: 'Demo11_comment2',
        label: 'Demo11_comment2',
        path: 'Demo11_comment2',
        Component: lazy(() => import("@/views/Demo11_comment2/Demo11_comment2")),
        handle: {"title": "Demo11_comment2"},
        icon: <AppstoreOutlined/>,
    },


    {
        key: 'Demo12_form',
        label: 'Demo12_form',
        path: 'Demo12_form',
        Component: lazy(() => import("@/views/Demo12_form/Demo12_form")),
        handle: {"title": "Demo12_form"},
        icon: <AppstoreOutlined/>,
    },

    {
        key: 'Demo13_useRef',
        label: 'Demo13_useRef',
        path: 'Demo13_useRef',
        Component: lazy(() => import("@/views/Demo13_useRef/Demo13_useRef")),
        handle: {"title": "Demo13_useRef"},
        icon: <AppstoreOutlined/>,
    },




]

const router = createBrowserRouter([
    // const router = createHashRouter([
    // const router = createMemoryRouter([
    {
        path: '/',
        handle: {"title": "首页"},
        // path: "/index",
        Component: aLayout, //父路由可以省略path
        //子路由不需要加/
        children: router_children,
    },
])


export {router, router_children}

// export default {router,router_children}
