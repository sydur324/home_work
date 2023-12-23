import LinguisticsArticles from "../../../Articles/LinguisticsArticles/LinguisticsArticles";

const LinguisticsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <LinguisticsArticles></LinguisticsArticles>
            </div>
        </div>

    );
};

export default LinguisticsIssue;
