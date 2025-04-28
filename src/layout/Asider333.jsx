import {Button, Menu} from 'antd'
import {useLocation, useNavigate} from 'react-router'
import {router_children} from '@src/router'
import {useState} from "react";
import {useMatches} from "react-router-dom";


export default function Asider() {


    const matches = useMatches()
    // console.log(`000---matches:`, matches)
    const handle = matches[matches.length - 1].handle

    // console.log(`111---handle:`, handle)
    const location = useLocation()
    // console.log(`222---location:`, location)

    const navigate = useNavigate()
    // console.log(`333---navigate:`, navigate)
    // const [current, set_current] = useState(route);
    const [current, set_current] = useState(handle.path);
    const goto = (event) => {
        // console.log(`111---222:`,     info        )
        // navigate(event.key)
        navigate(event.key)
        // console.log(`111---222:`, event.key)
        set_current(event.key)
    }
    // let items = router_children.map((item) => ({key: item.key, label: item.label}))
    // let items = router_children.map((item) => ({key: item.handle.path, label: item.handle.title}))
    // console.log(`111---items:`,     items        )


    // let items = router_children.map((item) => ({label: item.label, key: item.path}))
    // console.log(`111---items:`,     items        )

    function fun1() {
        console.log(`111---current:`, current)
    }

    let aaa=[
        {
            "index": true,
            "label": "首页",
            "path": "Home",
            "Component": "Home",
            "handle": {
                "label": "首页",
                "key": "Home"
            }
        },
        // {
        //     "label": "测试",
        //     "path": "Test0",
        //     "Component": "Test2",
        //     "children": [
        //         {
        //             "label": "Test2",
        //             "path": "Test2",
        //
        //             "Component": "Test2",
        //             "handle": {
        //                 "label": "Test2",
        //                 "key": "Test2"
        //             }
        //         },
        //         {
        //             "label": "Test3",
        //             "path": "Test3",
        //             "Component": "Test3",
        //             "handle": {
        //                 "label": "Test3",
        //                 "key": "Test3"
        //             }
        //         }
        //     ],
        //     "handle": {
        //         "label": "测试",
        //         "key": "Test0"
        //     }
        // }
    ]

    return <div className="Asider">

        <Button onClick={() => fun1()}>111</Button>
        <Menu theme="dark" selectedKeys={[current]} mode="inline" onClick={goto} style={{height: '100vh'}} items={aaa}></Menu>

    </div>

}
