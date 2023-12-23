import HumanRightsArticles from "../../../Articles/HumanRightsArticles/HumanRightsArticles";


const HumanRightsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <HumanRightsArticles></HumanRightsArticles>
            </div>
        </div>

    );
};

export default HumanRightsIssue;
