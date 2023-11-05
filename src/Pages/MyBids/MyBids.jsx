import Footer from "../../Shared/Footer";
import NavBar from "../../Shared/NavBar";
import useDocumentTitle from "../../Title/useDocumentTitle";

const MyBids = () => {
    useDocumentTitle('WebBazaar|MyBids')
    return (
        <div>
            <NavBar></NavBar>
            my bids
            <Footer></Footer>
        </div>
    );
};

export default MyBids;