"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import { BorderBeam } from "@/components/ui/border-beam";
import { CardHoverEffect } from "@/components/ui/pulse-card";
import {
  Leaf,
  Sun,
  Lightbulb,
  Globe,
  HeartHandshake,
  Users,
  ShieldCheck,
} from "lucide-react";

const iconComponents = {
  Leaf,
  Sun,
  Lightbulb,
  Globe,
  HeartHandshake,
  Users,
  ShieldCheck,
};

const solarValues = [
  {
    title: "Sustainability",
    description:
      "We’re committed to a greener planet by promoting renewable energy solutions.",
    icon: "Leaf",
  },
  {
    title: "Innovation",
    description:
      "We develop advanced solar technologies for maximum energy efficiency.",
    icon: "Lightbulb",
  },
  {
    title: "Community",
    description:
      "We work closely with communities to make clean energy accessible to everyone.",
    icon: "Users",
  },
  {
    title: "Integrity",
    description:
      "We operate with transparency and hold ourselves highly accountable.",
    icon: "ShieldCheck",
  },
];

export default function AboutUs1() {
  const aboutData = {
    title: "About Us",
    subtitle:
      "Powering a sustainable future with innovative solar energy solutions.",
    mission:
      "Our mission is to accelerate the global transition to clean energy by offering high-performance solar products that are reliable, efficient, and affordable.",
    vision:
      "We envision a world where every home and business is powered by clean, renewable energy from the sun.",
    values: solarValues,
  };

  const missionRef = useRef(null);
  const valuesRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full overflow-hidden pt-20">
      {/* Green spotlight background */}
      <Spotlight
        gradientFirst="radial-gradient(68% 68% at 50% 30%, hsla(139, 80%, 45%, 0.12) 0, hsla(139, 70%, 35%, 0.06) 60%, transparent 100%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(140, 100%, 85%, 0.05) 0, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(120, 100%, 60%, 0.05) 0, transparent 100%)"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h1 className="bg-gradient-to-r from-green-500 via-lime-500 to-green-600 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl">
            {aboutData.title}
          </h1>
          <p className="text-muted-foreground mt-6 text-xl">
            {aboutData.subtitle}
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 grid gap-12 md:grid-cols-2"
          >
            {/* Mission */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: "0px 25px 60px rgba(34,197,94,0.15)",
              }}
              className="group relative block overflow-hidden rounded-2xl border border-green-400/20 bg-gradient-to-br from-green-100/10 to-green-50/5 p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={6}
                size={380}
                className="via-green-500/50 from-transparent to-transparent"
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 backdrop-blur-sm">
                <Sun className="h-8 w-8 text-green-500" />
              </div>
              <h2 className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-3xl font-bold text-transparent">
                Our Mission
              </h2>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                {aboutData.mission}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{
                y: -6,
                boxShadow: "0px 25px 60px rgba(132,204,22,0.15)",
              }}
              className="group relative block overflow-hidden rounded-2xl border border-lime-400/20 bg-gradient-to-br from-lime-100/10 to-lime-50/5 p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={6}
                size={380}
                className="from-transparent via-lime-500/50 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-500/10 backdrop-blur-sm">
                <Globe className="h-8 w-8 text-lime-500" />
              </div>
              <h2 className="bg-gradient-to-r from-lime-600 to-lime-400 bg-clip-text text-3xl font-bold text-transparent">
                Our Vision
              </h2>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                {aboutData.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <h2 className="bg-gradient-to-r from-green-600 via-lime-500 to-green-400 bg-clip-text text-4xl font-bold text-transparent">
              Our Core Values
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              The values that guide our mission to create a cleaner, brighter
              future.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values.map((value, index) => {
              const IconComponent = iconComponents[value.icon];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6 text-green-600" />}
                    title={value.title}
                    description={value.description}
                    variant="emerald"
                    glowEffect
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
