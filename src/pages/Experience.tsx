import Header from "@/components/Header";

const Experience = () => {
  const experiences = [
    {
      title: "Product Owner",
      company: "BNY",
      location: "Pune, India",
      duration: "April 2022 - Current",
      achievements: [
        "Automated the cash withdrawal for collateralized investment accounts, reducing processing time from over 24 hours to under 1 minute (99.99% improvement).",
        "Launched an Investor Portal reducing 100% of advisor calls for portfolio updates, enabling real-time user interaction with investment accounts, increasing customer engagement with the platform.",
        "Conducted 20+ user interviews with Middle and Front Office to improve Investment Credit Line workflows for High Net Worth(HNI) and Ultra High Net Worth(UHNI) clients as well as, Advisors from various Investment Broker Dealers(IBD), Registered Investment Advisors(RIA) and Independent Registered Advisor(IRA) to understand the user journey, pain points and manual efforts.",
        "Designed user journey maps and collaborated with UX, Compliance, and Engineering to define the product roadmap and MVP scope.",
        "Led agile delivery via SAFe ceremonies including PI planning, sprint planning, retrospectives, and demos; maintained product/sprint backlogs; proactively resolved dependencies with other product teams.",
        "Automated the process of updating demographic information in real time for Family Office in Wealth Management, which helped streamline the process for statements being sent to the correct address."
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "HSBC",
      location: "Pune, India",
      duration: "July 2018 - March 2022",
      achievements: [
        "Worked with stakeholders to understand the customer pain points and performed analysis and recommended possible solutions, developed the product.",
        "Improved global control room register search by 95.8%.",
        "Worked with stakeholders to define the requirements for bond token issuance on blockchain."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          <section className="space-y-6">
            <h1 className="text-4xl font-light text-primary">Experience</h1>
          </section>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="space-y-6">
                <div className="border-l-4 border-primary pl-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-medium text-primary">{exp.title}</h2>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="text-lg text-foreground font-medium">{exp.company}</h3>
                      <span className="text-sm text-muted-foreground">{exp.duration}</span>
                    </div>
                    <p className="text-muted-foreground italic">{exp.location}</p>
                  </div>
                </div>

                <div className="pl-8 space-y-4">
                  <ul className="space-y-4">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-4">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-foreground leading-relaxed">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Key Metrics Section */}
          <section className="space-y-6 pt-12 border-t border-border">
            <h2 className="text-2xl font-light text-primary">Key Impact Metrics</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-light text-primary">99.99%</div>
                <p className="text-sm text-muted-foreground">Processing time improvement</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-light text-primary">10,000+</div>
                <p className="text-sm text-muted-foreground">Users impacted</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-light text-primary">1,000+</div>
                <p className="text-sm text-muted-foreground">Hours saved annually</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Experience;