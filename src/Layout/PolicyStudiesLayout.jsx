import { Outlet } from "react-router-dom";
import PolicyStudiesNav from "../Journals/PolicyStudies/PolicyStudiesNav/PolicyStudiesNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import PolicyStudiesDetails from "../Journals/PolicyStudies/PolicyStudiesDetails/PolicyStudiesDetails";

const PolicyStudiesLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Administrative Sciences and Policy Studies"}></PageTitle>
            <PolicyStudiesDetails></PolicyStudiesDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <PolicyStudiesNav></PolicyStudiesNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default PolicyStudiesLayout;