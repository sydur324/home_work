import MathematicsArticles from "../../../Articles/MathematicsArticles/MathematicsArticles";

const MathematicsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <MathematicsArticles></MathematicsArticles>
            </div>
        </div>

    );
};

export default MathematicsIssue;
