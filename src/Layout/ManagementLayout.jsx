import { Outlet } from "react-router-dom";
import ManagementNav from "../Journals/Management/ManagementNav/ManagementNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import ManagementDetails from "../Journals/Management/ManagementDetails/ManagementDetails";

const ManagementLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Management Policies and Practices"}></PageTitle>
            <ManagementDetails></ManagementDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <ManagementNav></ManagementNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default ManagementLayout;