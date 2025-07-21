import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground mb-4">👋🏻 Hello! I'm</p>
          <h1 className="text-6xl md:text-7xl font-light tracking-tight text-primary">
            [Your Name]
          </h1>
        </div>
        
        <div className="space-y-2 text-xl md:text-2xl font-light leading-relaxed">
          <p>
            I believe <span className="highlight-blue">scalable fintech products</span> enable endless{" "}
            <span className="highlight-orange">possibilities</span> with
          </p>
          <p>
            <span className="highlight-green">customer-centric experiences</span> as a{" "}
            <span className="highlight-yellow">byproduct</span>.
          </p>
        </div>

        <div className="pt-8">
          <Button variant="ghost" asChild className="group">
            <Link to="/about" className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;