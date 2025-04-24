import {useEffect, useState} from "react"
import {Flex, Input, Button} from 'antd'
import classnames from 'classnames'
import "./css.css"
import {useMatches} from "react-router-dom";

export default function Demo15_msg_brother() {
    const matches = useMatches()
    const handle = matches[matches.length - 1].handle
    useEffect(() => {
    }, []);

    return <div>
        <div className="router_desc">
            <div className="title">{handle.title}</div>
            <div className="path">{handle.path}</div>
        </div>

    </div>
}
