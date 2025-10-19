// app/blog/[slug]/page.tsx
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import MarkdownViewer from "./MarkdownViewer";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type BlogFrontMatter = {
  title: string;
  date: string;
  category: string;
  readTime?: string;
  featured?: boolean;
};

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), "public/blog"));
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export default async function BlogPost(props: { params: { slug: string } }) {
  // await the params like this
  const { slug } = await props.params;

  const filePath = path.join(process.cwd(), "public/blog", `${slug}.md`);
  const file = await fs.readFile(filePath, "utf-8");
  const parsed = matter(file);
  const content = parsed.content;
  const data = parsed.data as BlogFrontMatter;

  return (
    <article className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-48 flex items-center justify-center">
          {data.featured && (
            <Badge variant="secondary" className="text-lg py-2 px-4">
              Featured Article
            </Badge>
          )}
        </div>

        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
            <Badge>{data.category}</Badge>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(data.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            {data.readTime && (
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {data.readTime}
              </span>
            )}
          </div>

         <MarkdownViewer content={content} />
        </div>
      </div>
    </article>
  );
}