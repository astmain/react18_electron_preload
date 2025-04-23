import {useEffect, useState} from "react"
import {Flex, Input, Button} from 'antd'
import classnames from 'classnames'
import "./css.css"

export default function Demo12_form() {
    const [value, value_set] = useState("")

    useEffect(() => {
    }, []);

    return <div>
        <input type="text" value={value} onChange={(e) => value_set(e.target.value)}/>


    </div>
}
