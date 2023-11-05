import Footer from "../../Shared/Footer";
import NavBar from "../../Shared/NavBar";
import useDocumentTitle from "../../Title/useDocumentTitle";


const MyPostedJobs = () => {
    useDocumentTitle('WebBazaar|MyPostedJobs')
    return (
        <div>
            <NavBar></NavBar>
            <Footer></Footer>
        </div>
    );
};

export default MyPostedJobs;