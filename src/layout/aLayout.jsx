import Amain from './Amain'
import Aheader from './Aheader'
import Asider from './Asider'
import {Layout} from 'antd'
import "./css.css"

export default function aLayout() {
    return (
        <Layout>
            <Layout.Sider>
                <Asider></Asider>
            </Layout.Sider>
            <Layout>
                <Aheader ></Aheader>
                <Amain></Amain>
            </Layout>
        </Layout>
    )
}
