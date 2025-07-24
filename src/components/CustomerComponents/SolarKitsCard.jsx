import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function SolarKitsCard({ image, type, description }) {
  return (
    <div>
      <Card className="flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
        {/* image */}
        <CardHeader>
          <div className="relative overflow-hidden rounded-lg h-48">
            <img
              src={image}
              alt={type}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* content */}
          <div>
            <CardContent className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <CardTitle className="text-xl font-semibold mb-2 text-gray-800">
                  {type}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed mb-4">
                  {description}
                </CardDescription>
              </div>
            </CardContent>
          </div>
        </CardHeader>

        <CardFooter className="px-6 pb-6 pt-0 ">
          <Button
            className="flex items-center
             bg-yellow-500 text-white font-medium h-auto
             px-4 py-2 border border-yellow-500 rounded-md
             shadow-none transition-colors duration-200 group

             hover:bg-transparent hover:text-yellow-600
             hover:border-yellow-600"
          >
            View Products{" "}
            <ArrowRight className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
