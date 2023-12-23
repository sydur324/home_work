import { Outlet } from "react-router-dom";
import PublicPolicyNav from "../Journals/PublicPolicy/PublicPolicyNav/PublicPolicyNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import PublicPolicyDetails from "../Journals/PublicPolicy/PublicPolicyDetails/PublicPolicyDetails";

const PublicPolicyLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Public Policy and Administration Review"}></PageTitle>
            <PublicPolicyDetails></PublicPolicyDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <PublicPolicyNav></PublicPolicyNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default PublicPolicyLayout;