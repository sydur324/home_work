import { Outlet } from "react-router-dom";
import MarketingNav from "../Journals/Marketing/MarketingNav/MarketingNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import MarketingDetails from "../Journals/Marketing/MarketingDetails/MarketingDetails";

const MarketingLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Marketing Management"}></PageTitle>
            <MarketingDetails></MarketingDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <MarketingNav></MarketingNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default MarketingLayout;