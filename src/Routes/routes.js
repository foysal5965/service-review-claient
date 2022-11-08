import Login from "../components/contexts/loging/Login";
import Home from "../components/home/Home";
import Signup from "../components/register/Signup";
import Main from "../layouts/Main";

const { createBrowserRouter } = require("react-router-dom");

 const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
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
            }
        ]
    }
 ])
export default router;