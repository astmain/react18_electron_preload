import {useEffect, useState} from "react"
import {Flex, Input, Button} from 'antd'
import classnames from 'classnames'
import "./css.css"

export default function A01_son(props) {
    let msg = "A01_son的消息"


    useEffect(() => {
    }, []);

    return <div className="A01_son">
        <h1>A01_son</h1>
        <button onClick={() => props.callback(msg)}>callback</button>

    </div>
}
