import { Route } from "react-router-dom";
import { lazy } from "react";

const Routes=[
    {
    path:"",
    element: lazy(()=> import("../pages/HomeTemplate")),
    nested:[
        {
            path:"",
            element: lazy(()=> import("../pages/HomeTemplate/Homepage")),
        },
        {
            path: "danhsachkhoahoc",
            element: lazy(() => import("../pages/HomeTemplate/Homepage/ListCourse")),
        },
        {
            path: "login",
            element: lazy(() => import("../pages/HomeTemplate/Login")),
        },
        {
            path: "thongtintaikhoan",
            element: lazy(() => import("../pages/HomeTemplate/InfoUser")),
        },
        {
            path: "chitietkhoahoc/:id",
            element: lazy(() => import("../pages/HomeTemplate/DetailCourse")),
        },
    ],
    },
];

const renderRoutes=()=>{
    return Routes.map((route)=>{
        if(route.nested){
            return (
             <Route 
             key={route.path} 
             path={route.path} 
             element={<route.element/>}
             >
                {route.nested.map((item)=>{
                    let NewItem=item.element;
                    return(<Route key={item.path} path={item.path} element={<NewItem/>}/>
                    );
                })}
             </Route>
            );
        } else{
            return(
                <Route key={route.path} path={route.path} element={<route.element/>}/>
            )
        }
    })
}
export default renderRoutes;