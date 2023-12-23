import ManagementArticles from "../../../Articles/ManagementArticles/ManagementArticles";


const ManagementIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <ManagementArticles></ManagementArticles>
            </div>
        </div>

    );
};

export default ManagementIssue;
