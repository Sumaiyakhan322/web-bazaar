import Footer from "../../Shared/Footer";
import NavBar from "../../Shared/NavBar";
import TabJobs from "./TabJobs";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
           <div className="max-w-6xl mx-auto md:p-0 p-4 ">
           <TabJobs></TabJobs>
           </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;