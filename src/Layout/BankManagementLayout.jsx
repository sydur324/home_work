import { Outlet } from "react-router-dom";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import BankManagementNav from "../Journals/BankManagement/BankManagementNav/BankManagementNav";
import BankManagementDetails from "../Journals/BankManagement/BankManagementDetails/BankManagementDetails";

const BankManagementLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Finance and Bank Management"}></PageTitle>
            <BankManagementDetails></BankManagementDetails>
            <div className="flex px-20 my-8 gap-8">
                <ArticleRoutingTop>
                    <BankManagementNav></BankManagementNav>
                    <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default BankManagementLayout;