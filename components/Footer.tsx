import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Stefan Hoogers</h3>
            <p className="text-sm text-muted-foreground">
              Digital Analytics, Experimentation & Product Management
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Current Projects</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://heyloha.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Heyloha - AI Agents
                </a>
              </li>
              <li>
                <a 
                  href="https://my-wine-cellar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  My Wine Cellar
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:stefan@hoogersdigital.nl" className="hover:text-primary transition-colors">
                  stefan@hoogersdigital.nl
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+31638068579" className="hover:text-primary transition-colors">
                  +31 6 3806 8579
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Linkedin className="h-4 w-4" />
                <a 
                  href="https://www.linkedin.com/in/stefanhoogers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Stefan Hoogers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;