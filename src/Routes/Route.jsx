import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequests from "../Pages/BidRequests/BidRequests";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<Error></Error>,
      children:[{
        path:'/',
        element:<Home></Home>
      },{
        path:'/WebBazaar/AddJobs',
        element:<AddJobs></AddJobs>
      },{
        path:'/WebBazaar/myPostedJobs',
        element:<MyPostedJobs></MyPostedJobs>
      },{
        path:'/WebBazaar/myBids',
        element:<MyBids></MyBids>
      },{
        path:'/WebBazaar/bidRequests',
        element:<BidRequests></BidRequests>
      }
    
    ]
    },
  ]);

  export default router