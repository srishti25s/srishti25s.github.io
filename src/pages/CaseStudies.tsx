import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, TrendingUp } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Investor Portal: Eliminating 100% of Advisor Calls",
      description: "Designed and launched a self-service portal that revolutionized how 10,000+ users interact with their investment accounts.",
      impact: "100% reduction in advisor calls for portfolio updates",
      timeline: "6 months",
      tags: ["Product Strategy", "User Research", "Fintech", "Portal Design"],
      metrics: [
        { label: "Users Impacted", value: "10,000+" },
        { label: "Call Reduction", value: "100%" },
        { label: "User Satisfaction", value: "95%" }
      ],
      status: "Completed"
    },
    {
      title: "Cash Withdrawal Automation: 99.99% Process Improvement",
      description: "Automated collateralized investment account withdrawals, transforming a 24+ hour manual process into a sub-minute automated experience.",
      impact: "Processing time reduced from 24+ hours to under 1 minute",
      timeline: "4 months",
      tags: ["Process Automation", "Fintech", "System Integration", "AI"],
      metrics: [
        { label: "Time Reduction", value: "99.99%" },
        { label: "Hours Saved", value: "1,000+/year" },
        { label: "Error Reduction", value: "98%" }
      ],
      status: "Completed"
    },
    {
      title: "Investment Credit Line Workflow Optimization",
      description: "Redesigned workflows for High Net Worth and Ultra High Net Worth clients through extensive user research and stakeholder collaboration.",
      impact: "Streamlined processes for HNW/UHNW clients and advisors",
      timeline: "8 months",
      tags: ["User Research", "Workflow Design", "Wealth Management", "UX"],
      metrics: [
        { label: "User Interviews", value: "20+" },
        { label: "Stakeholder Groups", value: "3" },
        { label: "Process Efficiency", value: "75%" }
      ],
      status: "In Progress"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <section className="space-y-6 text-center">
            <h1 className="text-4xl font-light text-primary">Case Studies</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed insights into product initiatives that drove measurable business impact 
              and enhanced customer experiences in fintech.
            </p>
          </section>

          <div className="grid gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border border-border hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-medium text-primary">
                        {study.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {study.description}
                      </CardDescription>
                    </div>
                    <Badge 
                      variant={study.status === "Completed" ? "default" : "secondary"}
                      className="ml-4 flex-shrink-0"
                    >
                      {study.status}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <TrendingUp className="h-4 w-4" />
                        <span className="font-medium">Impact:</span>
                        <span>{study.impact}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span className="font-medium">Timeline:</span>
                        <span>{study.timeline}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center space-y-1">
                          <div className="font-medium text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Button variant="ghost" className="group p-0 h-auto">
                      <span className="text-sm text-primary">Read full case study</span>
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <section className="text-center space-y-6 pt-12 border-t border-border">
            <h2 className="text-2xl font-light text-primary">Interested in Learning More?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              I'd be happy to discuss these projects in detail and share insights 
              from my experience in fintech product management.
            </p>
            <Button variant="outline" className="group">
              <span>Get in touch</span>
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CaseStudies;