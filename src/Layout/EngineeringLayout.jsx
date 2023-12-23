import { Outlet } from "react-router-dom";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import JeaNav from "../Journals/Engineering/JeaNav/JeaNav";
import JeaDetails from "../Journals/Engineering/JeaDetails/JeaDetails";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";



const EngineeringLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Engineering and Architecture"}></PageTitle>
            <JeaDetails></JeaDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
                <JeaNav></JeaNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default EngineeringLayout;