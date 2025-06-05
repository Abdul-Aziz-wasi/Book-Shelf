import {
  createBrowserRouter,
  
} from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import SignIn from "../pages/signIn/SignIn";
import BookShelf from "../pages/BookShelf/BookShelf";

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
        },
        {
            path:'/bookShelf',
            loader:()=>fetch('http://localhost:3000/books'),
            Component:BookShelf
        }
    ]
  },
]);

export default router;