import "./css.css"
import {useMatches} from "react-router-dom";
import {useEffect, useState} from "react"
import {Flex, Input, Button} from 'antd'
import classnames from 'classnames'

import A01_son from "./A01_son"
import A02_son from "./A02_son"


// 1. 通过子传父 A   -> App
// 2. 通过父传子 App -> B

export default function Demo15_msg_brother() {
    const matches = useMatches()
    const handle = matches[matches.length - 1].handle


    let [msg, msg_set] = useState("")

    function get_1_msg(msg) {
        console.log(`111---get_1_msg:`, msg)
        msg_set(msg)
    }


    useEffect(() => {
    }, [])

    return <div className="parent">
        <div className="router_desc">
            <div className="title">{handle.title}</div>
            <div className="path">{handle.path}</div>
        </div>


        <A01_son callback={get_1_msg}/>


        <A02_son  msg={msg}/>

    </div>
}
