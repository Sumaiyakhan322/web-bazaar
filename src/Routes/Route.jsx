import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequests from "../Pages/BidRequests/BidRequests";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import JobDetails from "../Pages/JobDetails/JobDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<Error></Error>,
      children:[{
        path:'/',
        element:<Home></Home>
      },{
        path:'/webBazaar/addJobs',
        element:<AddJobs></AddJobs>
      },{
        path:'/webBazaar/myPostedJobs',
        element:<MyPostedJobs></MyPostedJobs>
      },{
        path:'/webBazaar/myBids',
        element:<MyBids></MyBids>
      },{
        path:'/webBazaar/bidRequests',
        element:<BidRequests></BidRequests>
      },{
        path:'/login',
        element:<Login></Login>
      },{
        path:'/register',
        element:<Register></Register>
      },{
        path:'/jobs/:id',
        element:<JobDetails></JobDetails>,
        loader:({params})=>fetch(`http://localhost:5000/addJobs/${params.id}`)
      }
    
    ]
    },
  ]);

  export default router