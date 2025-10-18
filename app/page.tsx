import { ArrowRight, BarChart3, Lightbulb, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Stefan Hoogers | AI, Data Analytics & Digital Strategy Expert</title>
        <meta
          name="description"
          content="Stefan Hoogers helps organizations use AI, data analytics, and digital strategies to drive growth, automate processes, and improve performance."
        />
        <link rel="canonical" href="https://hoogersdigital.nl" />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-subtle py-20 sm:py-32" aria-label="Hero section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Stefan Hoogers: Empowering Organizations with{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">data-driven AI solutions</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                12+ years turning data into actionable insights that drive strategy and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/experience">View Experience</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Current Work */}
        <section className="py-20 bg-background" aria-label="Current work">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Currently Working At</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Building an AI agents platform at Heyloha to transform customer experiences and automate business processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <img 
                      src="/Heyloha - logo - Google My Business.png" 
                      alt="Heyloha logo" 
                      className="h-12 w-12 rounded-lg object-contain"
                    />
                    Heyloha
                  </CardTitle>
                  <CardDescription>AI Agents Platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Building AI agents to automate customer service, lead generation, and communication.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://heyloha.ai" target="_blank" rel="noopener noreferrer">
                      Visit Heyloha <ArrowRight className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold">HD</div>
                    Hoogers Digital B.V.
                  </CardTitle>
                  <CardDescription>Digital Analytics & AI Consultant (Owner)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Helping A-brands use data, AI, and digital strategies for measurable business growth.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://hoogersdigital.nl" target="_blank" rel="noopener noreferrer">
                      Visit Website <ArrowRight className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-20 bg-muted/30" aria-label="Areas of expertise">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Areas of Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Combining AI, data analytics, and digital strategies to deliver actionable insights and measurable growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" aria-label="Digital Analytics Icon" />
                  </div>
                  <CardTitle>Digital Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Adobe Analytics, Google Analytics, Power BI, Azure Databricks, and SQL for actionable insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" aria-label="AI & Automation Icon" />
                  </div>
                  <CardTitle>AI & Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Building AI agents, automation tools, and smart workflows to improve business processes.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" aria-label="Experimentation & CRO Icon" />
                  </div>
                  <CardTitle>Experimentation & CRO</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A/B testing, multivariate testing, and conversion optimization to maximize results.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" aria-label="Product Management Icon" />
                  </div>
                  <CardTitle>Product Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Product strategy, roadmap planning, and leading cross-functional teams for successful delivery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white" aria-label="Call to action">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Ready to leverage AI, data analytics, and automation for measurable growth? Let&apos;s discuss your project.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;