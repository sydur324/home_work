import { Outlet } from "react-router-dom";
import GeographyNav from "../Journals/Geography/GeographyNav/GeographyNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import GeographyDetails from "../Journals/Geography/GeographyDetails/GeographyDetails";




const GeographyLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Geography and Earth Sciences"}></PageTitle>
            <GeographyDetails></GeographyDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <GeographyNav></GeographyNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default GeographyLayout;