import Footer from "../../Shared/Footer";
import NavBar from "../../Shared/NavBar";
import Banner from "./Banner";
import TabJobs from "./TabJobs";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
           <div className="max-w-6xl mx-auto md:p-0 p-4 ">
           <TabJobs></TabJobs>
           </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;