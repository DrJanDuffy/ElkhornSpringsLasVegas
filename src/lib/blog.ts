import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

export type BlogPost = BlogFrontmatter & {
  content: string;
};

const contentDir = path.join(process.cwd(), "content", "blog");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const full = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  const title = String(data.title ?? "");
  const description = String(data.description ?? "");
  const date = String(data.date ?? "");
  const slugFromFile = String(data.slug ?? slug);
  if (!title || !description || !date) return null;
  return {
    title,
    description,
    date,
    slug: slugFromFile,
    content,
  };
}

export function getAllPostsMeta(): BlogFrontmatter[] {
  return getPostSlugs()
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => p !== null)
    .map(({ title, description, date, slug }) => ({ title, description, date, slug }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
