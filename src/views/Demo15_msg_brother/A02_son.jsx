import {useEffect, useState} from "react"
import {Flex, Input, Button} from 'antd'
import classnames from 'classnames'


export default function A01_son(props) {
    function fun1() {
        console.log(`111---fun1:`, 333)
    }


    useEffect(() => {
    }, []);

    return <div className="A02_son">
        <h1>A02_son</h1>
        <button onClick={fun1}>fun1</button>
        <div>msg:{props.msg}</div>

    </div>
}
