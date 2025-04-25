import {useEffect, useState} from "react"
import {Flex, Input, Button} from 'antd'
import {SearchOutlined} from '@ant-design/icons';
import classnames from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import takeaway from "@/store/modules/takeaway"
import channel from "@/store/modules/channel";
import "./css.css"
import dayjs from "dayjs";

export default function Demo31_takeaway() {
    let dispatch = useDispatch()
    const takeaway222 = useSelector(state => state.takeaway)


    const [input, set_input] = useState()

    function fun1() {
        console.log(`111---takeaway:`, takeaway)
        console.log(`222---takeaway222.foodsList:`, takeaway222.foodsList)

        console.log(`333---takeaway.set_foodsList():`, takeaway.set_foodsList())
        console.log(`444---takeaway.axios_list():`, takeaway.axios_list())
        dispatch(takeaway.axios_list())
        console.log(`555--- takeaway222.foodsList:`, takeaway222.foodsList)

    }


    // useEffect(() => {
    //     dispatch(channel.axios_channel_list())
    // }, [dispatch]);

    return <div>
        <button onClick={() => fun1()}>fun1</button>
        <ul>
            {takeaway222.foodsList.map((item, i) => {
                return <li key={i}>{item.name}</li>
            })}
        </ul>


        <div className="parent">
            <nav className="nav_header">
                <Input value={input} placeholder="新的风暴已经出现，你的妙评何时再现" variant="filled"/>
                <Button type="primary" icon={<SearchOutlined/>}/>
            </nav>

            <nav className="nav_main">

                <div className="food_kind">

                </div>
                <div className="food_list">

                </div>
            </nav>

            <nav className="nav_foot">
                <Input value={input} placeholder="新的风暴已经出现，你的妙评何时再现" variant="filled"/>
                <Button type="primary" icon={<SearchOutlined/>}/>
            </nav>


        </div>

    </div>
}
