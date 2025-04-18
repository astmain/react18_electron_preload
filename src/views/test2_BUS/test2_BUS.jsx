import {Button} from "antd";
import React from "react";
import axios from "axios";


config_axios_api({name: "axios_api"})

export default () => {
    let met1 = async () => {


    }

    return (<div>
        <h1>test2_BUS</h1>

        <Button type="primary" onClick={met1}>
            met1
        </Button>

        <div id="aaa">

        </div>

    </div>)
}
