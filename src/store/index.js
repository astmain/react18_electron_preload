import {configureStore} from "@reduxjs/toolkit"
import count from "./modules/count"


let store = configureStore({
    reducer: {
        count: count.reducer,


    }
})


export default store