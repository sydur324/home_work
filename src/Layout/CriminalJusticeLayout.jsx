import { Outlet } from "react-router-dom";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import CriminalJusticeNav from "../Journals/CriminalJustice/CriminalJusticeNav/CriminalJusticeNav";
import CriminalJusticeDetails from "../Journals/CriminalJustice/CriminalJusticeDetails/CriminalJusticeDetails";

const CriminalJusticeLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Law and Criminal Justice"}></PageTitle>
            <CriminalJusticeDetails></CriminalJusticeDetails>
            <ArticleRoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <CriminalJusticeNav></CriminalJusticeNav>
                    <Outlet></Outlet>
                </div>
                </ArticleRoutingTop>
        </div>
    );
};

export default CriminalJusticeLayout;