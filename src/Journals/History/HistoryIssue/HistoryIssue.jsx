import HistoryArticles from "../../../Articles/HistoryArticles/HistoryArticles";


const HistoryIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <HistoryArticles></HistoryArticles>
            </div>
        </div>

    );
};

export default HistoryIssue;
