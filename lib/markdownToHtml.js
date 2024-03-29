import html from 'remark-html';
import { remark } from 'remark';

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
