import { Outlet } from "react-router-dom";
import MathematicsNav from "../Journals/Mathematics/MathematicsNav/MathematicsNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import MathematicsDetails from "../Journals/Mathematics/MathematicsDetails/MathematicsDetails";


const MathematicsLayout = () => {
    return (
        <div className="">
            <PageTitle title={"American Review of Mathematics and Statistics"}></PageTitle>
            <MathematicsDetails></MathematicsDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <MathematicsNav></MathematicsNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default MathematicsLayout;