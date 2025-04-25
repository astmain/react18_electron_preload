import {useEffect, useState} from "react"
import {Flex, Input, Button} from 'antd'
import classnames from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import channel from "@/store/modules/channel"

export default function Demo23_redux_111() {
    const {channel_list} = useSelector(state => state.channel)
    let dispatch = useDispatch()

    async function fun1() {
        console.log(`111---channel:`, await channel.axios_channel_list())
        console.log(`222---channel_list:`, channel_list)
        dispatch(channel.axios_channel_list())
    }

    // useEffect(() => {
    //     dispatch(channel.axios_channel_list())
    // }, [dispatch]);

    return <div>react1
        <button onClick={() => fun1()}>fun1</button>

        <ul>
            {channel_list.map((item, i) => {
                return <li key={i}>{item.username}</li>
            })}
        </ul>


    </div>
}
