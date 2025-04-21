import {Menu} from 'antd'
import {AppstoreOutlined, MailOutlined} from '@ant-design/icons'
import {useNavigate} from 'react-router'
import {Outlet, useLocation} from 'react-router'
import {router, router_children} from '../router'

// import aaa from '../router'
// debugger

export default function aSider() {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const aaa = useLocation()
    const handleClick = (info) => {
        console.log('111---:', pathname)
        console.log('aaa---:', aaa)
        navigate(info.key)
    }

    // const items = router_children
    let items = router_children.map((item) => ({key: item.key, label: item.label}))


    // return <div>Menu</div>
    return <Menu theme="dark" defaultSelectedKeys={['Test5']} mode="inline" onClick={handleClick} style={{height: '100vh'}} items={items}></Menu>
}
