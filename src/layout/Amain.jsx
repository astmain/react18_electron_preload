import {Outlet} from 'react-router'


export default function Amain() {


    return <div className="Amain"><Outlet/></div>
    // return   <div  className="1111111"> <Outlet style={{height: "calc(100vh -50px)",overflow: "auto"}}></Outlet></div>
    // return <div className="1111111" style={{height: "calc(100vh - 50px)", overflow: "auto"}}><Outlet></Outlet></div>
    // return<Outlet style={{height: "calc(100vh -50px)",overflow: "auto"}}></Outlet>


}
