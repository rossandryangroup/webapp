import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const ROOT = path.join(process.cwd(), 'content', 'articles');

type Frontmatter = {
  hero?: string;
  heroAlt?: string;
  heroCredit?: string;
};

export type Article = {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
};

export function getArticle(slug: string): Article | null {
  const file = path.join(ROOT, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return { slug, frontmatter: data as Frontmatter, content };
}
