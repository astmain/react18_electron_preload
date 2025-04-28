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
        // set_current(event.key)
    }
    // let items = router_children.map((item) => ({key: item.key, label: item.label}))
    let items = router_children.map((item) => ({key: item.handle.path, label: item.handle.title}))

    // console.log(`111---items:`,     items        )

    function fun1() {
        console.log(`111---current:`, current)
    }

    return <div className="Asider">

        <Button onClick={() => fun1()}>111</Button>
        <Menu theme="dark" selectedKeys={["Home"]} mode="inline" onClick={goto} style={{height: '100vh'}} items={router_children}></Menu>

    </div>

}
