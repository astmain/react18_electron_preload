import {Button} from "antd";
import {useSnapshot} from "valtio";

import BUS from "@/BUS";

globalThis.BBB = BUS

function Test2() {

    useSnapshot(BBB)

    function fun1() {
        setInterval(() => {
            console.log("  BUS---:", BBB);
            console.log("  BUS.count---:", BBB.count);
            BBB.count += 1;

        }, 1111);
    }

    return (<div>

        <div style={{width: '500px', height: "500px", border: "1px red solid"}}>
            <Button type="primary" onClick={fun1}>
                点击我222222
            </Button>
        </div>


        <h1>{BBB.count}</h1>
    </div>);
}

export default Test2;
