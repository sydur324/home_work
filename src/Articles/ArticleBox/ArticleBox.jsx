import ArticleModal from "../ArticleModal/ArticleModal";

const ArticleBox = ({ articles }) => {
    const { } = articles
    return (
        <div className="w-full">
            <div>
                <div className="flex items-center text-lg  space-x-1  font-medium text-center   py-1">
                    <p><span>volume:</span>{articles.volume},</p>
                    <p><span>issue:</span>{articles.issue},</p>
                    <p>{articles.month}</p>
                    <p>{articles.year}</p>
                </div>
                <div className="my-4">
                    <h2 className="font-medium text-[#072159]">{articles.title}</h2>
                    <p className="text-[#262626d2] py-1">{articles.author}</p>
                    <div className="flex space-x-2 py-1 items-center">
                        <p className="text-[#91000D]">{articles.journal}</p>
                        <p className="text-sm">{articles.serial}</p>
                    </div>
                    <div className="flex items-center space-x-12">

                        <div className="flex items-center space-x-2">
                            <p className="font-bold">DOI:</p>
                            <p className="text-[#09567c] hover:text-[#91000D] duration-200 cursor-pointer">{articles.doi}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <p className="font-bold">URL:</p>
                            <p className="text-[#09567c] hover:text-[#91000D] duration-200 cursor-pointer">{articles.doiURL}</p>
                        </div>

                    </div>

                    <div className="flex items-center space-x-8 my-4">
                        <div>
                            <button className="px-3 py-2 bg-[#91000D] text-[#fff] text-sm font-bold rounded"><ArticleModal articles={articles}></ArticleModal></button>
                        </div>
                        <div>
                            <a href={articles.pdf} target="_blank" className="px-3 py-2 bg-[#91000D] text-[#fff] text-sm font-bold rounded">PDF</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ArticleBox;