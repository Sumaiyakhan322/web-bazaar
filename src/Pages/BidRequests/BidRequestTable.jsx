import  { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading';

const BidRequestTable = () => {
    const { user } = useContext(AuthContext);
  
  
  
    const { isPending, error, data } = useQuery({
      queryKey: ["bidJobs"],
      queryFn:  async() =>{
     return  await fetch(`http://localhost:5000/usersBids?buyerEmail=${user?.email}`)
     .then(
      (res) => res.json(),)
     
      
    }
    });
  
    if (isPending) return <Loading></Loading>;
  
    if (error) return "An error has occurred: " + error.message;
    return (
        <div>
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Job-Title</th>
        <th>Email(who bid on projects)</th>
        <th>deadline</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {data.map(bid=>(
        <tr key={bid._id}>
        <td>{bid.jobTile}</td>
        <td>{bid.buyerEmail}</td>
        <td>{bid.deadline}</td>
        <td>{bid.price}</td>
        <td>{bid.status}</td>
        <td><button className='btn btn-secondary'>Accept</button></td>
        <td><button className='btn btn-secondary'>Reject</button></td>
      </tr>

      ))}
      {/* row 1 */}
      
     
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default BidRequestTable;