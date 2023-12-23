import { Outlet } from "react-router-dom";
import PsychologyNav from "../Journals/Psychology/PsychologyNav/PsychologyNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import PsychologyDetails from "../Journals/Psychology/PsychologyDetails/PsychologyDetails";

const PsychologyLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Psychology & Behavioral Science"}></PageTitle>
            <PsychologyDetails></PsychologyDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <PsychologyNav></PsychologyNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default PsychologyLayout;