import {createSlice} from "@reduxjs/toolkit"


let store_count = createSlice({
    name: 'name_count', // 初始化state
    initialState: {count: 0},//
    // 修改状态的方法 同步方法 支持直接修改
    reducers: {
        add(state) {
            state.count++
        }, //
        subt(state) {
            state.count--
        }, //
        make(state, action) {
            state.count = action.payload
        }


    }
})

const reducer = store_count.reducer
export default {...store_count.actions, reducer}
