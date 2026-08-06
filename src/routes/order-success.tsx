import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/order-success")({
  head: () => ({
    meta: [
      { title: "Order Confirmed — Seema Healthcare" },
      { name: "description", content: "Your Seema Healthcare order is confirmed. Track delivery, download the invoice or keep shopping." },
      { property: "og:title", content: "Order Confirmed — Seema Healthcare" },
      { property: "og:description", content: "Order placed successfully with estimated delivery and tracking." },
    ],
  }),
  component: OrderSuccess,
});

function OrderSuccess() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16">
      <div className="card-soft animate-in fade-in slide-in-from-bottom-2 p-8 text-center duration-500">
        <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
        <h1 className="mt-4 text-2xl font-extrabold">Order placed successfully</h1>
        <p className="mt-1 text-sm text-muted-foreground">A confirmation has been sent to your registered mobile number.</p>
        <dl className="mt-6 space-y-2 text-left text-sm">
          {[
            ["Order number", "SH-ORD-20260806-0142"],
            ["Payment status", "Pending — Cash on delivery"],
            ["Order amount", "₹1,286"],
            ["You saved", "₹412"],
            ["Delivery address", "Flat 12, Green Residency, Ring Road, Nagpur 440015"],
            ["Estimated delivery", "Within 2–3 working days"],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b pb-2">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="text-right font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button asChild><Link to="/track-order">Track Order</Link></Button>
          <Button variant="outline" onClick={() => toast.success("Invoice downloaded (demo)")}>Download Invoice</Button>
          <Button asChild variant="ghost"><Link to="/products">Continue Shopping</Link></Button>
        </div>
      </div>
    </div>
  );
}
