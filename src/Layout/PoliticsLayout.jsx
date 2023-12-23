import { Outlet } from "react-router-dom";
import PoliticsNav from "../Journals/Politics/PoliticsNav/PoliticsNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import PoliticsDetails from "../Journals/Politics/PoliticsDetails/PoliticsDetails";

const PoliticsLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Power, Politics & Governance"}></PageTitle>
            <PoliticsDetails></PoliticsDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
            <PoliticsNav></PoliticsNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default PoliticsLayout;