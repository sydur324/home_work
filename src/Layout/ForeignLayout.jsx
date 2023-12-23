import { Outlet } from "react-router-dom";
import ForeignNav from "../Journals/Foreign/ForeignNav/ForeignNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import ForeignDetails from "../Journals/Foreign/ForeignDetails/ForeignDetails";


const ForeignLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of International Relations & Foreign Policy"}></PageTitle>
            <ForeignDetails></ForeignDetails>
            <div className="flex px-20 my-8 gap-8">
                <ArticleRoutingTop>
                    <ForeignNav></ForeignNav>
                    <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default ForeignLayout;