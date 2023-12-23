import { Outlet } from "react-router-dom";
import TourismNav from "../Journals/Tourism/TourismNav/TourismNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import TourismDetails from "../Journals/Tourism/TourismDetails/TourismDetails";


const TourismLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Tourism and Hospitality Management"}></PageTitle>
            <TourismDetails></TourismDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <TourismNav></TourismNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default TourismLayout;