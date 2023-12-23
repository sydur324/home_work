import { NavLink } from "react-router-dom";

const ArtHistoryNav = () => {
    const journalsNav = [
        { id: 1, name: "Home", to: "/ijaah" },
        { id: 2, name: "Current Issue", to: "/ijaah/current-ijaah" },
        { id: 3, name: "Aims & Scope", to: "/ijaah/scope-ijaah" },
        { id: 4, name: "Editorial Boad", to: "/ijaah/editorial-board" },
        { id: 6, name: "Submission", to: "/ijaah/subscription" },
        { id: 7, name: "Resources", to: "/ijaah/resources" },
        { id: 8, name: "Browse Journals", to: "/subjects" },
        { id: 9, name: "Journal Policies", to: "/ijaah/policies" },
        { id: 10, name: "Useful Links", to: "/ijaah/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/ijaah/latest_activities" },
        { id: 12, name: "Subscription", to: "/ijaah/subcription" },
        { id: 13, name: "Information", to: "/ijaah/information" },
        { id: 14, name: "Index", to: "/ijaah/index" },
        { id: 15, name: "Archive", to: "/ijaah/archive-ijaah" },
    ]
    return (
        <div className="border lg:w-1/3">
            <div className="bg-[#072159] border-b text-[#fff] text-center font-bold text-lg py-6">
                <h2 >Journal Menu</h2>
            </div>
            {
                journalsNav.map(nav => <li className="list-none bg-[#0a215805] hover:bg-[#0A2258] text-[#0a2158b6] duration-300 hover:text-[#fff] border-b cursor-pointer  px-8 " key={nav.id}>
                    <NavLink to={nav.to}>
                    <p className="py-3 font-medium ">{nav.name}</p>
                    </NavLink>
                </li>)
            }
        </div>
    );
};

export default ArtHistoryNav;