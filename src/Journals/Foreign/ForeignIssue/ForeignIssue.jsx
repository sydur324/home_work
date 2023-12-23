import ForeignArticles from "../../../Articles/ForeignArticles/ForeignArticles";

const ForeignIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <ForeignArticles></ForeignArticles>
            </div>
        </div>

    );
};

export default ForeignIssue;
