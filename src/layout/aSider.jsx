import {Menu} from 'antd'
import {AppstoreOutlined, MailOutlined} from '@ant-design/icons'
import {useNavigate} from 'react-router'
import {Outlet, useLocation} from 'react-router'
import {router, router_children} from '../router'
import {useRoutes, useMatches} from "react-router-dom";


// import aaa from '../router'
// debugger

export default function aSider() {
    const navigate = useNavigate()
    const matches = useMatches();
    const currentRoute = matches[matches.length - 1];
    const {pathname} = useLocation()
    const aaa = useLocation()
    console.log(`111---aaa:`, aaa)
    const handleClick = (info) => {
        navigate(info.key)
        // const rout = useRoutes()
        // console.log(`111---rout:`, rout)
        // console.log('111---:', pathname)
        // console.log('aaa---:', aaa)
        // navigate(info.key)
        // console.log(`111---matches:`,     matches        )
        // console.log(`111---currentRoute:`,     currentRoute        )
    }

    // const items = router_children
    let items = router_children.map((item) => ({key: item.key, label: item.label}))


    // return <div>Menu</div>
    // return <Menu theme="dark" defaultSelectedKeys={['Home']} mode="inline" onClick={handleClick} style={{height: '100vh'}} items={items}></Menu>
    return <Menu theme="dark" defaultSelectedKeys={['Home']} mode="inline" onClick={handleClick} style={{height: '100vh'}} items={items}></Menu>
}
