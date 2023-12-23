import { Outlet } from "react-router-dom";
import MusicNav from "../Journals/Music/MusicNav/MusicNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import MusicDetails from "../Journals/Music/MusicDetails/MusicDetails";


const MusicLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Music and Performing Arts"}></PageTitle>
           <MusicDetails></MusicDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <MusicNav></MusicNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default MusicLayout;