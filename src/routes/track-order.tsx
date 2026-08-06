import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Circle, Phone, Truck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supportPhone } from "@/data/catalog";

export const Route = createFileRoute("/track-order")({
  head: () => ({
    meta: [
      { title: "Track Your Order — Seema Healthcare" },
      { name: "description", content: "Track your Seema Healthcare order through a ten-stage timeline from placement to doorstep delivery." },
      { property: "og:title", content: "Track Your Order — Seema Healthcare" },
      { property: "og:description", content: "Live delivery timeline, courier details and estimated delivery date." },
    ],
  }),
  component: TrackOrder,
});

const timeline = [
  ["Order Placed", "06 Aug, 09:12 am"],
  ["Payment Confirmed", "06 Aug, 09:14 am"],
  ["Prescription Under Review", "06 Aug, 09:40 am"],
  ["Prescription Approved", "06 Aug, 10:05 am"],
  ["Order Confirmed", "06 Aug, 10:20 am"],
  ["Processing", "06 Aug, 12:10 pm"],
  ["Packed", "06 Aug, 04:35 pm"],
  ["Shipped", "07 Aug, 08:02 am"],
  ["Out for Delivery", "Expected 08 Aug"],
  ["Delivered", "Expected 08 Aug"],
];

function TrackOrder() {
  const [id, setId] = useState("SH-ORD-20260806-0142");
  const done = 8;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl font-extrabold">Track your order</h1>
      <form
        className="mt-4 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          toast.success("Order found", { description: id });
        }}
      >
        <Input value={id} onChange={(e) => setId(e.target.value)} aria-label="Order number" placeholder="Order number" />
        <Button type="submit">Track</Button>
      </form>

      <div className="card-soft mt-6 grid gap-3 p-5 text-sm sm:grid-cols-2">
        {[
          ["Tracking number", "SEEMA-TRK-884213"],
          ["Delivery partner", "SwiftMed Logistics"],
          ["Estimated delivery", "08 Aug 2026"],
          ["Last update", "Shipped from Nagpur hub"],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="text-muted-foreground">{k}</p>
            <p className="font-semibold">{v}</p>
          </div>
        ))}
      </div>

      <ol className="card-soft mt-6 space-y-4 p-5">
        {timeline.map(([label, when], i) => (
          <li key={label} className="flex gap-3">
            {i < done ? <CheckCircle2 className="h-5 w-5 shrink-0 text-success" /> : <Circle className="h-5 w-5 shrink-0 text-muted-foreground" />}
            <div className="min-w-0">
              <p className={`text-sm font-semibold ${i < done ? "" : "text-muted-foreground"}`}>{label}</p>
              <p className="text-xs text-muted-foreground">{when}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Truck className="h-4 w-4" /> Delivery support: <Phone className="h-4 w-4" /> {supportPhone}
      </p>
    </div>
  );
}
