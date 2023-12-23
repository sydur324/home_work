import { Outlet } from "react-router-dom";
import PhysicsNav from "../Journals/Physics/PhysicsNav/PhysicsNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import PhysicsDetails from "../Journals/Physics/PhysicsDetails/PhysicsDetails";

const PhysicsLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Physics and Astronomy"}></PageTitle>
            <PhysicsDetails></PhysicsDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <PhysicsNav></PhysicsNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default PhysicsLayout;