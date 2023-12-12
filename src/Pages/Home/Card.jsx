import { Link } from "react-router-dom";


const Card = ({job}) => {
    const {email,jobTile,deadline,category,maximum,minimum,des,img,_id}=job
   
  
    return (


<div className="card lg:card-side bg-gray-700 shadow-xl  h-full  ">
    <figure className=" md:w-5/12 w-full h-full">
      <img className=" h-[200px] md:h-full w-full opacity-70"
      src={img}
        alt="Product"
      />
    </figure>
    <div className="card-body text-lg md:w-1/2 space-y-2 w-full ">
      <h2 className=" text-2xl">Job-title:<span className="font-bold text-[#b8df46]">{jobTile}</span></h2>
      <p className="text-justify ">{des.slice(0,150)}</p>
    <p><span className="text-[#b8df46] font-semibold text-justify">Deadline:</span>{deadline}</p>
     <p><span className="text-[#b8df46] font-semibold text-justify">Price:</span>{maximum}$-{minimum}$</p>
    

     <div className="card-actions flex-grow mx-auto">
<Link to={`/jobs/${_id}`}><button className="className=' p-4 btn bg-[#b8df46] text-[#ffffff] hover:bg-[#6b8783] "> Bit Now </button></Link>
</div>
    </div>
  </div>
    );
};

export default Card;


