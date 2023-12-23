import { Outlet } from "react-router-dom";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import JaesNav from "../Journals/Agriculture/JaesNav/JaesNav";
import JaesDetails from "../Journals/Agriculture/JaesDetails/JaesDetails";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";



const AgricultureLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Agriculture and Environmental Sciences    "}></PageTitle>
            <JaesDetails></JaesDetails>
                <div className="flex px-20 my-8 gap-8">
                <ArticleRoutingTop>
                    <JaesNav></JaesNav>
                    <Outlet></Outlet>
                    </ArticleRoutingTop>
                </div>
            
        </div>
    );
};

export default AgricultureLayout;