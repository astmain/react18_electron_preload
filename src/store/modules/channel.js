import {createSlice} from "@reduxjs/toolkit"
import axios from "axios"


let store_channel = createSlice({
    name: 'name_channel', // 初始化state
    initialState: {
        channel_list: []
    },//
    // 修改状态的方法 同步方法 支持直接修改
    reducers: {
        make(state, action) {
            state.channel_list = action.payload
        }


    }
})


//异步请求部分
const {make} = store_channel.actions
const axios_channel_list = () => {
    return async (dispatch) => {
        let config = {method: 'get', url: 'http://127.0.0.1:9999/api?data=comment_list.json', data: {aaa: 111}}
        let res = await axios(config)
        console.log('res.data---', res.data)
        // return store_channel.actions.make(res.data)
        dispatch(make(res.data))
    }
}

const reducer = store_channel.reducer
export default {...store_channel.actions, reducer, axios_channel_list}
