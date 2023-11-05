import { Link } from "react-router-dom";


const Card = ({job}) => {
    const {email,jobTile,deadline,category,maximum,minimum,des,img,_id}=job
   
  
    return (
        <div className="h-full">
            <div className="card bg-base-100 shadow-xl border border-black">
  <figure className="p-4  border border-pink-700 h-[200px] ">
    <img src={img} alt="Shoes" className="rounded-xl border border-green-600 h-full w-full" />
  </figure>
  <div className="card-body items-center text-center border-red-900 border flex flex-col ">
    <h2 className="card-title">{jobTile}</h2>
    <p className="text-center ">{des}</p>
    <p>{deadline}</p>
    <p>{maximum}$-{minimum}$</p>
    <div className="card-actions flex-grow">
      <Link to={`/jobs/${_id}`}><button className="btn btn-primary"> Bit </button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;