import { Outlet } from "react-router-dom";
import LinguisticsNav from "../Journals/Linguistics/LinguisticsNav/LinguisticsNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import LinguisticsDetails from "../Journals/Linguistics/LinguisticsDetails/LinguisticsDetails";


const LinguisticsLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Linguistics & Communication"}></PageTitle>
            <LinguisticsDetails></LinguisticsDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <LinguisticsNav></LinguisticsNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default LinguisticsLayout;