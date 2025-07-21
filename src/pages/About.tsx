import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Summary Section */}
          <section className="space-y-6">
            <h1 className="text-4xl font-light text-primary">About</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground">
                Results-driven Product Manager with 7+ years in fintech, specializing in scalable, 
                customer-centric financial products using AI and blockchain. Launched an Investor Portal 
                that eliminated 100% of advisor calls for 10,000+ users and automated cash withdrawal 
                processes by 99.99%, saving 1,000+ hours annually. Skilled in agile methodologies 
                (SAFe, Scrum), user research, and cross-functional collaboration to drive innovation at scale.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-light text-primary">Skills</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-medium text-primary">Product Management</h3>
                <p className="text-muted-foreground">
                  Vision, Roadmap Planning, Prioritization, Agile (SAFe, Scrum)
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-primary">Emerging Technologies</h3>
                <p className="text-muted-foreground">
                  Generative AI, Agentic AI, Blockchain
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-primary">Technical</h3>
                <p className="text-muted-foreground">
                  Python, SQL, Microservices, Docker
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-primary">Core Competencies</h3>
                <p className="text-muted-foreground">
                  User Research, Stakeholder Management, Cross-Functional Collaboration
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-light text-primary">Education</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-accent pl-6">
                <h3 className="font-medium text-primary">B.E. (Computer Science)</h3>
                <p className="text-muted-foreground">Rajiv Gandhi Proudyogiki Vishwavidyalaya</p>
                <p className="text-sm text-muted-foreground">2014 - 2018</p>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-light text-primary">Certifications & Recognitions</h2>
            <div className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Generative AI and Agentic AI with Business Applications</p>
                    <p className="text-sm text-muted-foreground">IIM Bangalore, June 2025</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Professional Scrum Product Owner I (PSPO I)</p>
                    <p className="text-sm text-muted-foreground">November 2021</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">SAFe Product Owner/Product Manager (POPM)</p>
                    <p className="text-sm text-muted-foreground">April 2023</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Pat on the Back Award</p>
                    <p className="text-sm text-muted-foreground">HSBC</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Leadership Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-light text-primary">Leadership</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-accent pl-6">
                <p className="text-foreground">
                  Co-lead, Community Pillar – Women in Engineering at BNY, facilitating mentorship, 
                  events, and professional development for 200+ members.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;