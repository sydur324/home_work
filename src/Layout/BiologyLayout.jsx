import { Outlet } from "react-router-dom";
import BiologyNav from "../Journals/Biology/BiologyNav/BiologyNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import BiologyDetails from "../Journals/Biology/BiologyDetails/BiologyDetails";

const BiologyLayout = () => {
    return (
        <div className="">
            <PageTitle title={"American International Journal of Biology"}></PageTitle>
            <BiologyDetails></BiologyDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <BiologyNav></BiologyNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default BiologyLayout;