import {createSlice} from "@reduxjs/toolkit"
import axios from "axios";


let takeaway = createSlice({
    name: 'foods', // 初始化state
    initialState: {
        foodsList: [],
    },//
    // 修改状态的方法 同步方法 支持直接修改
    reducers: {
        set_foodsList(state, action) {
            state.foodsList = action.payload
        }
    }
})


const {set_foodsList} = takeaway.actions
const axios_list = () => {
    return async (dispatch) => {
        let config = {method: 'get', url: 'http://127.0.0.1:9999/api?data=foodsList.json', data: {aaa: 111}}
        let res = await axios(config)
        console.log('res.data---', res.data)
        dispatch(set_foodsList(res.data))
    }
}

const reducer = takeaway.reducer
export default {...takeaway.actions, reducer,axios_list}
