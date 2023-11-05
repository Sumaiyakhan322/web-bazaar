import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import "../../Styles/Disable.css";

const BidOnProject = () => {
  const jobs = useLoaderData();
  
  const {
    email, deadline,_id,
  } = jobs;
  const { user } = useContext(AuthContext);
  const userEmail=user?.email


 
  
  const isButtonDisabled = email===userEmail
  const handleBid = (e) => {
    e.preventValue();
  };
  return (
    <div>
      {/* form  */}
      <div>
        <form onSubmit={handleBid}>
          {/* email of the buyer */}

          <div className="relative h-12 w-full my-10 ">
            <label htmlFor="email" className="text-[#194a63] font-bold ">
              Buyer Email:
            </label>
            <input
              className="border border-[#c3bd2e] input input-bordered w-full"
              type="email"
              name="buyer-email"
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
              className="border border-[#c3bd2e] input input-bordered w-full"
              placeholder="Bidding-value"
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
              name="user-email"
              value={userEmail ?userEmail :''}
              readOnly
            />
          </div>

          <button
            type="submit"
            value="Add Product"
            className={`block md:w-1/4 w-11/12 rounded text-[#fcf540] bg-gradient-to-r from-[#193e51] to-[#146666] px-7 pb-2.5 pt-3 text-sm font-medium uppercase mx-auto ${isButtonDisabled ? 'disabled' : ''}`}
            disabled={isButtonDisabled}>Add product</button>
         
        </form>
      </div>
    </div>
  );
};

export default BidOnProject;
