import GenderArticles from "../../../Articles/GenderArticles/GenderArticles";

const GenderIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <GenderArticles></GenderArticles>
            </div>
        </div>

    );
};

export default GenderIssue;
