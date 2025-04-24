import {useMatches} from "react-router-dom";
import {useEffect, useState, createContext, useContext} from "react"
import {Flex, Input, Button} from 'antd'
import classnames from 'classnames'


let myContext = createContext()

function A() {
    console.log(`111---fun1:`, 333)
    return <div>
        <div>A</div>
        <B></B>
    </div>
}

function B() {
    console.log(`111---fun1:`, 333)
    let msg = useContext(myContext)
    return <div>
        <div>B</div>
        <div>msg:{msg}</div>

    </div>
}


export default function react1111() {
    let msg = useState("App")

    function fun1() {
        console.log(`111---fun1:`, 333)
    }


    useEffect(() => {
    }, []);

    return <div className="react1">
        <button onClick={() => fun1()}>fun1</button>
        <h1>react1</h1>
        <myContext.Provider value={msg}>
            <A/>
        </myContext.Provider>

    </div>
}
// 1. createContext方法创建一个上下文对象
// 2. 在顶层组件 通过Provider组件提供数据
// 3. 在底层组件 通过useContext钩子函数使用数据