// import { createBrowserRouter, createHashRouter, createMemoryRouter, createStaticRouter } from "react-router";
import React, {Suspense, lazy} from 'react';
import {createBrowserRouter} from 'react-router'
import Alayout from './layout/Alayout'
import About from './pages/About'
import home from './pages/Home'

import min_web from './views/min_web/min_web'
import test1_img_cookie from './views/test1_img_cookie/test1_img_cookie'
import Test2 from './views/Test2/Test2'
import Test3 from './views/Test3/Test3'
import {AppstoreOutlined} from "@ant-design/icons";
import Demo16_msg_context from "@/views/Demo16_msg_context/Demo16_msg_context";
import Demo18_hook_custom from "@/views/Demo18_hook_custom/Demo18_hook_custom";

let router_children = [
    {
        label: '首页',
        path: 'home',
        Component: home,
   /*     icon: <AppstoreOutlined/>,*/
    },
    /* {
            label: 'Test0',
            path: '',
            // Component: Test2,
            icon: <AppstoreOutlined/>,
            children: [
                {label: 'Test2', path: "test2", icon: <AppstoreOutlined/>, Component: Test2},
                {label: 'Test3', path: "test3", icon: <AppstoreOutlined/>, Component: Test3},
            ],
        },
    */


]

function transformData(data) {
    return data.map(item => {
        const newItem = {...item, key: item.path, handle: {label: item.label, key: item.path, path: item.path},}
        if (item.children) {
            newItem.children = transformData(item.children);
        }
        return newItem;
    });
}

router_children = transformData(router_children)
// console.log(`router_children---222:`, router_children)

const router = createBrowserRouter([
    // const router = createHashRouter([
    // const router = createMemoryRouter([
    {
        path: '/',
        // path: "/index",
        Component: Alayout, //父路由可以省略path
        //子路由不需要加/
        children: router_children,
    },
])


export {router, router_children}

// export default {router,router_children}
