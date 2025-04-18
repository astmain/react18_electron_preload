import {Button} from "antd";
import React from "react";
import axios from "axios";

import config_axios_api from "./config_axios_api";

config_axios_api({name: "axios_api"})

export default () => {


    let met1 = async () => {


        var config = {
            method: 'get',
            url: 'http://192.168.0.109:8099/web/content/96',
            responseType: "blob",
            headers_custom: {
                'Pragma': 'no-cache',
                'Upgrade-Insecure-Requests': '1',
                'Cookie': 'tz=Asia/Shanghai; session_id=Q6TPXVAf5p9t4mqoEgPwFXyYniXBoUzZEmo9ZrqV0EC1LJ8VznGQM99S_sOy2k9VdiT-wnI3akRDs1znWXSi'
            }
        };

        let res = await axios_api(config)
        console.log(`111---res:`, res)


        let base64 = await blobToBase64(res)
        console.log(`111---base64:`, base64)

        // axios.get(url, {responseType: "blob",}).then((response) => {
        //     let reader = new FileReader()
        //     reader.readAsDataURL(response.data)
        //     reader.onload = function (e) {
        //         res(e.target.result)
        //     }
        // })

        function blobToBase64(blob) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = () => {
                    const base64String = reader.result.split(',')[1];
                    resolve(base64String);
                };
                reader.onerror = (error) => {
                    reject(error);
                };
            });
        }


    }

    return (<div>
        <h1>test_cpp</h1>

        <Button type="primary" onClick={met1}>
            met1
        </Button>

        <div id="aaa">

        </div>

    </div>)
}
