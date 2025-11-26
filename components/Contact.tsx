import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact" subtitle="Contact" title="Let's Connect">
      <div className="grid md:grid-cols-2 gap-8">
        <form className="space-y-4 bg-green border rounded-xl shadow-sm p-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2 text-sm"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-2 text-sm"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border rounded-lg px-4 py-2 text-sm"
          />

          <button
            type="submit"
            className="bg-black text-grey w-full py-2 rounded-full text-sm hover:bg-slate-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="text-sm space-y-3 text-slate-600">
          <p>I'm available for freelance, intern roles, and collaborations.</p>

          <p className="font-medium">Email:</p>
          <a href="mailto:example@gmail.com" className="underline">
            amitk200703@gmail.com
          </a>

          <p className="font-medium mt-4">Socials:</p>
          <div className="flex gap-4">
            <a href="https://github.com/amitk2003" className="underline">GitHub</a>
            <a href="https://www.linkedin.com/in/amit-kumar-a5059624b/" className="underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
