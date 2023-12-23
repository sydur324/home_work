import { Outlet } from "react-router-dom";
import MedicineNav from "../Journals/Medicine/MedicineNav/MedicineNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import MedicineDetails from "../Journals/Medicine/MedicineDetails/MedicineDetails";

const MedicineLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Medicine and Pharmacy"}></PageTitle>
            <MedicineDetails></MedicineDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <MedicineNav></MedicineNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default MedicineLayout;