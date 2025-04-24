import {useState} from "react";

export default function hook_open() {
    const open = () => set_show(!show)       //回调函数
    const [show, set_show] = useState(false) //状态数据
    return {open, show}
}