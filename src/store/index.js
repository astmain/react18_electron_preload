import {configureStore} from "@reduxjs/toolkit"
import count from "./modules/count"
import channel from "./modules/channel"


let store = configureStore({
    reducer: {
        count: count.reducer,
        channel: channel.reducer,
    }
})


export default store