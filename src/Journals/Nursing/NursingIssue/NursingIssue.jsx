import NursingArticles from "../../../Articles/NursingArticles/NursingArticles";

const NursingIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <NursingArticles></NursingArticles>
            </div>
        </div>

    );
};

export default NursingIssue;
