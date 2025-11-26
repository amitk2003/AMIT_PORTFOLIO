import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" subtitle="About Me" title="Who I Am">
      <p className="text-base leading-relaxed text-blue-400">
        I'm Amit Kumar — a developer focused on building intelligent, scalable, and meaningful 
        digital products. My work spans full-stack engineering, real-time systems, 
        and applied machine learning with practical use-cases in fintech, education, security, and automation.
      </p>

      <p className="mt-4 text-base leading-relaxed text-blue-400">
        I've contributed to <span className="font-medium">AI/ML research at DRDO</span>, strengthened backend 
        architectures during my time as an SDE intern at <span className="font-medium">Bluestock Fintech</span>, 
        developed feature-rich full-stack platforms at 
        <span className="font-medium"> Unified Mentor (Ed-Tech)</span>, and built real-world solutions including a 
        government school portal designed to enable access to free education for underserved communities.
      </p>

      <p className="mt-4 text-base leading-relaxed text-blue-400">
        I enjoy solving hard problems, translating ideas into working systems, and continuously learning 
        emerging technologies — whether it’s optimizing ML pipelines, designing scalable APIs, or building 
        smooth product experiences.
      </p>

      <p className="mt-4 text-base leading-relaxed text-blue-400">
        Outside of work, I like exploring research papers, improving my problem-solving skills, 
        and contributing to personal projects that make real world impact.
      </p>
    </SectionWrapper>
  );
}
