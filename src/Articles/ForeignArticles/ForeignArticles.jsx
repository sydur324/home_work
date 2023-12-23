import useArticles from "../../Hooks/useArticles";
import ArticleBox from "../ArticleBox/ArticleBox";


const ForeignArticles = () => {
    const [articles] = useArticles()
    const agricultureArticles = articles.filter((article) => article.category === 'Foreign Policy')
    return (
        <div className="">
            <div>
                 {
                    agricultureArticles.map(articles => <ArticleBox key={articles._id} articles={articles}>

                    </ArticleBox>)
                 }
            </div>
        </div>
    );
};

export default ForeignArticles;