import PublicPolicyArticles from "../../../Articles/PublicPolicyArticles/PublicPolicyArticles";

const PublicPolicyIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <PublicPolicyArticles></PublicPolicyArticles>
            </div>
        </div>

    );
};

export default PublicPolicyIssue;
