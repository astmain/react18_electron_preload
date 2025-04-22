import {Button} from "antd";
import {useAtom} from 'jotai';
import Bjotai from "@src/Bjotai";


function Test5_bjotai() {

    let [count, setCount] = useAtom(Bjotai);


    function fun1() {
        console.log(`count---`, count)
        setInterval(() => {
            count += 1;
            console.log(`count---`, count)
            setCount(count)
        }, 1111);
    }

    return (<div>
        <div style={{width: '500px', height: "500px", border: "1px red solid"}}>
            <Button type="primary" onClick={fun1}>
                Test5Bjotai-222
            </Button>
        </div>
        <h1>{count}</h1>
    </div>);
}

export default Test5_bjotai;
