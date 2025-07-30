"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Timer, Shield } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { addToCart as addToCartService } from "@/services/CartService";
import { useState } from "react";

const ProductCard = ({
  productId,
  name,
  description,
  price,
  originalPrice,
  image,
  features = [],
  isPopular,
  wattage,
  batteryLife,
  warranty,
}) => {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const parsedPrice = parseFloat(price ?? 0);
  const parsedOriginalPrice = parseFloat(originalPrice ?? 0);
  const hasDiscount = parsedOriginalPrice > parsedPrice;

  const handleAddToCart = async () => {
    if (!productId) {
      toast.error("Missing product ID.");
      return;
    }

    if (isNaN(parsedPrice)) {
      toast.error("Invalid price.");
      return;
    }

    const item = {
      id: productId,
      name,
      price: parsedPrice,
      image: image || "",
      quantity: 1,
    };

    try {
      setIsLoading(true);
      await addToCartService(productId, 1); // API call
      addToCart?.(item); // update local cart
      toast.success(`${name} added to cart`);
    } catch (err) {
      const status = err.response?.status;
      if (status === 401 || status === 403) {
        toast.error("Please log in to add items to your cart.");
      } else {
        toast.error("Failed to add to cart. Try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-white/90 border border-green-200 hover:shadow-lg hover:scale-[1.015] transition-all duration-300 ease-in-out flex flex-col h-full relative">
      {isPopular && (
        <Badge className="absolute top-3 right-3 z-10 bg-green-600 text-white">
          Popular
        </Badge>
      )}

      <CardHeader className="pb-0">
        <div className="relative overflow-hidden rounded-lg h-48 group">
          <img
            src={image || "/placeholder.jpg"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>
      </CardHeader>

      <CardContent className="p-5 flex flex-col flex-grow">
        <CardTitle className="text-lg font-bold text-gray-800 mb-2">
          {name}
        </CardTitle>

        <CardDescription className="text-sm text-gray-600 mb-3 line-clamp-2">
          {description}
        </CardDescription>

        <div className="grid grid-cols-3 gap-2 mb-3 text-xs text-gray-600">
          {wattage && (
            <div className="flex items-center gap-1">
              <Zap className="h-3 w-3 text-green-600" />
              <span>{wattage}</span>
            </div>
          )}
          {batteryLife && (
            <div className="flex items-center gap-1">
              <Timer className="h-3 w-3 text-green-600" />
              <span>{batteryLife}</span>
            </div>
          )}
          {warranty && (
            <div className="flex items-center gap-1">
              <Shield className="h-3 w-3 text-green-600" />
              <span>{warranty}</span>
            </div>
          )}
        </div>

        {features.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {features.map((feature, i) => (
              <Badge key={i} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-2xl font-bold text-green-700">
            ${parsedPrice.toFixed(2)}
          </span>
          {hasDiscount && (
            <>
              <span className="text-lg text-gray-400 line-through">
                ${parsedOriginalPrice.toFixed(2)}
              </span>
              <Badge variant="destructive" className="text-xs">
                Save ${(parsedOriginalPrice - parsedPrice).toFixed(2)}
              </Badge>
            </>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <button
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
          onClick={handleAddToCart}
          disabled={isLoading}
          aria-label={`Add ${name} to cart`}
        >
          {isLoading ? "Adding..." : "Add to Cart"}
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
