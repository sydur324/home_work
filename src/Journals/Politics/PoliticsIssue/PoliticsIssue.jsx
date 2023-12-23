import PoliticsArticles from "../../../Articles/PoliticsArticles/PoliticsArticles";

const PoliticsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <PoliticsArticles></PoliticsArticles>
            </div>
        </div>

    );
};

export default PoliticsIssue;
