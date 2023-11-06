import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading";
import Footer from "../../Shared/Footer";
import NavBar from "../../Shared/NavBar";
import useDocumentTitle from "../../Title/useDocumentTitle";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyPostedJobs = () => {
    useDocumentTitle('WebBazaar|MyPostedJobs')
    const {user}=useContext(AuthContext)
    const userEmail=user?.email;

    const { isPending, error, data,refetch } = useQuery({
        queryKey: ["postedJobs"],
        queryFn:  async() =>{
       return  await fetch("http://localhost:5000/addJobs")
       .then(
        (res) => res.json(),)
       
        
      }
      });
    
      if (isPending) return <Loading></Loading>;
    
      if (error) return "An error has occurred: " + error.message;
     

      const getTheJobsOfTheUser=data.filter(user=>user.email===userEmail)
      console.log(getTheJobsOfTheUser);
  //delete the product

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure to delete the product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addJobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Product has been deleted.", "success");
            }
           refetch()
          });
      }
    });
  };
    return (
        <div>
            <NavBar></NavBar>
<div className="max-w-6xl mx-auto p-4 md:p-0">
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
{
            getTheJobsOfTheUser.map(job=>(
                <div key={job._id}>
                 <div className="h-full">
            <div className="card bg-base-100 shadow-xl border border-black">
  <figure className="p-4  border border-pink-700 h-[200px] ">
    <img src={job.img} alt="Shoes" className="rounded-xl border border-green-600 h-full w-full" />
  </figure>
  <div className="card-body items-center text-center border-red-900 border flex flex-col ">
    <h2 className="card-title">{job.jobTile}</h2>
    <p className="text-center ">{job.des}</p>
    <p>{job.deadline}</p>
    <p>{job.maximum}$-{job.minimum}$</p>
    <div className="card-actions flex-grow">
      <button className="btn btn-primary" onClick={()=>handleDelete(job._id)}>Delete</button>
      <Link to={`/update/${job._id}`}><button className="btn btn-primary" >Update</button></Link>
    </div>
  </div>
</div>
        </div>
                </div>
            ))
           }
</div>
</div>
         
            <Footer></Footer>
        </div>
    );
};

export default MyPostedJobs;