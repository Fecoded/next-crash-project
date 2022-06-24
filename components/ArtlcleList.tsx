import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

export const ArticleList = ({ articles }: any) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article: any) => (
        <Link
          key={article.id}
          href="/article/[id]"
          as={`/article/${article.id}`}
        >
          <a className={articleStyles.card}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};
