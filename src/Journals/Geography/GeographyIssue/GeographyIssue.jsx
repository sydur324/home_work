import GeographyArticles from "../../../Articles/GeographyArticles/GeographyArticles";



const GeographyIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <GeographyArticles></GeographyArticles>
            </div>
        </div>

    );
};

export default GeographyIssue;
