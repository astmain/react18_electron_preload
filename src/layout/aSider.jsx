import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'
import { Outlet, useLocation } from 'react-router'

export default function aSider() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const aaa = useLocation()
  const handleClick = (info) => {
    console.log('111---:', pathname)
    console.log('aaa---:', aaa)
    navigate(info.key)
  }

  const items = [
    {
      key: 'Home',
      label: '首页',
      icon: <AppstoreOutlined />,
    },
    {
      key: 'About',
      label: '关于',
      icon: <AppstoreOutlined />,
    },
    {
      key: 'min_web',
      label: '迷你浏览器',
      icon: <AppstoreOutlined />,
    },
    {
      key: 'test1_img_cookie',
      label: 'test1_img_cookie',
      icon: <AppstoreOutlined />,
    },
    {
      key: 'test2_BUS',
      label: 'test2_BUS',
      icon: <AppstoreOutlined />,
    },
  ]

  // return <div>Menu</div>
  return <Menu theme="dark" defaultSelectedKeys={['test2_BUS']} mode="inline" onClick={handleClick} style={{ height: '100vh' }} items={items}></Menu>
}
