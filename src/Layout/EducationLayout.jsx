import { Outlet } from "react-router-dom";
import EducationNav from "../Journals/Education/EducationNav/EducationNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import EducationDetails from "../Journals/Education/EducationDetails/EducationDetails";

const EducationLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Education and Human Development"}></PageTitle>
            <EducationDetails></EducationDetails>
            <div className="flex px-20 my-8 gap-8">
                <ArticleRoutingTop>
                    <EducationNav></EducationNav>
                    <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default EducationLayout;