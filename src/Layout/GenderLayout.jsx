import { Outlet } from "react-router-dom";
import GenderNav from "../Journals/Gender/GenderNav/GenderNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import GenderDetails from "../Journals/Gender/GenderDetails/GenderDetails";



const GenderLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Gender & Women's Studies"}></PageTitle>
            <GenderDetails></GenderDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <GenderNav></GenderNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default GenderLayout;