import { articles } from "../../../data";

export default function handler(req: any, res: any) {
  const filtered = articles.filter((article) => article.id === req.query.id);
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({
      message: `Article with ${req.query.id} not found`,
    });
  }
}
