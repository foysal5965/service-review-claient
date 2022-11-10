
import AddServices from "../components/AddServices/AddServices";
import Blog from "../components/BLOGS/Blog";
import Login from "../components/contexts/loging/Login";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/home/Home";
import MyReview from "../components/MyReviews/MyReview";
import Signup from "../components/register/Signup";
import Review from "../components/review/Review";
import AllServices from "../components/services/AllServices";
import ServiceDetail from "../components/services/ServiceDetail";
import Main from "../layouts/Main";
import PrivetRoute from "./PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");

 const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://assignment-server-ochre.vercel.app/services')
            },
            {
                path:'/home',
                element:<Home></Home>,
                loader:()=>fetch('https://assignment-server-ochre.vercel.app/services')
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
                loader:()=>fetch('https://assignment-server-ochre.vercel.app/allServices')
            },
            {
                path:'/allServices/:id',
                element:<ServiceDetail></ServiceDetail>,
                loader:({params})=>fetch(`https://assignment-server-ochre.vercel.app/allServices/${params.id}`)
            },
            {
                path:'/myreviews',
                element:<PrivetRoute><MyReview></MyReview></PrivetRoute>
            },
            {
                path:'/review/:id',
                element:<Review></Review>,
                loader:({params})=>fetch(`https://assignment-server-ochre.vercel.app/review/${params.id}`)
            },
            {
                path:'/addServices',
                element:<PrivetRoute><AddServices></AddServices></PrivetRoute>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            }
          
        ]
    }
 ])
export default router;