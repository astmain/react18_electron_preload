import {useEffect, useState, useRef} from "react"
import {Flex, Input, Button} from 'antd'
import classnames from 'classnames'
import "./css.css"

export default function A01_son(props) {
    console.log(`A01_son---props:`, props)



    function fun1() {
        console.log(`fun1---props:`, props)
    }


    return <div className="A01_son">
        <button onClick={fun1}>fun1</button>


        <h3>A01_son</h3>
        <div>{props.name}</div>
        {props.dom}


    </div>
}
