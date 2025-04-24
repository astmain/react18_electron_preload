import {Button} from "antd";
import {useEffect, useRef, useState} from "react";
import {Flex, Input} from 'antd';
import classnames from 'classnames';
import "./css.css"
import dayjs from "dayjs";
import axios from "axios";


const tabs = [{type: "hot", text: "最热"}, {type: "time", text: "最新"},]
export default () => {
    // 基础数据================================================
    let [list_comment, list_comment_set] = useState([])
    let [user, set_user] = useState({})
    let [type, type_set] = useState("hot")
    let [form, set_form] = useState({
        uid: user.uid, //
        username: user.username, //
        comment: "",//
        like: 0,//
        avatar: user.avatar,//
        element: null,//
    })

    // 方法=====================================
    async function form_submit() {
        if (!form.comment) return
        list_comment_set([...list_comment, form])
        set_form({...form, comment: "111"})
        console.log(`111---element:`, form.element)
        console.log(`111---element.focus:`, form.element.focus())
    }

    function tabs_click(type) {
        console.log(`tabs_click---type---list_comment:`, type, list_comment)
        if (type === "time") {
            list_comment = [...list_comment].sort((a, b) => b.ctime.localeCompare(a.ctime));
            console.log(`最新---list_comment:`, list_comment)
        }
        if (type === "hot") {
            list_comment = [...list_comment].sort((a, b) => b.like - a.like);
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
        mock()
        tabs_click("hot");

    }, []);


    async function mock() {
        // 请求评论列表
        var config = {method: 'get', url: 'http://127.0.0.1:9999/mock?data=comment_list.json', data: {aaa: 111}}
        var res = await axios(config)
        console.log('res.data---请求评论列表', res.data)
        list_comment_set(res.data)

        // 请求用户信息
        var config = {method: 'get', url: 'http://127.0.0.1:9999/mock?data=user.json', data: {aaa: 111}}
        var res = await axios(config)
        console.log('res.data---请求用户信息', res.data)
        let user = res.data
        set_user(user)
        // 初始化form
        set_form({uid: user.uid, username: user.username, comment: "", like: 0, avatar: user.avatar, element: null,})


    }


    return (<div className="container" style={{width: "100%", padding: "20px", display: "flex", "flexDirection": "column", gap: "18px"}}>

        <button onClick={() => mock(111)}>mock</button>
        <img src="http://127.0.0.1:9999/static/111.png" alt=""/>
        {/*导航 tab*/}
        <nav style={{display: "flex", gap: "18px"}}>
            <div style={{display: "flex", "alignItems": "center", "justifyContent": "center", gap: "4px"}}>
                <span style={{fontWeight: "bold", fontSize: "18px"}}>评论</span>
                <span>{list_comment.length}</span>
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
            <Input value={form.comment}
                   className="aaa"
                   onChange={(e) => set_form({...form, comment: e.target.value, element: e.currentTarget, ctime: dayjs().format('YYYY-MM-DD HH:mm:ss'), comment_id: `ID=${new Date().getTime()}_${Math.floor(Math.random() * 999999)}`})}
                   placeholder="新的风暴已经出现，你的妙评何时再现" variant="filled"/>
            <div className="btn" onClick={form_submit}>发表</div>
        </nav>


        {/*评论项*/}
        <nav style={{"marginLeft": "44px", "marginRight": "60px"}}>
            {list_comment && list_comment.map((item, index) => {
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


