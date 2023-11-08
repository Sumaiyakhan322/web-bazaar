import { useContext, useEffect, useState,} from "react";
import NavBar from "../../Shared/NavBar";
import useDocumentTitle from "../../Title/useDocumentTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import Loading from "../../Loading";
import { useQuery } from "@tanstack/react-query";
import Footer from "../../Shared/Footer";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyBids = () => {
  useDocumentTitle("WebBazaar|MyBids");
  const { user } = useContext(AuthContext);
 
  
  const { isPending, error, data,refetch } = useQuery({
    queryKey: ["myBids"],
    queryFn:  async() =>{
   return  await fetch(`http://localhost:5000/usersBids`)
   .then(
    (res) => res.json(),)
   
    
  }
  });

  if (isPending) return <Loading></Loading>;



  if (error) return "An error has occurred: " + error.message;


  const bids=data.filter(bid=>bid.userEmail==user?.email)
  

const handleStatus=(_id)=>{
  
    const status='Complete';
    const disable='false' ;
    const newStatusDisable={status,disable}
    
    fetch(`http://localhost:5000/usersBids/${_id}`,{
      method:'PATCH',
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStatusDisable),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.modifiedCount>0){
              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'A Product is successfully added',
                  showConfirmButton: false,
                  timer: 1500
                })
          }
          refetch()
        });
}

  

  return (
    <div>
      <NavBar></NavBar>
     
 <div className="max-w-6xl mx-auto p-4 md:p-0">
 <div className="overflow-x-auto">
  <h1>{bids.length}</h1>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Job-Title</th>
        <th>Buyer Email</th>
        <th>deadline</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {bids.map(bid=>(
        <tr key={bid._id}>
        <td>{bid.jobTile}</td>
        <td>{bid.buyerEmail}</td>
        <td>{bid.deadline}</td>
        <td>{bid.status}</td>
        {/* <td><button className=''>Complete</button></td> */}
        {
         bid.status=='In progress'  ? <td><button className='' onClick={()=>handleStatus(bid._id)}>Complete</button></td> : <td></td>
        }
      </tr>

      ))}
      {/* row 1 */}
      
     
    </tbody>
  </table>
</div>
 </div>
 <Footer></Footer>
    </div>
  );
};

export default MyBids;
