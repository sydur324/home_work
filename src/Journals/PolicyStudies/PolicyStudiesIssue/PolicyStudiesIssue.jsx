import PolicyStudiesArticls from "../../../Articles/PolicyStudiesArticls/PolicyStudiesArticls";

const PolicyStudiesIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <PolicyStudiesArticls></PolicyStudiesArticls>
            </div>
        </div>

    );
};

export default PolicyStudiesIssue;
