import { Outlet } from "react-router-dom";
import AccountingNav from "../Journals/Accounting/AccountingNav/AccountingNav";
import AccountingDetails from "../Journals/Accounting/AccountingDetails/AccountingDetails";
import PageTitle from "../Utilities/PageTitle/PageTitle";


const AccountingLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Accounting and Taxation"}></PageTitle>
            <AccountingDetails></AccountingDetails>
                <div className="flex px-20 my-8 gap-8">
                    <AccountingNav></AccountingNav>
                    <Outlet></Outlet>
                </div>
            
        </div>
    );
};

export default AccountingLayout;