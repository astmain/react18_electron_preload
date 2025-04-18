import {Button} from "antd";
import React from "react";
import BUS2 from "../../BUS.js";


export default () => {
    let {count} = BUS2

    let met1 = () => {
        console.log(`111---BUS:`, BUS)
        BUS.name = "当前时间戳" + Date.now()
        console.log(`222---BUS:`, BUS)
        111211122
        BUS.count++
        console.log(`111---BUS2:`, BUS2)
        let a1 = BUS2.count
        // console.log(`222---a1:`, a1)
        // let {count} = BUS
        // console.log(`333---count:`, count)
        count++
    }

    return (<>
        <h1>test_cpp</h1>
        <Button type="primary" onClick={met1}>
            met1
        </Button>
        <h1>{BUS.name}</h1>
        <h1>{BUS.count}</h1>
        <h1>{count}</h1>
    </>)
}
