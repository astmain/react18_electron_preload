import {useEffect, useState} from "react"
import {Flex, Input, Button} from 'antd'
import {SearchOutlined} from '@ant-design/icons';
import classnames from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import takeaway from "@/store/modules/takeaway"
import channel from "@/store/modules/channel";
import "./css.css"
import dayjs from "dayjs";


export default function Demo31_takeaway() {
    let dispatch = useDispatch()
    const takeaway222 = useSelector(state => state.takeaway)


    const [input, set_input] = useState()
    const [kind, set_kind] = useState([])

    let [check, set_check] = useState("一人套餐")
    let [kind_list, set_kind_list] = useState([])
    let [info_list, set_info_list] = useState([])

    function fun1() {
        console.log(`111---takeaway:`, takeaway)
        console.log(`222---takeaway222.foodsList:`, takeaway222.foodsList)
        console.log(`333---takeaway.set_foodsList():`, takeaway.set_foodsList())
        console.log(`444---takeaway.axios_list():`, takeaway.axios_list())
        dispatch(takeaway.axios_list())
        console.log(`555--- takeaway222.foodsList:`, takeaway222.foodsList)

    }


    function tabs_click(name) {
        // 名称1
        console.log(`tabs_click---name:`, name)
        set_check(name)
        // 分类2
        let kind2 = foodsList.find((item, index) => item.name === name)
        console.log(`kind2---kind2:`, kind2)
        console.log(`kind2.kind--- kind2.kind:`, kind2.kind)
        set_kind_list(kind2.kind)
        //详情3

    }

    function kind2_click(name) {
        console.log(`kind2_click---name:`, name)
        let kind2 = foodsList.find((item, index) => item.name === check)
        console.log(`kind2_click---kind2:`, kind2)
        console.log(`kind2_click--- kind2.kind:`, kind2.kind)
        let list = kind2.kind.find((item, index) => item.name === name)
        console.log(`kind2_click---list:`, list)
        console.log(`kind2_click---list.foods:`, list.foods)
        set_info_list(list.foods)

    }

    let state = useSelector(state => state)
    console.log(`111---state:`, state)
    let foodsList = state.takeaway.foodsList
    console.log(`111---foodsList:`, foodsList)
    useEffect(() => {
        dispatch(takeaway.axios_list())
        // setTimeout(()=>{
        //     tabs_click("一人套餐")
        //     kind2_click("正常")
        // },1000)

    }, [dispatch]);


    return <div>
        <button onClick={() => fun1()}>fun1</button>
        <ul>
            {takeaway222.foodsList.map((item, i) => {
                return <li key={i}>{item.name}</li>
            })}
        </ul>


        <div className="parent">
            {/*头部=================================*/}
            <nav className="nav_header">
                <Input className="find_input" value={input} placeholder="请输入商品名称" variant="filled"/>
                <Button className="find_btn" type="primary" icon={<SearchOutlined/>}/>
            </nav>
            {/*分类=================================*/}
            <div className="nav_kind">
                {/*<div>一人套餐</div>*/}
                {/*<div>二人套餐</div>*/}
                {foodsList.map((item, index) => {
                    return <div key={index} onClick={() => tabs_click(item.name)} className={classnames("tab", {active: item.name === check})}>{item.name}</div>
                })}


                {/*className={classnames("tab", {active: item.name === name})}*/}

            </div>
            {/*主体=================================*/}
            <nav className="nav_main">
                <div className="food_kind">
                    {kind_list.map((item, index) => {
                        return <div key={index} onClick={() => kind2_click(item.name)}>
                            {item.name}
                        </div>
                    })}
                </div>
                <div className="food_list">
                    {info_list.map((item, index) => {
                        return <div key={index}>
                            <div className="food_info">
                                <img className="food_img" src={item.img} alt=""/>
                                <div className="food_text">
                                    <div>{item.name}</div>
                                    <div>{item.num}-{item.ten}</div>
                                    <div className="food_price">
                                        <span>{item.price}</span>
                                        <div>+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </nav>
            {/*底部=================================*/}
            <nav className="nav_foot">
                <div className="nav_foot_info">
                    <img src="https://gitee.com/astmain/static/raw/master/takeaway/takeaway.webp" alt=""/>
                    <div className="nav_foot_price">
                        <div>￥100</div>
                        <div>配送费￥5</div>
                    </div>
                </div>
                <div className="nav_foot_pay">
                    去结算
                </div>
            </nav>
        </div>
    </div>
}
