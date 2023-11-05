import Footer from "../../Shared/Footer";
import NavBar from "../../Shared/NavBar";
import useDocumentTitle from "../../Title/useDocumentTitle";


const BidRequests = () => {
    useDocumentTitle('WebBazaar|BidRequests')
    return (
        <div>
            <NavBar></NavBar>
           Bid request 
           <Footer></Footer>
        </div>
    );
};

export default BidRequests;