import TourismArticles from "../../../Articles/TourismArticles/TourismArticles";


const TourismIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <TourismArticles></TourismArticles>
            </div>
        </div>

    );
};

export default TourismIssue;
