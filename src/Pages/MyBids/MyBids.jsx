import { useContext,} from "react";
import NavBar from "../../Shared/NavBar";
import useDocumentTitle from "../../Title/useDocumentTitle";
import { AuthContext } from "../../Providers/AuthProvider";
import Loading from "../../Loading";
import { useQuery } from "@tanstack/react-query";

const MyBids = () => {
  useDocumentTitle("WebBazaar|MyBids");
  const { user } = useContext(AuthContext);
  
  
  
  const { isPending, error, data } = useQuery({
    queryKey: ["bidJobs"],
    queryFn:  async() =>{
   return  await fetch(`http://localhost:5000/usersBids?userEmail=${user?.email}`)
   .then(
    (res) => res.json(),)
   
    
  }
  });

  if (isPending) return <Loading></Loading>;

  if (error) return "An error has occurred: " + error.message;
 

  return (
    <div>
      <NavBar />
     
      <div className="overflow-x-auto">
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
      {data.map(bid=>(
        <tr key={bid._id}>
        <td>{bid.jobTile}</td>
        <td>{bid.buyerEmail}</td>
        <td>{bid.deadline}</td>
        <td>{bid.status}</td>
        <td><button className=''>Complete</button></td>
      </tr>

      ))}
      {/* row 1 */}
      
     
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyBids;
