import {useMatches} from "react-router-dom";
import {useEffect, useState, createContext} from "react"
import {Flex, Input, Button} from 'antd'
import classnames from 'classnames'
import {createStore} from 'redux';

export default function Demo21_redux() {
    function redu(store = {count: 0}, action) {
        if (action.type === 'add') {
            return {count: store.count + 1}
        }
        if (action.type === 'subt') {
            return {count: store.count - 1}
        }
        return store
    }

    let store = createStore(redu)
    store.subscribe(() => {
        console.log(`store变化了`, store.getState())
    })


    function add() {
        store.dispatch({type: 'add'})
        console.log(`add---222:`, store.getState())
    }

    function subt() {
        store.dispatch({type: 'subt'})
        console.log(`subt---222:`, store.getState())
    }

    useEffect(() => {
    }, [])

    return <div className="Demo21_redux">
        <h1>Demo21_redux</h1>
        <button onClick={() => add()}>add</button>
        <button onClick={() => subt()}>subt</button>
        <p>{store.getState().count}</p>
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