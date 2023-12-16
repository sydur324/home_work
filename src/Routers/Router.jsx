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
                ]
            },
           
            
        ],

    },
]);