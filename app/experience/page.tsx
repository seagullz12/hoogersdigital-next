import { Building2, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import Head from "next/head";

const experiences = [
  {
    company: "Heyloha",
    role: "Making Customers Happy",
    period: "May 2025 - Present",
    location: "Amsterdam, Netherlands",
    description: "Currently focused on customer satisfaction and driving product excellence.",
    link: "https://heyloha.ai"
  },
  {
    company: "Hoogers Digital B.V.",
    role: "Digital Business Consultant (Owner)",
    period: "August 2016 - Present",
    location: "Amsterdam, Netherlands",
    description: "As a professional with more than 10 years of experience in Digital (Business) Analytics, Experimentation, and Product Management, I have had the pleasure of working with numerous national and international A-brands. My passion for data, product strategy, technology and consumer behavior has been the driving force behind my career.",
    link: "https://hoogersdigital.nl"
  },
  {
    company: "ABN AMRO Bank N.V.",
    role: "Freelance sr. Digital Data Analyst",
    period: "August 2023 - November 2024",
    location: "Amsterdam, Netherlands",
    description: "Retrieved, combined, and analyzed data from various sources within the bank to gain insights into customer behavior and identify opportunities to improve products and services. Developed PowerBI dashboards for stakeholder reporting."
  },
  {
    company: "bol.com",
    role: "Freelance sr. Product Analyst / Monetization Analyst",
    period: "September 2021 - December 2023",
    location: "Utrecht, Netherlands",
    description: "Focused on optimizing the balance between ecommerce and advertising revenue streams. Leveraged data analysis, visualization, and experimentation to deliver valuable insights and create business cases. Advised product teams on experimentation strategy and methodology."
  },
  {
    company: "ABN AMRO Bank N.V.",
    role: "Freelance sr. Digital Data Analyst",
    period: "October 2019 - September 2021",
    location: "Amsterdam, Netherlands",
    description: "Focused on driving acquisition and retention of insurance and payment package customers through comprehensive data analysis. Expertise in SQL and Python allowed deep data analysis to provide actionable insights."
  },
  {
    company: "Ring (Amazon)",
    role: "Freelance Digital Analytics & CRO Consultant",
    period: "July 2019 - September 2019",
    location: "Amsterdam, Netherlands",
    description: "Helped Ring expand rapidly in Europe by implementing Optimizely, setting up a structured A/B-testing program, and delivering insights on user behavior. Advised on tag management and web tracking best practices."
  },
  {
    company: "Adidas",
    role: "Freelance Experimentation Consultant / Data Analyst",
    period: "August 2018 - June 2019",
    location: "Amsterdam, Netherlands",
    description: "Drove optimization through data analysis and experimentation for Adidas Global. Analyzed A/B test results, advised on experiment methodology and tagging, and leveraged various data sources to identify optimization opportunities."
  },
  {
    company: "Office Depot Europe - Viking Direct",
    role: "Freelance sr. Digital Analytics Consultant",
    period: "April 2018 - September 2018",
    location: "Venlo, Netherlands",
    description: "Advised on technical side of digital analytics, improved web tracking and tagging. Resolved issues in web analytics implementation (IBM Coremetrics & Google Analytics) enabling more accurate data and data-driven decisions."
  },
  {
    company: "Argenta",
    role: "Freelance Senior Digital Analyst",
    period: "August 2017 - March 2018",
    location: "Breda, Netherlands",
    description: "Helped increase effectiveness and efficiency of online marketing efforts by creating personalization & marketing automation use cases. Implemented and integrated marketing & analytics tools (Relay42, Google Analytics, Usabilla)."
  },
  {
    company: "Centraal Beheer",
    role: "Freelance Digital Analytics Consultant",
    period: "December 2016 - May 2017",
    location: "Apeldoorn, Netherlands",
    description: "Contributed to reaching sales & customer service targets by providing insights in website performance & user behaviour. Responsible for digital analytics & reporting, web tracking and management of web analytics tools."
  },
  {
    company: "Kramp",
    role: "Digital Analyst | Conversion Specialist",
    period: "October 2014 - March 2016",
    location: "Varsseveld, Netherlands",
    description: "Responsible for Digital Analytics & Conversion Optimization at Europe's leading supplier of parts in the Agricultural, Industrial and Forest & Grasscare markets. Conducted A/B testing, customer journey analysis, and dashboarding."
  },
  {
    company: "iProspect Nederland",
    role: "Conversion Optimization Consultant",
    period: "June 2013 - August 2014",
    location: "Amsterdam, Netherlands",
    description: "Advised international A-brands from Retail, Travel, Finance and Non-profit domains on increasing KPIs using web analytics insights and behavioral science knowledge. Conducted customer research and validated hypotheses through A/B and multivariate tests."
  }
];

const Experience = () => {
  return (
      <>
      <Head>
        <title>Stefan Hoogers | Professional Experience</title>
        <meta
          name="description"
          content="Explore Stefan Hoogers’ professional experience in digital analytics, product management, and experimentation."
        />
        <link rel="canonical" href="https://yourdomain.com/experience" />
      </Head>
    <article className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Stefan Hoogers - Professional Experience</h1>
            <p className="text-xl text-muted-foreground">
              12+ years of driving digital transformation and data-driven growth
            </p>
          </header>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="shadow-card hover:shadow-elegant transition-all duration-300 ml-0 md:ml-16">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div className="flex items-start gap-3">
                          <div className="hidden md:block absolute -left-[2.9rem] top-6 h-6 w-6 rounded-full border-4 border-background bg-primary" />
                          <Building2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <CardTitle className="text-xl">
                              {exp.link ? (
                                <a 
                                  href={exp.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hover:text-primary transition-colors"
                                >
                                  {exp.company}
                                </a>
                              ) : (
                                exp.company
                              )}
                            </CardTitle>
                            <CardDescription className="text-base font-medium text-foreground mt-1">
                              {exp.role}
                            </CardDescription>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <span className="hidden sm:inline">•</span>
                        <span>{exp.location}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for Work Experience */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Stefan Hoogers",
          "hasOccupation": experiences.map(exp => ({
            "@type": "Occupation",
            "name": exp.role,
            "occupationLocation": {
              "@type": "Place",
              "address": exp.location
            },
            "estimatedSalary": {
              "@type": "MonetaryAmountDistribution",
              "name": "Competitive"
            }
          })),
          "workExample": experiences.map(exp => ({
            "@type": "CreativeWork",
            "name": `${exp.role} at ${exp.company}`,
            "description": exp.description,
            "datePublished": exp.period
          }))
        })}
      </script>
    </article>
    </>
  );
};

export default Experience;