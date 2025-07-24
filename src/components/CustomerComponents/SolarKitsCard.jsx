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

export default function SolarKitsCard({ image, type, description }) {
  return (
    <div>
      <Card>
        {/* image */}
        <CardHeader>
          <div className="relative overflow-hidden rounded-t-lg h-48">
            <img
              src={image}
              alt={type}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          {/* content */}
          <div>
            <CardContent>
              <div>
                <CardTitle>{type}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </div>
            </CardContent>
          </div>
        </CardHeader>

        <CardFooter>
          <Button />
        </CardFooter>
      </Card>
    </div>
  );
}
