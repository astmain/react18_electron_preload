import {useState} from "react";


export default function A01_son(props) {
    console.log(`A01_son---props:`, props)

    function fun1() {
        console.log(`fun1---props:`, props)
    }

    return <div className="A01_son">
        <h3>父传子任意数据+数据绑定useState</h3>
        <button onClick={fun1}>fun1</button>
        <h3>A01_son</h3>
        <div>{props.name}</div>
        {props.dom}
        <div>{props.children} </div>


    </div>
}
