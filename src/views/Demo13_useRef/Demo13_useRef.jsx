import {useEffect, useState, useRef} from "react"
import {Flex, Input, Button} from 'antd'
import classnames from 'classnames'
import "./css.css"

export default function Demo13_useRef() {
    const ref_input = useRef(null)
    const [value, value_set] = useState("abc")


    function fun1() {
        console.log(`111---fun1:`, ref_input.current)
        console.dir(ref_input.current)
    }

    useEffect(() => {
    }, []);

    return <div>
        <Button type="primary" onClick={() => fun1()}>fun1</Button>
        <input ref={ref_input} value={value} onChange={(e) => value_set(e.target.value)} type="text"/>


    </div>
}
