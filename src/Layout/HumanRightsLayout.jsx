import { Outlet } from "react-router-dom";
import HumanRightsNav from "../Journals/HumanRights/HumanRightsNav/HumanRightsNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import HumanRightsDetails from "../Journals/HumanRights/HumanRightsDetails/HumanRightsDetails";

const HumanRightsLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Social Welfare and Human Rights"}></PageTitle>
            <HumanRightsDetails></HumanRightsDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <HumanRightsNav></HumanRightsNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default HumanRightsLayout;