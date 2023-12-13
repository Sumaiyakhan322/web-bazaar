import Swal from "sweetalert2";
import Footer from "../../Shared/Footer";
import NavBar from "../../Shared/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const DoText = () => {
    const {user}=useContext(AuthContext)
    const handleText=(e)=>{
        e.preventDefault();
        const ques1=e.target.ques1.value;
        const ques2=e.target.ques2.value;
        const ques3=e.target.ques3.value;
        const userEmail=user?.email
        const answer={ques1,ques2,ques3,userEmail};
        fetch('https://b8a11-server-side-sumaiyakhan322.vercel.app/toTest',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(answer),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
               
                if(data.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Answer is successfully added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                e.target.reset();
              });
        
    }
    return (
        <div className="max-w-6xl mx-auto p-4 md:p-0">
           <NavBar></NavBar>
           <form onSubmit={handleText} className="my-20">
         
         
           <div className="relative h-32 w-full  flex-col items-center justify-center gap-6 mt-10">
          <label htmlFor="des" className='text-[#e2e549] font-bold my-10'>What skills should a good Web Developer have?</label>
          <textarea className="textarea border border-[#c3bd2e] w-full my-10" placeholder="Description" name='ques1' id='des' required></textarea>
    
  </div>
  
  <div className="relative h-32 w-full  flex-col items-center justify-center gap-2 mt-10">
          <label htmlFor="des" className='text-[#e2e549] font-bold'>What is Type Coercion in JavaScript?</label>
          <textarea className="textarea border border-[#c3bd2e] w-full my-10" placeholder="Description" name='ques2' id='des' required></textarea>
    
  </div>
  
  <div className="relative h-32 w-full  flex-col items-center justify-center gap-2 mt-10">
          <label htmlFor="des" className='text-[#e2e549] font-bold'>Describe the different kinds of HTTP requests supported by RESTful Web services.</label>
          <textarea className="textarea border border-[#c3bd2e] w-full my-10" placeholder="Description" name='ques3' id='des' required></textarea>
    
  </div>
  <input type="submit" value='Give Answer' className="block md:w-1/4  w-11/12 rounded text-[#fcf540] bg-gradient-to-r from-black to-[#146666]  px-7 pb-2.5 pt-3 text-sm font-medium uppercase  mx-auto my-20" />  
        </form>
           <Footer></Footer>
        </div>
    );
};

export default DoText;