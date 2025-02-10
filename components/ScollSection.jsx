"use client";
import { motion } from "framer-motion";

const sections = [
  { id: 1, image: "https://via.placeholder.com/1200x800", text: "Section One" },
  { id: 2, image: "https://via.placeholder.com/1200x800", text: "Section Two" },
  {
    id: 3,
    image: "https://via.placeholder.com/1200x800",
    text: "Section Three",
  },
];

export default function ScrollEffectsWebsite() {
  return (
    <div className="w-full min-h-screen text-center overflow-y-scroll snap-y snap-mandatory h-screen">
      {sections.map((section) => (
        <div
          key={section.id}
          className="relative w-full h-screen flex justify-center items-center overflow-hidden snap-start"
        >
          {/* Background Image */}
          <img
            src={section.image}
            alt={`Background ${section.id}`}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Overlaying Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative text-white text-6xl font-extrabold tracking-wide font-[Poppins] uppercase"
          >
            {section.text}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
