//传递格式 {item: item, onDel: 删除, uid: user.uid}
export default function A_comment_item({config}) {
    let item = config.item
    return (<div>
        <div style={{"display": "flex", "gap": "8px"}}>
            <img className="avatar2" src={item.avatar} alt=""/>
            <div>
                <div style={{marginBottom: "8px", marginTop: "8px"}}>{item.username}</div>
                <div style={{fontWeight: "bold", fontSize: "14px"}}>{item.comment}</div>
                <div style={{"display": "flex", "gap": "16px", color: "gray", fontSize: "12px"}}>
                    <span>{item.ctime}</span>
                    <span>点赞数:{item.like}</span>
                    {config.uid === item.uid && <span onClick={() => config.onDel(item.comment_id)}>删除</span>}
                </div>
            </div>
        </div>
        <div className="hr"/>
    </div>)
}
