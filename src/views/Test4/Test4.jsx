import {Button} from "antd";


function Test4() {

    function fun1() {
        setInterval(() => {
            console.log("  BUS---:", BUS2);
            console.log("  BUS.count---:", BUS2.count);
            BUS2.count += 1;
        }, 1111);
    }

    return (<div>
        <div style={{width: '500px', height: "500px", border: "1px red solid"}}>
            <Button type="primary" onClick={fun1}>
                点击我444-1
            </Button>
        </div>


        <h1>{BUS2.count}</h1>
    </div>);
}

export default Test4;
