import ArtHistoryArticle from "../../../Articles/ArtHistoryArticle/ArtHistoryArticle";

const ArtHistoryCurrentIssu = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <ArtHistoryArticle></ArtHistoryArticle>
            </div>
        </div>

    );
};

export default ArtHistoryCurrentIssu;
