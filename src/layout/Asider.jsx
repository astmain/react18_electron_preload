import {Menu} from 'antd'
import {AppstoreOutlined, MailOutlined} from '@ant-design/icons'
import {useNavigate} from 'react-router'
import {Outlet, useLocation} from 'react-router'
import {router, router_children} from '../router'
import {useRoutes, useMatches} from "react-router-dom";


export default function Asider() {
    const navigate = useNavigate()
    const handleClick = (info) => {
        navigate(info.key)
    }
    let items = router_children.map((item) => ({key: item.key, label: item.label}))
    return <div className="Asider">
        <Menu theme="dark" defaultSelectedKeys={['Home']} mode="inline" onClick={handleClick} style={{height: '100vh'}} items={items}></Menu>

    </div>

}
