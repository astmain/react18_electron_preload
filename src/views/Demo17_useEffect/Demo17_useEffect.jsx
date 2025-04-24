import {useMatches} from "react-router-dom";
import {useEffect, useState, createContext} from "react"
import {Flex, Input, Button} from 'antd'
import classnames from 'classnames'
import axios from 'axios'

function Son() {
    useEffect(() => {
        let timer = setInterval(() => {
            console.log(`定时器执行中---`, 111)
        }, 1000)
        return () => {
            clearInterval(timer)
            console.log(`useEffect副作用函数,清除定时---`, 222)
        }
    }, []);

    return <div>
        this is Son
    </div>
}


export default function Demo17_useEffect() {
    const [list, list_set] = useState([])
    const [count, count_set] = useState(0)

    async function fun1() {
        let config = {method: 'get', url: 'http://geek.itheima.net/v1_0/channels', data: {aaa: 111}}
        let res = await axios(config)
        console.log('fun1---res.data.data', res.data)
        let list = res.data.data.channels
        console.log('fun1---list', list)
        list_set(list)
    }

    function fun2() {
        count_set(count + 1)
    }

    function fun3() {
        let num = 0
        setInterval(() => {
            // count_set(count + 1)
            num += 1
            count_set(num)
            console.log(`fun1---setInterval:`, num)
        }, 1000)
    }


    //  依赖项[],初始化执行一次
    // useEffect(() => {
    //     console.log(`useEffect副作用函数---执行了`)
    //     fun1()
    // }, [])


    //  依赖项[count]只要发生,就执行useEffect副作用函数(只会由count发生变化触发执行)
    // useEffect(() => {
    //     console.log(`useEffect副作用函数---执行了`)
    // }, [count])

    //  依赖项没有_只要状态数据useState发生任意变化就会触发
    // useEffect(() => {
    //     console.log(`useEffect副作用函数---执行了`)
    // })

    const [show, show_set] = useState(false)

    function open() {
        let value = !show
        show_set(value)
    }


    return <div className="Demo17_useEffect">
        <button onClick={() => fun1()}>fun1</button>
        <h1>Demo17_useEffect</h1>
        {/*<button onClick={() => fun2('click1')}>{count}</button>*/}
        <button onClick={() => fun2(111)}>{count}</button>
        <button onClick={() => fun3(111)}>{count}</button>
        <button onClick={() => open(111)}>open</button>

        <ul>

            {list && list.map((item, index) => {
                return <li key={index}>{item.name}</li>
            })}

        </ul>


        <div>{show && <Son/>}</div>
    </div>
}