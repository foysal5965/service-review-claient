import Login from "../components/contexts/loging/Login";
import Home from "../components/home/Home";
import Signup from "../components/register/Signup";
import AllServices from "../components/services/AllServices";
import ServiceDetail from "../components/services/ServiceDetail";
import Main from "../layouts/Main";

const { createBrowserRouter } = require("react-router-dom");

 const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path:'/home',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<Signup></Signup>
            },
            {
                path:'/allServices',
                element:<AllServices></AllServices>,
                loader:()=>fetch('http://localhost:5000/allServices')
            },
            {
                path:'/allServices/:id',
                element:<ServiceDetail></ServiceDetail>,
                loader:({params})=>fetch(`http://localhost:5000/allServices/${params.id}`)
            }
        ]
    }
 ])
export default router;