import { NavLink } from "react-router-dom";

const CenterNav = () => {
    const journalsNav = [
        { id: 1, name: "Submission", to: "/information/submission" },
        { id: 2, name: "Resources", to: "/information/resources" },
        { id: 4, name: "Journal Policies", to: "/information/policies" },
        { id: 5, name: "Useful Links", to: "/information/usefull_link" },
        { id: 6, name: "Latest Activities", to: "/information/latest_activities" },
        { id: 7, name: "Subscription", to: "/information/subcription" },
        { id: 8, name: "Information", to: "/information/information" },
        { id: 9, name: "Index", to: "/information/index" },
        { id: 3, name: "Browse Journals", to: "/subjects" },
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

export default CenterNav;