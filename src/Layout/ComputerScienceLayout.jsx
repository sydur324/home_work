import { Outlet } from "react-router-dom";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import ComputerScienceNav from "../Journals/ComputerScience/ComputerScienceNav/ComputerScienceNav";
import ComputerScienceDetails from "../Journals/ComputerScience/ComputerScienceDetails/ComputerScienceDetails";

const ComputerScienceLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Computer Science and Information Technology"}></PageTitle>
            <ComputerScienceDetails></ComputerScienceDetails>
            <ArticleRoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <ComputerScienceNav></ComputerScienceNav>
                    <Outlet></Outlet>
                </div>
                </ArticleRoutingTop>
        </div>
    );
};

export default ComputerScienceLayout;