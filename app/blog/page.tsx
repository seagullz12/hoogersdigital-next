import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import Head from "next/head";

// Blog posts placeholder
const blogPosts = [
  {
    id: 1,
    title: "From Psychology to AI and Analytics: How My Background Shapes My Approach",
    excerpt: "Understanding consumer behavior and leveraging AI to enhance analytics insights.",
    date: "2025-10-10",
    readTime: "4 min read",
    category: "Personal",
    featured: true
  },
  {
    id: 2,
    title: "How AI is Transforming Digital Analytics in 2025",
    excerpt: "Discover how AI tools and machine learning are changing the way we analyze and act on data.",
    date: "2025-06-18",
    readTime: "5 min read",
    category: "AI"
  },
  {
    id: 3,
    title: "Building a Data-Driven Culture: Lessons from Working with A-Brands",
    excerpt: "Key insights from using AI and analytics to transform international brands' approach to data.",
    date: "2025-01-08",
    readTime: "7 min read",
    category: "Strategy"
  },
  {
    id: 4,
    title: "A/B Testing Best Practices: What I've Learned in 12+ Years",
    excerpt: "Common pitfalls in experimentation and AI-driven optimization to achieve reliable results.",
    date: "2024-12-20",
    readTime: "6 min read",
    category: "Experimentation"
  }
];

const Blog = () => {
  return (
    <>
      <Head>
        <title>Stefan Hoogers Blog | AI, Digital Analytics & Product Management</title>
        <meta
          name="description"
          content="Insights on AI, digital analytics, experimentation, and product management by Stefan Hoogers."
        />
        <link rel="canonical" href="https://heyloha.ai/blog" />
      </Head>
      <article className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <header className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl font-bold mb-4">
                Stefan Hoogers - Blog & Insights
              </h1>
              <p className="text-xl text-muted-foreground">
                Insights on AI, digital analytics, experimentation, and product management
              </p>
            </header>

            {/* Featured Post */}
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="mb-12 shadow-elegant overflow-hidden">
                <div className="bg-gradient-hero h-48 flex items-center justify-center">
                  <Badge variant="secondary" className="text-lg py-2 px-4">Featured Article</Badge>
                </div>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}

                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-3xl">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button>
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <Card 
                  key={post.id} 
                  className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
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
                    {/* <Button variant="outline" size="sm"> */}
                    <Button variant="outline" size="sm">
                      Read More <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            {/* <Card className="mt-16 bg-gradient-subtle shadow-elegant">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Stay Updated</CardTitle>
                <CardDescription className="text-base">
                  Subscribe to get notified about new AI, analytics, and product management articles
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-3 justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary flex-1 max-w-md"
                />
                <Button>Subscribe</Button>
              </CardContent>
            </Card> */}
          </div>
        </div>

        {/* Structured Data for Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Stefan Hoogers Blog",
            "description": "Insights on AI, digital analytics, experimentation, and product management",
            "author": {
              "@type": "Person",
              "name": "Stefan Hoogers",
              "url": "https://heyloha.ai"
            },
            "blogPost": blogPosts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "datePublished": post.date,
              "author": {
                "@type": "Person",
                "name": "Stefan Hoogers"
              },
              "keywords": post.category + ", AI"
            }))
          })}
        </script>
      </article>
    </>
  );
};

export default Blog;
