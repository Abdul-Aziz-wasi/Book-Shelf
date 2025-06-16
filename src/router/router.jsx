import {
  createBrowserRouter,
  
} from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import SignIn from "../pages/signIn/SignIn";
import BookShelf from "../pages/BookShelf/BookShelf";
import BookDetails from "../pages/BookDetails/BookDetails";
import AddBooks from "../pages/AddBooks/AddBooks";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyBooks from "../pages/MyBooks/MyBooks";
import MyProfile from "../pages/MyProfile/MyProfile";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/books/:id',
            loader:({params})=> fetch(`https://booknest-server-three.vercel.app/books/${params.id}`),
            Component:BookDetails

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
            loader:()=>fetch('https://booknest-server-three.vercel.app/books'),
            Component:BookShelf
        },
        {
            path:'/addBooks',
            element:<PrivateRoute>
                <AddBooks></AddBooks>
            </PrivateRoute>
        },
        {
            path:'/myBooks',
            element:<PrivateRoute>
                <MyBooks></MyBooks>
            </PrivateRoute>
        },
        {
            path:'/myProfile',
            element:<PrivateRoute>
                <MyProfile></MyProfile>
            </PrivateRoute>
        },
       
    ]
  },
]);

export default router;