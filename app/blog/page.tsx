"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: 5,
    title: "From data insights to AI action: The new era of customer analytics",
    excerpt: "How to close the gap between knowing what customers want and actually delivering it in real-time.",
    date: "2025-10-18",
    readTime: "8 min read",
    category: "AI & Analytics",
    featured: true,
    slug: "data-insights-to-ai-action"
  },
  {
    id: 6,
    title: "Why our team built Heyloha",
    excerpt: "The story behind creating an AI assistant that changes how real estate teams work.",
    date: "2025-10-20",
    readTime: "6 min read",
    category: "Product & Vision",
    featured: false,
    slug: "why-our-team-built-heyloha"
  }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  return (
    <article className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Stefan Hoogers - Blog & Insights</h1>
            <p className="text-xl text-muted-foreground">
              Insights on AI, digital analytics, experimentation, and product management
            </p>
          </header>

          {/* Featured Post */}
          {featuredPost && (
            <Card className="mb-12 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                <Badge variant="secondary" className="text-lg py-2 px-4">Featured Article</Badge>
              </div>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-3xl">{featuredPost.title}</CardTitle>
                <CardDescription className="text-base">{featuredPost.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <a href={`/blog/${featuredPost.slug}`}>
                  <Button>
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          )}

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 gap-6">
            {otherPosts.map(post => (
              <Card key={post.id} className="shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Badge>{post.category}</Badge>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm">
                      Read More <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Stefan Hoogers Blog",
          "description": "Insights on AI, digital analytics, experimentation, and product management",
          "author": {
            "@type": "Person",
            "name": "Stefan Hoogers",
            "url": "https://hoogersdigital.nl"
          },
          "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "author": { "@type": "Person", "name": "Stefan Hoogers" },
            "keywords": post.category + ", AI"
          }))
        })}
      </script>
    </article>
  );
};

export default Blog;