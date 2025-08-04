import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Package, HelpCircle } from "lucide-react";

export default function CustomerDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const orders = [
    {
      id: "1001",
      product: "Solar Lamp Set",
      status: "Delivered",
      price: "$89.99",
    },
    { id: "1002", product: "Garden Light", status: "Shipped", price: "$45.00" },
  ];

  return (
    <main className="pt-28 pb-16 px-4 md:px-10 max-w-7xl mx-auto space-y-10">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-2">
          Welcome, {user?.first_name || "Customer"}!
        </h1>
        <p>
          Track orders, manage your account, and get help — all in one place.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">24</p>
            <p className="text-sm text-muted-foreground">This year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Items in Cart</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5</p>
            <p className="text-sm text-muted-foreground">Ready to checkout</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Support Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2</p>
            <p className="text-sm text-muted-foreground">Open issues</p>
          </CardContent>
        </Card>
      </div>

      {/* My Orders */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Package className="h-5 w-5 text-emerald-600" />
          My Orders
        </h2>
        {orders.map((order) => (
          <Card key={order.id} className="border rounded-lg">
            <CardContent className="py-4 px-6 flex justify-between items-center">
              <div>
                <p className="font-medium">{order.product}</p>
                <p className="text-sm text-muted-foreground">
                  Order #{order.id}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Badge>{order.status}</Badge>
                <p className="font-semibold">{order.price}</p>
              </div>
            </CardContent>
          </Card>
        ))}
        <Button variant="outline" className="w-full">
          View All Orders
        </Button>
      </section>

      {/* Support Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-emerald-600" />
          Support
        </h2>
        <Card>
          <CardContent className="p-6">
            <p className="mb-4 text-muted-foreground">
              Need help with an order or have a question? Our team is here for
              you.
            </p>
            <Button className="w-full">Contact Support</Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
