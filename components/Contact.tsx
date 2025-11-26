import { Mail, Github, Linkedin } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact" subtitle="Contact" title="Let's Connect">
      <div className="grid md:grid-cols-2 gap-10">

        {/* FORM CARD */}
        <form className="space-y-4 p-6 rounded-2xl shadow-lg border bg-white/60 backdrop-blur-md dark:bg-white/5 dark:border-white/10 dark:shadow-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 text-sm bg-white/70 dark:bg-black/20 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 text-sm bg-white/70 dark:bg-black/20 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 text-sm bg-white/70 dark:bg-black/20 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="bg-gradient-to-red from-blue-600 to-purple-600 text-white w-full py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* TEXT + SOCIALS */}
        <div className="text-sm space-y-4 text-slate-600 dark:text-slate-300">
          <p className="leading-relaxed">
            I'm available for freelance work, internships, research projects,
            and exciting collaborations.
          </p>

          <div>
            <p className="font-semibold flex items-center gap-2">
              <Mail size={16} /> Email
            </p>
            <a
              href="mailto:amitk200703@gmail.com"
              className="underline decoration-blue-500 decoration-2 hover:text-blue-600"
            >
              amitk200703@gmail.com
            </a>
          </div>

          <div className="mt-4">
            <p className="font-semibold mb-2">Socials</p>
            <div className="flex gap-6">

              <a
                href="https://github.com/amitk2003"
                className="flex items-center gap-2 hover:text-black dark:hover:text-white transition"
              >
                <Github size={18} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/amit-kumar-a5059624b/"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <Linkedin size={18} /> LinkedIn
              </a>

            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
