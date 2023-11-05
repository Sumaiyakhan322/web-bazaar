
import Footer from '../../Shared/Footer';
import NavBar from '../../Shared/NavBar';
import useDocumentTitle from '../../Title/useDocumentTitle'
import AddJobsForm from './AddJobsForm';

const AddJobs = () => {
    useDocumentTitle('WebBazaar|AddJobs')

    return (
        <div>
            <NavBar></NavBar>
            <AddJobsForm></AddJobsForm>
            <Footer></Footer>
        </div>
    );
};

export default AddJobs;