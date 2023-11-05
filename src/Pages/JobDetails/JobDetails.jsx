import {  useLoaderData } from "react-router-dom";
import NavBar from "../../Shared/NavBar";
import Footer from "../../Shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

import BidOnProject from "./BidOnProject";

const JobDetails = () => {
    
  const jobs = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    email,
    jobTile,
    deadline,
    
    maximum,
    minimum,
    des,
    img,
    _id,
  } = jobs;
  
  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-6xl mx-auto p-4 md:p-0">
        <div className="h-full">
          <div className="card bg-base-100 shadow-xl border border-black">
            <figure className="p-4  border border-pink-700  ">
              <img
                src={img}
                alt="Shoes"
                className="rounded-xl border border-green-600 h-full w-full"
              />
            </figure>
            <div className="card-body items-center text-center border-red-900 border flex flex-col ">
              <h2 className="card-title">{jobTile}</h2>
              <p className="text-center ">{des}</p>
              <p>{deadline}</p>
              <p>
                {maximum}$-{minimum}$
              </p>
              <div className="card-actions flex-grow"></div>
            </div>
          </div>
        </div>

        {/* form for biding  */}
        <h1 className="headings text-center my-10 text-3xl md:text-5xl">
          Please your bid
        </h1>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent  w-10/12 via-[#193e51] to-transparent opacity-25 dark:opacity-100 center" />

       <BidOnProject></BidOnProject>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default JobDetails;
