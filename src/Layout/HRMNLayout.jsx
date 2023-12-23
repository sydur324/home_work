import { Outlet } from "react-router-dom";
import HRMNav from "../Journals/HRM/HRMNav/HRMNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import HRMNDetails from "../Journals/HRM/HRMNDetails/HRMNDetails";


const HRMNLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Human Resources Management and Labor Studies"}></PageTitle>
            <HRMNDetails></HRMNDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <HRMNav></HRMNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default HRMNLayout;