"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Michael Munga",
    role: "CEO & Visionary",
    bio: "Leads strategic direction with a mission to transform energy access through solar innovation.",
  },
  {
    name: "Carlos Kiplagat",
    role: "Chief Operations Officer",
    bio: "Ensures smooth execution of projects with an eye for efficiency and excellence.",
  },
  {
    name: "Chris Chege",
    role: "Technical Director",
    bio: "Solar technology expert focused on system integration and performance optimization.",
  },
  {
    name: "Abdulhakim Sudi",
    role: "Lead Engineer",
    bio: "Designs and implements advanced solar lighting systems for diverse environments.",
  },
  {
    name: "Hope Yunia",
    role: "Executive Director",
    bio: "Passionate about sustainability, leadership, and community empowerment through clean energy.",
  },
  {
    name: "Erick Mongare",
    role: "Project Manager",
    bio: "Coordinates field operations and ensures projects are delivered on time and on budget.",
  },
];

export default function OurTeam() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The passionate experts behind our mission to deliver clean, reliable
            solar lighting solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full flex flex-col justify-between p-6 text-center hover:shadow-card transition-all duration-300 hover:scale-105">
                <CardContent className="flex flex-col h-full justify-between p-0">
                  <div>
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-lime-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
