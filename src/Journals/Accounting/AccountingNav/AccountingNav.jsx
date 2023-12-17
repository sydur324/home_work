import { Link } from "react-router-dom";

const AccountingNav = () => {
    const journalsNav = [
        { id: 1, name: "Ijatnet Home", to: "/Ijatnet" },
        { id: 2, name: "Current Issue", to: "/Ijatnet/current-ijat" },
        { id: 3, name: "Aims & Scope", to: "/Ijatnet/scope-ijat" },
        { id: 4, name: "Editorial Boad", to: "/Ijatnet/editorial-board" },
        { id: 6, name: "Submission", to: "/Ijatnet/subscription" },
        { id: 7, name: "Resources", to: "/Ijatnet/resources" },
        { id: 8, name: "Browse Journals", to: "" },
        { id: 9, name: "Journal Policies", to: "/Ijatnet/policies" },
        { id: 10, name: "Useful Links", to: "/Ijatnet/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/Ijatnet/latest_activities" },
        { id: 12, name: "Subscription", to: "/Ijatnet/subcription" },
        { id: 13, name: "Information", to: "/Ijatnet/information" },
        { id: 14, name: "Index", to: "/Ijatnet/index" },
        { id: 15, name: "Archive", to: "/Ijatnet/archive-ijat" },
    ]
    return (
        <div className="border lg:w-1/3">
            <div className="bg-[#072159] text-[#fff] text-center font-bold text-lg py-6">
                <h2>Journal Menu</h2>
            </div>
            {
                journalsNav.map(nav => <li className="list-none bg-[#0a215805] hover:bg-[#91000D] text-[#0a2158b6] duration-300 hover:text-[#fff] border-b cursor-pointer  px-8 " key={nav.id}>
                    <Link to={nav.to}>
                    <p className="py-3 font-medium ">{nav.name}</p>
                    </Link>
                </li>)
            }
        </div>
    );
};

export default AccountingNav;