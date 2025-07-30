"use client";

import { motion } from "framer-motion";
import { Sun, Users, Award, TrendingUp } from "lucide-react";

export default function StatsSection() {
  const stats = [
    { icon: Sun, label: "Years of Experience", value: "15+" },
    { icon: Users, label: "Happy Customers", value: "10,000+" },
    { icon: Award, label: "Awards Won", value: "25+" },
    { icon: TrendingUp, label: "CO₂ Reduced (tons)", value: "50,000+" },
  ];

  return (
    <div className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold text-black">Our Impact In Numbers</h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
          A glimpse into the progress we’ve made on our journey toward a cleaner
          future.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-lime-400 text-white shadow-lg">
                <Icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
