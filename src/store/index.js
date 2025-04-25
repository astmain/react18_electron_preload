import {configureStore} from "@reduxjs/toolkit"
import count from "./modules/count"
import channel from "./modules/channel"
import takeaway from "./modules/takeaway"


let store = configureStore({
    reducer: {
        count: count.reducer,
        channel: channel.reducer,
        takeaway: takeaway.reducer,
    }
})


export default store