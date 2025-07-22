import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Sun,
  BatteryCharging,
  ShieldCheck,
  Zap,
  Leaf,
  Headset,
} from "lucide-react";

const features = [
  {
    id: "solar",
    icon: Sun,
    title: "Solar-Driven",
    description:
      "Depend on the sun for reliable, off-grid power—no noise, no fuel, no hassle.",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-100/30",
  },
  {
    id: "storage",
    icon: BatteryCharging,
    title: "Reliable Storage",
    description:
      "Store solar power with confidence—your lights stay on even when the sun is gone.",
    iconColor: "text-sky-500",
    bgColor: "bg-sky-100/30",
  },
  {
    id: "outdoor",
    icon: ShieldCheck,
    title: "Built for the Outdoors",
    description:
      "Engineered tough—rain, dust, and heat won’t slow us down or wear us out.",
    iconColor: "text-neutral-500",
    bgColor: "bg-neutral-100/30",
  },
  {
    id: "efficiency",
    icon: Zap,
    title: "Maximum Efficiency",
    description:
      "More brightness. Less waste. Our LEDs work smart to save energy and costs.",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-100/30",
  },
  {
    id: "sustainability",
    icon: Leaf,
    title: "Sustainable by Design",
    description:
      "Responsibly built from eco-friendly materials—for a brighter, greener tomorrow.",
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-100/30",
  },
  {
    id: "support",
    icon: Headset,
    title: "Expert Support",
    description:
      "We guide you every step—from product selection to setup—with real human help.",
    iconColor: "text-indigo-500",
    bgColor: "bg-indigo-100/30",
  },
];

const Features = () => {
  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-5">
            Why Choose Us?
          </h2>
          <p className="text-[1.25rem] sm:text-[1.35rem] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Trusted by thousands, we deliver solar lighting you can count on—
            built to last, easy to use, and made for real-life reliability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.id}
                className="group border-none bg-white/5 backdrop-blur-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-up p-6"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <CardHeader className="flex items-center gap-4 pb-4">
                  <div className={`p-4 rounded-xl ${feature.bgColor}`}>
                    <Icon className={`h-8 w-8 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-emerald-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/90">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
