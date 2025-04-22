import {Breadcrumb} from 'antd';
import {useLocation, useNavigate} from "react-router";
import {useMatches} from "react-router-dom";

export default function aHeader() {
    const matches = useMatches()
    const route = matches[matches.length - 1].handle
    return (<div>
        <Breadcrumb
            items={[{title: "Home",}, //
                {title: route.title,},//
            ]}
        >
        </Breadcrumb>
    </div>)

}