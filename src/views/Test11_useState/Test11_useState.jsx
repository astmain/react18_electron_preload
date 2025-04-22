import {Button} from "antd";
import {useState} from "react";


export default function Test11_useState() {
    let [count, count_set] = useState(1)
    let [data, data_set] = useState({name: "小许", age: 18})

    function fun1() {
        count_set(count + 1)
    }

    function fun2() {
        data_set({...data, name: "小明"})
    }

    return (<>
        <div>
            <Button type="primary" onClick={fun1}>fun</Button>
            <h1>{count}</h1>
        </div>

        <div>
            <Button type="primary" onClick={fun2}>fun2</Button>
            <h1>{JSON.stringify(data)}</h1>
            <h1>{data.name}---{data.age}</h1>

        </div>


    </>);
}

// export default Demo11_comment;
