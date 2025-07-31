"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function TimelineSection() {
  const milestones = [
    {
      year: "2008",
      event: "Company founded with a vision for sustainable lighting",
    },
    {
      year: "2012",
      event: "Launched first commercial solar street lighting project",
    },
    { year: "2016", event: "Expanded to serve residential markets nationwide" },
    {
      year: "2019",
      event: "Introduced smart lighting technology and IoT integration",
    },
    { year: "2022", event: "Reached 10,000+ satisfied customers milestone" },
    {
      year: "2024",
      event:
        "Leading provider of solar lighting solutions across multiple sectors",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-100 via-green-200 to-green-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold text-black">Our Journey</h2>
        <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
          Key milestones in our mission to transform outdoor lighting.
        </p>
      </motion.div>

      <div className="space-y-8 max-w-3xl mx-auto px-4">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <Badge className="min-w-[80px] px-4 py-2 text-lg font-semibold">
              {milestone.year}
            </Badge>
            <div className="flex-1 p-4 bg-white rounded-lg shadow-md text-card-foreground">
              {milestone.event}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
