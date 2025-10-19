// app/blog/[slug]/MarkdownViewer.tsx
"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm"; // <-- add this

type MarkdownViewerProps = {
  content: string;
  className?: string;
};

export default function MarkdownViewer({ content, className }: MarkdownViewerProps) {
  return (
    <div className={className || "prose prose-lg max-w-none"}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}