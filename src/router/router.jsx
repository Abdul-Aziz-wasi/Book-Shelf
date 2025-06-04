import {
  createBrowserRouter,
  
} from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import SignIn from "../pages/signIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/signup',
            Component:Signup
        },
        {
            path:'/signin',
            Component:SignIn
        }
    ]
  },
]);

export default router;