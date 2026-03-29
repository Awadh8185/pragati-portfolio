"use client";

import { motion } from "framer-motion";
import { Trophy, Code, BookOpen } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Code,
      title: "LeetCode Problem Solver",
      description: "Successfully solved 180+ coding challenges on LeetCode.",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      icon: Trophy,
      title: "1st Prize - Debate",
      description: "Won First Prize in the Debate Competition conducted by the Centre for Professional Enhancement – LPU.",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: Trophy,
      title: "First Runner-up - Speaking",
      description: "Secured First Runner-up position in the Speaking Competition organized by the Centre for Professional Enhancement – LPU.",
      color: "text-rose-500",
      bgColor: "bg-rose-500/10",
    },
    {
      icon: Code,
      title: "4th Place - Code of Duty Hackathon",
      description: "Secured 4th place in the 'Code of Duty' web development hackathon, demonstrating strong full-stack skills under pressure.",
      color: "text-fuchsia-500",
      bgColor: "bg-fuchsia-500/10",
    }
  ];

  return (
    <section id="achievements" className="py-20 relative bg-foreground/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            My <span className="text-pink-600 dark:text-pink-400">Achievements</span>
          </h2>
          <div className="h-1 w-20 bg-pink-600 dark:bg-pink-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="bg-background rounded-2xl p-8 border border-foreground/10 text-center hover:shadow-xl transition-all duration-300 shadow-sm"
              >
                <div className={`w-16 h-16 ${item.bgColor} ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3 group-hover:rotate-6 transition-transform`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
