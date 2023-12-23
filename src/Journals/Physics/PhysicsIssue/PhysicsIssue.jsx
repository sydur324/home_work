import PhysicsArticles from "../../../Articles/PhysicsArticles/PhysicsArticles";

const PhysicsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <PhysicsArticles></PhysicsArticles>
            </div>
        </div>

    );
};

export default PhysicsIssue;
