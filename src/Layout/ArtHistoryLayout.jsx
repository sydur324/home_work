import { Outlet } from "react-router-dom";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import ArtHistoryNav from "../Journals/ArtHistory/ArtHistoryNav/ArtHistoryNav";
import ArtHistoryDetails from "../Journals/ArtHistory/ArtHistoryDetails/ArtHistoryDetails";


const ArtHistoryLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Art and Art History"}></PageTitle>
            <ArtHistoryDetails></ArtHistoryDetails>
                <div className="flex px-20 my-8 gap-8">
                <ArticleRoutingTop>
                    <ArtHistoryNav></ArtHistoryNav>
                    <Outlet></Outlet>
                    </ArticleRoutingTop>
                </div>
            
        </div>
    );
};

export default ArtHistoryLayout;