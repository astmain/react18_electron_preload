import {useEffect, useState, useRef} from "react"
import {Flex, Input, Button} from 'antd'
import A01_son from './A01_son'
import classnames from 'classnames'
import "./css.css"


export default function Demo14_message() {


    let name = "小许"
    let age = 18
    let obj = {aaa: 111}
    let [list, list_set] = useState([{name: "周杰伦", age: 999}, {name: "林俊杰", age: 111}])
    let dom = <div> {list.map((o, i) => <p key={i}>{o.name}|{o.age}</p>)}</div>

    function fun1() {
        // list = [{name: "周杰伦", age: 999999}, {name: "林俊杰", age: 111111}]
        // console.log(`fun1---list:`, list)
        list_set([{name: "周杰伦", age: 999999}, {name: "林俊杰", age: 111111}])
    }


    return <div className="parent">
        <div>Demo14_message</div>
        <button onClick={fun1}>fun1</button>
        <A01_son name={name}
                 age={age}
                 obj={obj}
                 arr={[1, 2, 3]}
                 dom={dom}
        >
            <div style={{color: 'red'}}>我是children</div>
            <div style={{color: 'red'}}>{name}</div>
        </A01_son>

    </div>
}
