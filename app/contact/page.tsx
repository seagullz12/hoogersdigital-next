import Link from "next/link";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Head from "next/head";

const Contact = () => {
  return (
      <>
      <Head>
        <title>Contact Stefan Hoogers | Digital Analytics & Product Management</title>
        <meta
          name="description"
          content="Get in touch with Stefan Hoogers to discuss digital analytics, product management, or collaboration opportunities."
        />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Head>
    <article className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Contact Stefan Hoogers</h1>
            <p className="text-xl text-muted-foreground">
              Let&apos;s discuss how we can work together to drive data-driven growth
            </p>
          </header>

          <div className="grid md:grid-cols-1 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:stefan@hoogersdigital.nl" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        stefan@hoogersdigital.nl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a 
                        href="tel:+31638068579" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +31 6 3806 8579
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Linkedin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/stefanhoogers" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/in/stefanhoogers
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Amsterdam, Noord-Holland, Netherlands</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-subtle">
                <CardHeader>
                  <CardTitle>Current Projects</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium mb-1">Heyloha</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Making customers happy through data-driven insights
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://heyloha.ai" target="_blank" rel="noopener noreferrer">
                        Visit Heyloha
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="pt-3 border-t">
                    <p className="font-medium mb-1">My Wine Cellar</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Wine management and collection tracking
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="https://my-wine-cellar.com" target="_blank" rel="noopener noreferrer">
                        Visit My Wine Cellar
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            {/* <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>

      {/* Structured Data for Contact Page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Person",
            "name": "Stefan Hoogers",
            "email": "stefan@hoogersdigital.nl",
            "telephone": "+31638068579",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Amsterdam",
              "addressRegion": "Noord-Holland",
              "addressCountry": "Netherlands"
            },
            "url": "https://hoogersdigital.nl",
            "sameAs": [
              "https://www.linkedin.com/in/stefanhoogers"
            ]
          }
        })}
      </script>
    </article>
    </>
  );
};

export default Contact;