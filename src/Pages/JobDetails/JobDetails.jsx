import { Link, useLoaderData } from "react-router-dom";
import NavBar from "../../Shared/NavBar";
import Footer from "../../Shared/Footer";

const JobDetails = () => {
  const jobs = useLoaderData();
  const {
    email,
    jobTile,
    deadline,
    category,
    maximum,
    minimum,
    des,
    img,
    _id,
  } = jobs;
  const handleBid=e=>{
    e.preventValue()
  }
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
        <h1 className='headings text-center my-10 text-3xl md:text-5xl'> Please your bid</h1>
     <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent  w-10/12 via-[#193e51] to-transparent opacity-25 dark:opacity-100 center" />

     {/* form  */}
     <div>
        <form onSubmit={handleBid}>
            {/* email and job title */}
          <div className="flex flex-col md:flex-row gap-10 my-10">
          <div className="relative h-12 w-full flex items-center justify-center gap-2">
          <label htmlFor="email" className='text-[#194a63] font-bold'>Email:</label><input
      className="border border-[#c3bd2e] input input-bordered w-full"
      type='email' name="email" readOnly  id='email' 
    />
   
   
  </div>
  <div className="relative h-12  w-full flex items-center justify-center gap-2">
  <label htmlFor="title" className='text-[#194a63] font-bold'>Title:</label>
    <input
      className="border border-[#c3bd2e] input input-bordered w-full"
      placeholder="Job-title " type="text" name="jobTile" required id='title'
    />
    
  </div>
          </div>
          {/* Img and type */}
          <div className="flex flex-col md:flex-row gap-10 my-10">
          <div className="relative h-12 w-full flex items-center justify-center gap-2">
          <label htmlFor="deadline" className='text-[#194a63] font-bold'>Deadline:</label> 
    <input 
      className="border border-[#c3bd2e] input input-bordered w-full"
      placeholder="Deadline " type="date" name="deadline" required id='deadline'
    />
   
  </div>
  <div className="relative h-12 w-full flex items-center justify-center gap-2">
  <label htmlFor="category" className='text-[#194a63] font-bold'>Category:</label> 
  <select className="select select-bordered border-[#c3bd2e] input  w-full" id='category' name='category' >
  <option>Web development</option>
  <option>Digital marketing</option>
  <option>Graphics design</option>
</select>
    
   
  </div>
          </div>
          {/* minimum and maximum */}
          <div className="flex flex-col md:flex-row gap-10 my-10">
          <div className="relative h-12 w-full flex items-center justify-center gap-2">
          <label htmlFor="min" className='text-[#194a63] font-bold'>Minimum($):</label>

    <input
      className="border border-[#c3bd2e] input input-bordered w-full"
      placeholder="Minimum-Price" type="number" name="minimum" required id='min'
    />
    
  </div>
  <div className="relative h-12 w-full flex items-center justify-center gap-2">
  <label htmlFor="max" className='text-[#194a63] font-bold'>Maximum($):</label>

    <input
      className="border border-[#c3bd2e] input input-bordered w-full"
      placeholder="Maximum-Price" type="number" name="maximum" required id='max'
    />
  
  </div>
          </div>
          <div className="relative h-12 w-full flex items-center justify-center gap-2">
  <label htmlFor="Img" className='text-[#194a63] font-bold'>Image:</label>

    <input
      className="border border-[#c3bd2e] input input-bordered w-full"
      placeholder="Image" type="url" name="img" required id='img'
    />
  
  </div>


          <div className="relative h-32 w-full  flex items-center justify-center gap-2">
          <label htmlFor="des" className='text-[#194a63] font-bold'>Description:</label>
          <textarea className="textarea border border-[#c3bd2e] w-full" placeholder="Description" name='des' id='des' required></textarea>
    
  </div>
         
     <input type="submit" value='Add Product' className="block md:w-1/4  w-11/12 rounded text-[#fcf540] bg-gradient-to-r from-[#193e51] to-[#146666]  px-7 pb-2.5 pt-3 text-sm font-medium uppercase  mx-auto" />  
          
        </form>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default JobDetails;
