import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Data & ETL",
    description:
      "Designing scalable ETL workflows and optimized data pipelines for fast and robust analysis.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing systems and strategies for speed, efficiency, and reliability.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working with teams to build scalable solutions across diverse technology domains.",
  },
  {
    icon: Lightbulb,
    title: "AI/ML Innovation",
    description:
      "Applying deep learning and AI models for signal processing, content generation, and intelligent systems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building intelligent systems for
              <span className="font-serif italic font-normal text-white">
                {" "}
                finance and AI.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Anubhav Jha, a Computer Science undergraduate specializing in
                AI & ML at VIT Bhopal with a GPA of 8.5/10. My core focus lies in quantitative development,
                applied machine learning, and scalable backend systems.
              </p>

              <p>
                I have experience working with AWS and ETL workflows for financial data at Alaka Research LLP,
                and researching deep learning techniques for biomedical signal and image processing at NIT Rourkela.
              </p>

              <p>
                Alongside this, I build full-stack and AI-powered applications
                using MERN, Python, and cloud platforms, focusing on
                performance, seamless user experience, and real-world impact.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Focused on leveraging data, algorithms, and systems design to
                build scalable solutions in financial markets and AI-driven
                applications."
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};