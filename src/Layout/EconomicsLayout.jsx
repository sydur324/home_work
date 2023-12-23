import { Outlet } from "react-router-dom";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import EconomicsNav from "../Journals/Economics/EconomicsNav/EconomicsNav";
import EconomicsDetails from "../Journals/Economics/EconomicsDetails/EconomicsDetails";


const EconomicsLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Economics and Development Studies"}></PageTitle>
            <EconomicsDetails></EconomicsDetails>
            <ArticleRoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <EconomicsNav></EconomicsNav>
                    <Outlet></Outlet>
                </div>
                </ArticleRoutingTop>
        </div>
    );
};

export default EconomicsLayout;