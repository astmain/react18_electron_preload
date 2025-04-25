import {useMatches} from "react-router-dom";
import {useEffect, useState, createContext} from "react"
import {Flex, Input, Button} from 'antd'
import classnames from 'classnames'

import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import act from "@/store/modules/count"

export default function react1() {
    const count = useSelector(state => state.count)

    console.log(`111---count:`,     count        )
    const dispatch = useDispatch()

    console.log(`111---count:`, count)

    function add() {
        console.log(`111---fun1:`, count)
        // count.count +=1
        dispatch(act.add())
    }


    useEffect(() => {
    }, []);

    return <div className="react1">
        <h1>react1</h1>
        <button onClick={() => dispatch(act.add())}>add</button>
        <button onClick={() => dispatch(act.make(50))}>add_to_num</button>
        <pre>{count.count}</pre>

    </div>
}