import { useContext} from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import "../../Styles/Disable.css";
import Swal from "sweetalert2";

const BidOnProject = () => {
  const jobs = useLoaderData();
  const navigate=useNavigate()
  
  const {
    email, deadline,maximum,minimum,
  } = jobs;
  const { user } = useContext(AuthContext);
  const userEmail=user?.email
  const newDate=new Date()
  const deadlineDate=new Date(deadline)

  const isButtonDisabled = (email===userEmail) || (newDate>deadlineDate) 
  const handleBid = (e) => {
    e.preventDefault();
    const userEmail=e.target.userEmail.value;
    const buyerEmail=e.target.buyerEmail.value;
    const deadline=e.target.deadline.value;
    const price=e.target.price.value;
    const addUserBid={userEmail,buyerEmail,deadline,price}
    fetch('http://localhost:5000/usersBids',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(addUserBid),
            })
              .then((res) => res.json())
              .then((data) => {
                
                if(data.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'A bid is successfully added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                
              });
              e.target.reset();
            navigate('/webBazaar/myBids')

    
  };

  return (
    <div>
      {/* form  */}
      <div>
        <form onSubmit={handleBid}>
          {/* email of the buyer */}

          <div className="relative h-12 w-full my-10 ">
            <label htmlFor="buyer-email" className="text-[#194a63] font-bold ">
              Buyer Email:
            </label>
            <input
              className="border border-[#c3bd2e] input input-bordered w-full"
              type="email"
              name="buyerEmail"
              readOnly
              id="buyer-email"
              value={email ? email :''}
            />
          </div>

          {/* Price */}
          <div className="relative h-12  w-full my-10 ">
            <label htmlFor="price" className="text-[#194a63] font-bold">
              Price 
            </label>
            <input
              className="border border-[rgb(195,189,46)] input input-bordered w-full"
              placeholder={`Biding Price with ${minimum}$-${maximum}$`}
              type="text"
              name="biding-price"
              required
              id="price"
            />
          </div>

          {/* Deadline */}

          <div className="relative h-12 w-full my-10">
            <label htmlFor="deadline" className="text-[#194a63] font-bold">
              Deadline:
            </label>
            <input
              className="border border-[#c3bd2e] input input-bordered w-full"
              placeholder="Deadline "
              type="date"
              name="deadline"
              required
              id="deadline"
            />
          </div>

          {/* User email */}
          <div className="relative h-12 w-full my-10">
            <label htmlFor="user-email" className="text-[#194a63] font-bold">
              User-email
            </label>
            <input
              className=" input-bordered border-[#c3bd2e] input  w-full"
              id="user-email"
              name="userEmail"
              value={userEmail ?userEmail :''}
              readOnly
            />
          </div>

          <input
            type="submit"
            value="Add Product"
            className={`block md:w-1/4 w-11/12 rounded text-[#fcf540] bg-gradient-to-r from-[#193e51] to-[#146666] px-7 pb-2.5 pt-3 text-sm font-medium uppercase mx-auto ${isButtonDisabled ? 'disabled' : ''}`}
            disabled={isButtonDisabled}/>
         
        </form>
      </div>
    </div>
  );
};

export default BidOnProject;
