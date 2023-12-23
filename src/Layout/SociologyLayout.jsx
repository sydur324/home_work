import { Outlet } from "react-router-dom";
import SociologyNav from "../Journals/Sociology/SociologyNav/SociologyNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import SociologyDetails from "../Journals/Sociology/SociologyDetails/SociologyDetails";

const SociologyLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Sociology and Social Work"}></PageTitle>
            <SociologyDetails></SociologyDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <SociologyNav></SociologyNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default SociologyLayout;