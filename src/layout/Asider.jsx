import {Menu} from 'antd'
import {useNavigate} from 'react-router'
import {router_children} from '../router'


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
