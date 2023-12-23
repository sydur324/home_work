import { Outlet } from "react-router-dom";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import BiochemistryNav from "../Journals/Biochemistry/BiochemistryNav/BiochemistryNav";
import BiochemistryDetails from "../Journals/Biochemistry/BiochemistryDetails/BiochemistryDetails";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";

const BiochemistryLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Chemistry and Biochemistry"}></PageTitle>
            <BiochemistryDetails></BiochemistryDetails>
            <ArticleRoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <BiochemistryNav></BiochemistryNav>
                    <Outlet></Outlet>
                </div>
                </ArticleRoutingTop>
        </div>
    );
};

export default BiochemistryLayout;