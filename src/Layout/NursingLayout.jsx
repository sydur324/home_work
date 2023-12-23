import { Outlet } from "react-router-dom";
import NursingNav from "../Journals/Nursing/NursingNav/NursingNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import NursingDetails from "../Journals/Nursing/NursingDetails/NursingDetails";


const NursingLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Nursing"}></PageTitle>
           <NursingDetails></NursingDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
            <NursingNav></NursingNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default NursingLayout;