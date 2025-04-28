import {Button} from "antd";
import {useSnapshot} from "valtio";

import BUS from "@src/BUS";


function Test3() {
    useSnapshot(BUS)
    // setInterval(() => {
    //     // BUS.count  = ()=>BUS.count+1
    //     BUS.count  = BUS.count+1
    //     console.log("  BUS---:", BUS);
    //     console.log("  BUS.count---:", BUS.count);
    //
    // }, 1111);
    // BUS.count  = BUS.count+1

    function fun1() {
        setInterval(() => {
            console.log("  BUS---:", BUS);
            console.log("  BUS.count---:", BUS.count);
            BUS.count += 1;

        }, 1111);
    }

    return (<div>

        <div style={{width: '500px', height: "500px", border: "1px red solid"}}>
            <Button type="primary" onClick={fun1}>
                点击我Test3
            </Button>
        </div>


        <h1>{BUS.count}</h1>
    </div>);
}

export default Test3;
