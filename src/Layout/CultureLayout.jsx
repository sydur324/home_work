import { Outlet } from "react-router-dom";
import CultureNav from "../Journals/Culture/CultureNav/CultureNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import CultureDetaisl from "../Journals/Culture/CultureDetaisl/CultureDetaisl";


const CultureLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Islamic Studies and Culture"}></PageTitle>
            <CultureDetaisl></CultureDetaisl>
            <div className="flex px-20 my-8 gap-8">
                <ArticleRoutingTop>
                    <CultureNav></CultureNav>
                    <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default CultureLayout;