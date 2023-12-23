import MarketingArticles from "../../../Articles/MarketingArticles/MarketingArticles";


const MarketingIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <MarketingArticles></MarketingArticles>
            </div>
        </div>

    );
};

export default MarketingIssue;
