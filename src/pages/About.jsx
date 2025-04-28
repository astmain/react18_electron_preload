import React from 'react'
import {Button} from 'antd'
import {useSearchParams} from "react-router-dom";
import {useNavigate} from "react-router";


const About = () => {
    let navigate = useNavigate()

    function goto() {
        navigate("/About?name=小许&desc=参数跳转")
    }

    let [params, searchParams] = useSearchParams()
    let ppp = useNavigate()

    function get_params() {
        let name = params.get("name")
        console.log(`params---`, params)
        console.log(`name =---`, name)
        console.log(`ppp.name=---`, ppp.name)


        let allParams = {}
        const searchString = searchParams.toString();
        console.log(`111---searchString:`, searchString)
        // const params2 = searchString.split('&');
        // params2.forEach((ele) => {
        //     const [key, value] = ele.split('=');
        //     if (key) {
        //         allParams[key] = value;
        //     }
        // })
        // console.log(`allParams---`, allParams)
    }

    return (<div>
        <h1>关于</h1>

        <Button type="primary" onClick={goto}>goto</Button>

        <Button type="primary" onClick={get_params}>get_params</Button>
    </div>)
}

export default About
