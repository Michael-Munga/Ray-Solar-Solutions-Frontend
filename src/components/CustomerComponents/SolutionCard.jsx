import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";


const SolutionCard = ({ solution, index }) => {
  const IconComponent = solution.icon;

  return (
    <Card
      className="group hover:shadow-card transition-all duration-300 hover:scale-105 animate-scale-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <CardHeader>
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-green-600 rounded-lg">
            <IconComponent className="h-8 w-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-xl group-hover:text-green-700 transition-colors">
              {solution.title}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {solution.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {solution.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Benefits</h4>
          <div className="space-y-2">
            {solution.benefits.map((benefit, idx) => (
              <Badge key={idx} variant="secondary" className="mr-2 mb-1">
                {benefit}
              </Badge>
            ))}
          </div>
        </div>

        
      </CardContent>
    </Card>
  );
};

export default SolutionCard;
