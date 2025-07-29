"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-200 via-green-100 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ready to Work with Us?
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Let’s discuss how we can illuminate your project with sustainable
          solar solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            <Phone className="mr-2 h-5 w-5" />
            Call Us Today
          </Button>
          <Button size="lg" variant="outline">
            <Mail className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
}
