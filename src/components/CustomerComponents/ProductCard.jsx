import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Zap, Timer, Shield } from "lucide-react";

const ProductCard = ({
  name,
  description,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  features = [],
  isPopular,
  wattage,
  batteryLife,
  warranty,
  onAddToCart,
}) => {
  return (
    <Card className="bg-white/90 border border-amber-100 hover:shadow-xl hover:shadow-amber-400 hover:scale-[1.05] transition-all duration-300 ease-in-out flex flex-col h-full">
    <Card className="bg-white border border-amber-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col h-full relative">
      {isPopular && (
        <Badge className="absolute top-3 right-3 z-10 bg-amber-500 text-white">
          Popular
        </Badge>
      )}

      {/* Image */}
      <CardHeader className="pb-0">
        <div className="relative overflow-hidden rounded-lg h-48">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="p-5 flex flex-col flex-grow">
        {/* Title + Rating */}
        <div className="flex items-start justify-between mb-2">
          <CardTitle className="text-lg font-bold text-gray-800 leading-snug">
            {name}
          </CardTitle>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
            <span className="text-sm text-gray-500">
              {rating} ({reviewCount})
            </span>
          </div>
        </div>

        {/* Description */}
        <CardDescription className="text-sm text-gray-600 mb-3 line-clamp-2">
          {description}
        </CardDescription>

        {/* Quick Specs */}
        <div className="grid grid-cols-3 gap-2 mb-3 text-xs text-gray-500">
          {wattage && (
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-amber-500" />
              <span>{wattage}</span>
            </div>
          )}
          {batteryLife && (
            <div className="flex items-center gap-1">
              <Timer className="h-3 w-3 text-amber-500" />
              <span>{batteryLife}</span>
            </div>
          )}
          {warranty && (
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-amber-500" />
              <span>{warranty}</span>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {features.map((feature, i) => (
            <Badge key={i} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-amber-600">${price}</span>
          {originalPrice && (
            <>
              <span className="text-lg text-gray-400 line-through">
                ${originalPrice}
              </span>
              <Badge variant="destructive" className="text-xs">
                Save ${originalPrice - price}
              </Badge>
            </>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <button
          className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition-colors duration-300"
          onClick={onAddToCart}
          aria-label={`Add ${name} to cart`}
        >
          Add to Cart
        </button>
      </CardFooter>
      {/* Optional Footer */}
      <CardFooter className="hidden" />
    </Card>
  );
};

export default ProductCard;
