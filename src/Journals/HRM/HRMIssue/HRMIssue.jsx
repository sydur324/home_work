import HRMArticles from "../../../Articles/HRMArticles/HRMArticles";

const HRMIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <HRMArticles></HRMArticles>
            </div>
        </div>

    );
};

export default HRMIssue;
