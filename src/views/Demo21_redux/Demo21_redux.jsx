import {useMatches} from "react-router-dom";
import {useEffect, useState, createContext} from "react"
import {Flex, Input, Button} from 'antd'
import classnames from 'classnames'
export default function Demo21_redux() {
    function fun1() {
        console.log(`111---fun1:`, 333)
    }

    useEffect(() => {
    }, [])

    return <div className="Demo21_redux">
        <h1>Demo21_redux</h1>
        <button onClick={()=>fun1()}>fun1</button>
    </div>
}


/*
使用步骤：
1.定义一个reducer 函数（根据当前想要做的修改返回一个新的状态)
2. 使用createStore方法传入 reducer函数 生成一个store实例对象
3. 使用store实例的 subscribe方法 订阅数据的变化（数据一旦变化，可以得到通知）
4. 使用store实例的dispatch方法提交action对象触发数据变化（告诉reducer你想怎么改数据)
5. 使用store实例的 getState方法 获取最新的状态数据更新到视图中




* */