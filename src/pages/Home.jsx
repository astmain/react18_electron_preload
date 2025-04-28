import React from 'react'
import {Button} from 'antd'
import {useNavigate} from "react-router";



const Home = () => {
    let navigate = useNavigate()

    function goto_Home() {
        navigate("/About?name=小许&desc=参数跳转")
    }
    function goto_NotFound404() {
        navigate("/About111?name=小许&desc=参数跳转")
    }


    return (
        <div>
            <h1>主页</h1>;
            <Button type="primary" onClick={goto_Home}>goto_Home</Button>
            <Button type="primary" onClick={goto_NotFound404}>goto_NotFound404</Button>
        </div>
    )
}

export default Home
