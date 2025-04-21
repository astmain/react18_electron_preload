import {Outlet} from 'react-router'
import BUS1 from "@src/BUS";
import {useSnapshot} from "valtio";


export default function aMain() {




    return <Outlet>
        {
            (
                ()=>{
                    globalThis.BUS2 = BUS1
                    useSnapshot(globalThis.BUS2)
                }
            )()
        }





    </Outlet>
}
