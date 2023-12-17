import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../HomePage/Home/Home";
import Subjects from "../ListJournals/Subjects/Subjects";
import AccountingLayout from "../Layout/AccountingLayout";
import AccountingHome from "../Journals/Accounting/AccountingHome/AccountingHome";
import AccountingCurrentIssue from "../Journals/Accounting/AccountingCurrentIssue/AccountingCurrentIssue";
import AccountingScope from "../Journals/Accounting/AccountingScope/AccountingScope";
import AccountingBoard from "../Journals/Accounting/AccountingBoard/AccountingBoard";
import AccountingSubmision from "../Journals/Accounting/AccountingSubmision/AccountingSubmision";
import AccountingResouch from "../Journals/Accounting/AccountingResouch/AccountingResouch";
import AccountingPolice from "../Journals/Accounting/AccountingPolice/AccountingPolice";
import AccountingUsefullLinks from "../Journals/Accounting/AccountingUsefullLinks/AccountingUsefullLinks";
import AccountingActivities from "../Journals/Accounting/AccountingActivities/AccountingActivities";
import AccountingSubcription from "../Journals/Accounting/AccountingSubcription/AccountingSubcription";
import AccountingInfo from "../Journals/Accounting/AccountingInfo/AccountingInfo";
import AccountingIndex from "../Journals/Accounting/AccountingIndex/AccountingIndex";
import AccountingArcrive from "../Journals/Accounting/AccountingArcrive/AccountingArcrive";
import ResearchPage from "../ResearchPage/ResearchPage";
import AboutPage from "../assets/AboutPage/AboutPage";
import MemberShipPage from "../MemberShipPage/MemberShipPage";
import ContactPage from "../ContactPage/ContactPage";
import LogIn from "../LoginSystem/LogIn/LogIn";
import SignUp from "../LoginSystem/SignUp/SignUp";
import ResearchDetails from "../HomePage/HomeResearch/ResearchDetails/ResearchDetails";
import Privecy from "../PrivecyPage/Privecy/Privecy";
import Accessibility from "../PrivecyPage/Accessibility/Accessibility";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/subjects",
                element: <Subjects></Subjects>
            },
            {
                path: "/research",
                element: <ResearchPage></ResearchPage>
            },
            {
                path: "/research_details",
                element: <ResearchDetails></ResearchDetails>
            },
            {
                path: "/about",
                element: <AboutPage></AboutPage>
            },
            {
                path: "/membership",
                element:<MemberShipPage></MemberShipPage>
            },
            {
                path: "/contact",
                element:<ContactPage></ContactPage>
            },
            {
                path: "/privecy_policy",
                element:<Privecy></Privecy>
            },
            {
                path: "/accessibility",
                element:<Accessibility></Accessibility>
            },

            {
                path:"/Ijatnet",
                element:<AccountingLayout></AccountingLayout>,
                children:[
                    {
                        path:"/Ijatnet",
                        element:<AccountingHome></AccountingHome>
                    },
                    {
                        path:"/Ijatnet/current-ijat",
                        element:<AccountingCurrentIssue></AccountingCurrentIssue>
                    },
                    {
                        path:"/Ijatnet/scope-ijat",
                        element:<AccountingScope></AccountingScope>
                    },
                    {
                        path:"/Ijatnet/editorial-board",
                        element:<AccountingBoard></AccountingBoard>
                    },
                    {
                        path:"/Ijatnet/subscription",
                        element:<AccountingSubmision></AccountingSubmision>
                    },
                    {
                        path:"/Ijatnet/resources",
                        element:<AccountingResouch></AccountingResouch>
                    },
                    {
                        path:"/Ijatnet/policies",
                        element:<AccountingPolice></AccountingPolice>
                    },
                    {
                        path:"/Ijatnet/usefull_link",
                        element:<AccountingUsefullLinks></AccountingUsefullLinks>
                    },
                    {
                        path:"/Ijatnet/latest_activities",
                        element:<AccountingActivities></AccountingActivities>
                    },
                    {
                        path:"/Ijatnet/subcription",
                        element:<AccountingSubcription></AccountingSubcription>
                    },
                    {
                        path:"/Ijatnet/information",
                        element:<AccountingInfo></AccountingInfo>
                    },
                    {
                        path:"/Ijatnet/index",
                        element:<AccountingIndex></AccountingIndex>
                    },
                    {
                        path:"/Ijatnet/archive-ijat",
                        element:<AccountingArcrive></AccountingArcrive>
                    },
                ]
            },
           
            
        ],

    },

    {
        path:"/login",
        element:<LogIn></LogIn>
    },
    {
        path:"/signup",
        element:<SignUp></SignUp>
    }
]);