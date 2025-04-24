import {useMatches} from "react-router-dom";
import {useEffect, useState, createContext} from "react"
import {Flex, Input, Button} from 'antd'
import classnames from 'classnames'
import hook_open from './hook_open'


// function hook_open() {
//     const open = () => set_show(!show)
//     const [show, set_show] = useState(false)
//     return {open, show}
// }

export default function Demo18_hook_custom() {

    // const open = () => set_show(!show)
    // const [show, set_show] = useState(false)
    let {open, show} = hook_open()


    useEffect(() => {
    }, []);

    return <div className="Demo17_useEffect">
        <h1>Demo17_useEffect</h1>
        <button onClick={() => open()}>open</button>
        {show && <h1>显示隐藏</h1>}
    </div>
}