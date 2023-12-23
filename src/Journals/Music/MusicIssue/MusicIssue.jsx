import MusicArticle from "../../../Articles/MusicArticle/MusicArticle";

const MusicIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <MusicArticle></MusicArticle>
            </div>
        </div>

    );
};

export default MusicIssue;
