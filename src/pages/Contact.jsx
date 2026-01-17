import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative py-24 bg-aboutSection text-gray-300">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's Work Together<br />
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ===== Contact Form ===== */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#020617] p-8 rounded-xl shadow-lg flex flex-col gap-6"
          >
            <input
              type="text"
              placeholder="Name"
              className="bg-[#0b0f1a] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-[#0b0f1a] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              defaultValue="siddhantgupta0304@gmail.com"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="bg-[#0b0f1a] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500 text-black font-semibold py-3 rounded-lg hover:bg-cyan-400 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* ===== Contact Info ===== */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Contact Information</h3>
              <p className="text-gray-400 mb-4">
                I typically respond within 24 hours. Available for freelance projects.
              </p>
              <div className="flex flex-col gap-3 text-gray-300">
                <div><span className="font-semibold">Email:</span> siddhantgupta0304@gmail.com</div>
                <div><span className="font-semibold">Phone:</span> +91-9589530325</div>
                <div><span className="font-semibold">Location:</span> India</div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Social Links</h3>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/siddhant-gupta-b7730930a/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Siddhantgupta0340"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  <Github size={24} />
                </a>
                <a
                  href="mailto:siddhantgupta0304@gmail.com"
                  className="hover:text-cyan-400 transition"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
