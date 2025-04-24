import {Outlet} from 'react-router'
import BUS1 from "@src/BUS";
import {useSnapshot} from "valtio";


export default function Amain() {


    return <div className="Amain">
        <Outlet ></Outlet>
    </div>



}
