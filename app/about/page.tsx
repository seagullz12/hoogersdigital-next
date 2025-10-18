import { Award, BookOpen, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Stefan Hoogers | AI, Digital Analytics & Product Management</title>
        <meta
          name="description"
          content="Learn about Stefan Hoogers' expertise in AI, digital analytics, experimentation, and product management."
        />
        <link rel="canonical" href="https://hoogersdigital.nl/about" />
      </Head>
      <article className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl font-bold mb-4">About Stefan Hoogers</h1>
              <p className="text-xl text-muted-foreground">
                AI, digital analytics, experimentation, and product management
              </p>
            </header>

            {/* Main Bio */}
            <Card className="mb-12 shadow-card">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-6">
                  With over 12 years of experience in Digital Analytics, Experimentation, 
                  and Product Management, I have helped national and international A-brands 
                  including <strong>ABN AMRO</strong>, <strong>bol.com</strong>, <strong>Adidas</strong>, 
                  and <strong>Ring (Amazon)</strong> leverage data to optimize business outcomes.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Currently I am focused on building an AI agents platform at <strong>Heyloha</strong>, 
                  where we aim to improve customer experiences and automate business processes 
                  using AI technologies.
                </p>
                <p className="text-lg leading-relaxed">
                  I bring a unique perspective by merging technical expertise with deep insights 
                  into consumer behavior, ensuring AI and analytics projects deliver tangible results.
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              <div className="space-y-4">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Master of Science (MSc), Economic Psychology</CardTitle>
                    <p className="text-sm text-muted-foreground">Tilburg University • 2012 - 2013</p>
                  </CardHeader>
                </Card>
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Bachelor of Science (BSc), Psychology</CardTitle>
                    <p className="text-sm text-muted-foreground">Tilburg University • 2009 - 2012</p>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge  className="text-sm py-2 px-4 bg-gray-200 text-gray-800">Power BI - DA100</Badge>
                <Badge  className="text-sm py-2 px-4 bg-gray-200 text-gray-800">Product Management: Building a Product Strategy</Badge>
                <Badge  className="text-sm py-2 px-4 bg-gray-200 text-gray-800">Relay42 Certified User</Badge>
                <Badge  className="text-sm py-2 px-4 bg-gray-200 text-gray-800">Product Innovation for Product Managers</Badge>
                <Badge  className="text-sm py-2 px-4 bg-gray-200 text-gray-800">Agile Software Development: Scrum for Developers</Badge>
                <Badge  className="text-sm py-2 px-4 bg-gray-200 text-gray-800">AI & Machine Learning Foundations</Badge>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Key Skills</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">AI & Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>AI Strategy</Badge>
                      <Badge>Machine Learning</Badge>
                      <Badge>Azure Databricks</Badge>
                      <Badge>DBT</Badge>
                      <Badge>Power BI</Badge>
                      <Badge>SQL</Badge>
                      <Badge>Python</Badge>
                      <Badge>Adobe Analytics</Badge>
                      <Badge>Google Analytics</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Experimentation & Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge>A/B Testing</Badge>
                      <Badge>Multivariate Testing</Badge>
                      <Badge>CRO</Badge>
                      <Badge>Optimizely</Badge>
                      <Badge>Monetate</Badge>
                      <Badge>User Research</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Globe className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Languages</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Dutch</span>
                      <Badge>Native</Badge>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">English</span>
                      <Badge>Full Professional</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-card">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">German</span>
                      <Badge  className="">Elementary</Badge>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">French</span>
                      <Badge  className="">Elementary</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Structured Data for About Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Stefan Hoogers",
              "jobTitle": "AI, Digital Analytics & Product Management Expert",
              "knowsAbout": [
                "AI",
                "Machine Learning",
                "AI Strategy",
                "Azure Databricks",
                "DBT",
                "Power BI",
                "SQL",
                "Python",
                "Adobe Analytics",
                "Google Analytics",
                "A/B Testing",
                "Multivariate Testing",
                "Conversion Rate Optimization",
                "Optimizely",
                "Monetate",
                "User Research",
                "Product Management",
                "Experimentation"
              ],
              "knowsLanguage": [
                { "@type": "Language", "name": "Dutch", "alternateName": "Native" },
                { "@type": "Language", "name": "English", "alternateName": "Full Professional" },
                { "@type": "Language", "name": "German", "alternateName": "Elementary" },
                { "@type": "Language", "name": "French", "alternateName": "Elementary" }
              ]
            }
          })}
        </script>
      </article>
    </>
  );
};

export default About;
