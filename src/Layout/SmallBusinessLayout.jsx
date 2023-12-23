import { Outlet } from "react-router-dom";
import SmallBusinessNav from "../Journals/SmallBusiness/SmallBusinessNav/SmallBusinessNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import SmallBusinessDetaisls from "../Journals/SmallBusiness/SmallBusinessDetaisls/SmallBusinessDetaisls";

const SmallBusinessLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Small Business and Entrepreneurship Development"}></PageTitle>
            <SmallBusinessDetaisls></SmallBusinessDetaisls>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <SmallBusinessNav></SmallBusinessNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default SmallBusinessLayout;