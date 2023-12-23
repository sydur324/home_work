import { Outlet } from "react-router-dom";
import SportsNav from "../Journals/Sports/SportsNav/SportsNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import SportsDetails from "../Journals/Sports/SportsDetails/SportsDetails";

const SportsLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Physical Education and Sports Management"}></PageTitle>
            <SportsDetails></SportsDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <SportsNav></SportsNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default SportsLayout;