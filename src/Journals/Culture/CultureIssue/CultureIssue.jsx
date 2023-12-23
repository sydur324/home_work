import CultureArticles from "../../../Articles/CultureArticles/CultureArticles";

const CultureIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <CultureArticles></CultureArticles>
            </div>
        </div>

    );
};

export default CultureIssue;
