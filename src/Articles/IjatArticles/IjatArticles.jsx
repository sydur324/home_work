import useArticles from "../../Hooks/useArticles";
import ArticleBox from "../ArticleBox/ArticleBox";

const IjatArticles = () => {
    const [articles] = useArticles()
    const accountingArticles = articles.filter((article) => article.category === 'Accounting')
    console.log(accountingArticles)
    return (
        <div className="">
            <div>
                 {
                    accountingArticles.map(articles => <ArticleBox key={articles._id} articles={articles}>

                    </ArticleBox>)
                 }
            </div>
        </div>
    );
};

export default IjatArticles;