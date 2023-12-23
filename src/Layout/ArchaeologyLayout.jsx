import { Outlet } from "react-router-dom";
import ArchaeologyNav from "../Journals/Archaeology/ArchaeologyNav/ArchaeologyNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import ArchaeologyDetails from "../Journals/Archaeology/ArchaeologyDetails/ArchaeologyDetails";




const ArchaeologyLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Anthropology and Archaeology"}></PageTitle>
            <ArchaeologyDetails></ArchaeologyDetails>
                <div className="flex px-20 my-8 gap-8">
                <ArticleRoutingTop>
                    <ArchaeologyNav></ArchaeologyNav>
                    <Outlet></Outlet>
                    </ArticleRoutingTop>
                </div>
            
        </div>
    );
};

export default ArchaeologyLayout;