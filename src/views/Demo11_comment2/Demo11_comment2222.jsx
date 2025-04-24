import {Button} from "antd";
import {useEffect, useRef, useState} from "react";
import {Flex, Input} from 'antd';
import classnames from 'classnames';
import "./css.css"
import dayjs from "dayjs";

const tabs = [{type: "hot", text: "最热"}, {type: "time", text: "最新"},]
const user = {uid: 0, username: "小许", avatar: "https://p26.douyinpic.com/aweme/1080x1080/tos-cn-v-2774c002/e969443ef8a74e49991e4aeb608724ce.jpeg",}
const list = [//
    {uid: 0, username: "小许", comment_id: 0, comment: "我是小许", like: 11, ctime: "2025-01-18 08:15", avatar: "https://p26.douyinpic.com/aweme/100x100/tos-cn-v-2774c002/e969443ef8a74e49991e4aeb608724ce.jpeg",}, //
    {uid: 1, username: "周杰伦", comment_id: 1, comment: "哎哟,不错哦", like: 99, ctime: "2025-01-18 08:15", avatar: "https://p3.douyinpic.com/aweme/100x100/tos-cn-v-2774c002/ac4e794886374074a42893ece5576561.jpeg",}, //
    {uid: 2, username: "林俊杰2", comment_id: 2, comment: "你好呀", like: 44, ctime: "2020-10-19 09:15", avatar: "https://p3.douyinpic.com/aweme/100x100/tos-cn-v-2774c002/2b1b81b0e01a494284f8aab6ade7d550.jpeg",},//
    {uid: 3, username: "林俊杰3", comment_id: 3, comment: "你好呀", like: 22, ctime: "2020-10-01 09:15", avatar: "https://p3.douyinpic.com/aweme/100x100/tos-cn-v-2774c002/2b1b81b0e01a494284f8aab6ade7d550.jpeg",},//
    {uid: 4, username: "林俊杰4", comment_id: 4, comment: "你好呀", like: 33, ctime: "2020-10-19 09:15", avatar: "https://p3.douyinpic.com/aweme/100x100/tos-cn-v-2774c002/2b1b81b0e01a494284f8aab6ade7d550.jpeg",},//
]
export default () => {
    console.log(`111---222:`, 333)
    let [list_comment, list_comment_set] = useState([])
    let [type, type_set] = useState("hot")
    let Input_ref = useRef(null)
    let [comment, comment_set] = useState("")
    let [form, form_set] = useState({
        uid: user.uid, //
        username: user.username, //

        comment: "",//
        like: 33,//

        avatar: user.avatar,//
        element: null,//
    })

    function form_submit2() {
        console.log(`form_submit2---form:`, form)
    }

    setTimeout(() => console.log(`form_submit---form222:`, form), 0)

    async function form_submit() {
        console.log(`111---comment:`, comment)
        let form_new = {
            ...form,
            comment_id: `ID=${new Date().getTime()}_${Math.floor(Math.random() * 999999)}`, //
            ctime: dayjs().format('YYYY-MM-DD HH:mm:ss'), //
            element: null,//
            comment: comment,//
        }
        form_set(form_new)
        list_comment_set([...list_comment, form_new])
        Input_ref.current.focus()
        comment_set("")
    }

    function tabs_click(type) {
        if (type === "time") {
            list_comment = [...list].sort((a, b) => b.ctime.localeCompare(a.ctime));
            console.log(`最新---list_comment:`, list_comment)
        }
        if (type === "hot") {
            list_comment = [...list].sort((a, b) => b.like - a.like);
            console.log(`最热---list_comment:`, list_comment)
        }
        list_comment_set(list_comment)
        type_set(type)
    }

    function 删除(uid) {
        list_comment = list_comment.filter(item => item.comment_id !== uid)
        list_comment_set(list_comment)
        console.log(`删除---list_comment:`, list_comment)
    }

    useEffect(() => {
        tabs_click("hot");
    }, []);


    return (<div style={{width: "100%", padding: "20px", display: "flex", "flexDirection": "column", gap: "18px"}}>
        {/*导航 tab*/}
        <nav style={{display: "flex", gap: "18px"}}>
            <div style={{display: "flex", "alignItems": "center", "justifyContent": "center", gap: "4px"}}>
                <span style={{fontWeight: "bold", fontSize: "18px"}}>评论</span>
                <span>{list.length}</span>
            </div>
            <div style={{display: "flex", "alignItems": "center", "justifyContent": "center", gap: "4px"}}>
                {tabs.map(item => <span key={item.type}
                    // className={`tab  ${item.type === type && 'active'}`}
                                        className={classnames("tab", {active: item.type === type})}
                                        onClick={() => tabs_click(item.type)}>
                          {item.text}
                    </span>)}

            </div>
        </nav>


        {/*发表评论*/}
        <nav style={{display: "flex", "alignItems": "center", "justifyContent": "space-between", gap: "8px"}}>
            <img className="avatar" src={user.avatar} alt=""/>
            {/*<Input defaultValue={form.comment} ref={ref_input} onChange={(e) => form_set({...form, comment: e.target.value})} placeholder="新的风暴已经出现，你的妙评何时再现" variant="filled"/>*/}
            {/*<Input value={comment}*/}
            {/*       ref={Input_ref}*/}
            {/*       onChange={async (e) => {*/}
            {/*           console.log(`Input---onChange:`, e.target.value)*/}
            {/*           await comment_set(e.target.value)*/}
            {/*       }}*/}
            {/*       placeholder="新的风暴已经出现，你的妙评何时再现" variant="filled"/>*/}

            <input type="text" style={{width: "100%", padding: "4px",}} ref={Input_ref} value={comment} onChange={(e) => comment_set(e.target.value)}/>

            <div className="btn" onClick={form_submit}>发表</div>
            <div className="btn" onClick={() => form_submit2()}>发表2</div>
            <div className="btn">{form.comment}</div>
        </nav>


        {/*评论项*/}
        <nav style={{"marginLeft": "44px", "marginRight": "60px",}}>
            {list_comment.map((item, index) => {
                return (<div key={index}>
                    <div style={{"display": "flex", "gap": "8px"}}>
                        <img className="avatar2" src={item.avatar} alt=""/>
                        <div>
                            <div style={{marginBottom: "8px", marginTop: "8px"}}>{item.username}</div>
                            <div style={{fontWeight: "bold", fontSize: "14px"}}>{item.comment}</div>
                            <div style={{"display": "flex", "gap": "16px", color: "gray", fontSize: "12px"}}>
                                <span>{item.ctime}</span>
                                <span>点赞数:{item.like}</span>
                                {user.uid === item.uid && <span onClick={() => 删除(user.uid)}>删除</span>}
                            </div>
                        </div>
                    </div>
                    <div className="hr"/>
                </div>)
            })}

        </nav>


    </div>);
}


