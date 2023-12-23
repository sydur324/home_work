import { Outlet } from "react-router-dom";
import HistoryNav from "../Journals/History/HistoryNav/HistoryNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import HistoryDetails from "../Journals/History/HistoryDetails/HistoryDetails";


const HistoryLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Review of History and Political Science"}></PageTitle>
            <HistoryDetails></HistoryDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <HistoryNav></HistoryNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default HistoryLayout;