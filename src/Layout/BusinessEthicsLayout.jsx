import { Outlet } from "react-router-dom";
import BusinessEthicsNav from "../Journals/BusinessEthics/BusinessEthicsNav/BusinessEthicsNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import BusinessEthicsDetails from "../Journals/BusinessEthics/BusinessEthicsDetails/BusinessEthicsDetails";


const BusinessEthicsLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Business Law and Ethics"}></PageTitle>
            <BusinessEthicsDetails></BusinessEthicsDetails>
            <ArticleRoutingTop>
                <div className="flex px-20 my-8 gap-8">
                   <BusinessEthicsNav></BusinessEthicsNav>
                    <Outlet></Outlet>
                </div>
                </ArticleRoutingTop>
        </div>
    );
};

export default BusinessEthicsLayout;