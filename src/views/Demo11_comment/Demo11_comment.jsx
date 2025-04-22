import {Button} from "antd";
import {useEffect, useState} from "react";
import {Flex, Input} from 'antd';
import "./css.css"

const list = [//
    {uid: 1, username: "周杰伦", rpid: 1, content: "哎哟,不错哦", like: 99, ctime: "2025-01-18 08:15", avatar: "https://p3.douyinpic.com/aweme/1080x1080/tos-cn-v-2774c002/ac4e794886374074a42893ece5576561.jpeg",}, //
    {uid: 2, username: "林俊杰2", rpid: 2, content: "你好呀", like: 44, ctime: "2020-10-19 09:15", avatar: "https://p3.douyinpic.com/aweme/1080x1080/tos-cn-v-2774c002/2b1b81b0e01a494284f8aab6ade7d550.jpeg",},//
    {uid: 3, username: "林俊杰3", rpid: 3, content: "你好呀", like: 22, ctime: "2020-10-01 09:15", avatar: "https://p3.douyinpic.com/aweme/1080x1080/tos-cn-v-2774c002/2b1b81b0e01a494284f8aab6ade7d550.jpeg",},//
    {uid: 4, username: "林俊杰4", rpid: 4, content: "你好呀", like: 33, ctime: "2020-10-19 09:15", avatar: "https://p3.douyinpic.com/aweme/1080x1080/tos-cn-v-2774c002/2b1b81b0e01a494284f8aab6ade7d550.jpeg",},//

]

const user = {uid: 3, avatar: "https://p26.douyinpic.com/aweme/1080x1080/tos-cn-v-2774c002/e969443ef8a74e49991e4aeb608724ce.jpeg", username: "小许",}

export default function Demo11_comment() {


    let [list_comment, list_comment_set] = useState([])

    // let list_comment=[]

    function 最新() {
        list_comment = [...list].sort((a, b) => a.ctime.localeCompare(b.ctime));
        console.log(`最新---list_comment:`, list_comment)
        list_comment_set(list_comment)
    }


    function 最热() {
        list_comment = [...list].sort((a, b) => b.like - a.like);
        console.log(`最热---222:`, list_comment)
        list_comment_set(list_comment)
    }

    useEffect(() => {
        最新();
    }, []);

    return (<div style={{width: "100%", padding: "20px", display: "flex", "flexDirection": "column", gap: "18px"}}>
        {/*导航 tab*/}

        <nav style={{display: "flex", gap: "18px"}}>
            <div style={{display: "flex", "alignItems": "center", "justifyContent": "center", gap: "4px"}}>
                <span style={{fontWeight: "bold", fontSize: "18px"}}>评论</span>
                <span>{list.length}</span>
            </div>
            <div style={{display: "flex", "alignItems": "center", "justifyContent": "center", gap: "4px"}}>
                <span onClick={最新}>最新</span>
                <span>|</span>
                <span onClick={最热}>最热</span>
            </div>
        </nav>


        {/*发表评论*/}

        <div style={{display: "flex", "alignItems": "center", "justifyContent": "space-between", gap: "8px"}}>
            <img className="avatar" src={user.avatar} alt=""/>
            <Input placeholder="Filled" variant="filled"/>
            <div className="btn" onClick={() => 1}>发表</div>
        </div>


        {/*评论项*/}
        <div style={{"marginLeft": "44px", "marginRight": "60px",}}>
            {list_comment.map((item, index) => {
                return (<div key={index}>
                    <div style={{"display": "flex", "gap": "8px"}}>
                        <img className="avatar2" src={item.avatar} alt=""/>
                        <div>
                            <div style={{marginBottom: "8px", marginTop: "8px"}}>{item.username}</div>
                            <div style={{fontWeight: "bold", fontSize: "14px"}}>{item.content}</div>
                            <div style={{"display": "flex", "gap": "16px", color: "gray", fontSize: "12px"}}>
                                <span>{item.ctime}</span>
                                <span>点赞数:{item.like}</span>
                                <span>删除</span>
                            </div>
                        </div>
                    </div>
                    <div className="hr"/>
                </div>)
            })}


        </div>


    </div>);
}

// export default Demo11_comment;
