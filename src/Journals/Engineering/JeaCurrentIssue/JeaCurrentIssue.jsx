import JeaArticles from "../../../Articles/JeaArticles/JeaArticles";


const JeaCurrentIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <JeaArticles></JeaArticles>
            </div>
        </div>

    );
};

export default JeaCurrentIssue;