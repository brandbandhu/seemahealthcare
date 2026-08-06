import { createFileRoute, Link } from "@tanstack/react-router";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { coupons } from "@/data/catalog";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers & Coupons — Seema Healthcare" },
      { name: "description", content: "Active coupons, hospital referral offers, category deals and free delivery promotions at Seema Healthcare." },
      { property: "og:title", content: "Offers & Coupons — Seema Healthcare" },
      { property: "og:description", content: "Copy a code and save on medicines, vitamins, devices and baby care." },
    ],
  }),
  component: Offers,
});

function Offers() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="text-2xl font-extrabold">Offers and coupons</h1>
      <p className="text-sm text-muted-foreground">All offers shown are demonstration data.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {coupons.map((c) => (
          <article key={c.code} className="card-soft flex flex-col p-5">
            <Badge variant="secondary" className="w-fit">{c.type}</Badge>
            <h2 className="mt-2 text-base font-bold">{c.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{c.benefit}</p>
            <dl className="mt-3 space-y-1 text-xs text-muted-foreground">
              <div>Minimum order: ₹{c.min}</div>
              <div>Maximum discount: ₹{c.max}</div>
              <div>Valid till: {c.validity}</div>
              <div>Applies to: {c.scope}</div>
            </dl>
            <div className="mt-4 flex items-center gap-2">
              <code className="rounded-lg border border-dashed px-3 py-1.5 text-sm font-bold">{c.code}</code>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  navigator.clipboard?.writeText(c.code);
                  toast.success(`${c.code} copied`);
                }}
              >
                <Copy className="h-4 w-4" /> Copy
              </Button>
            </div>
            <Button asChild size="sm" className="mt-3"><Link to="/products">Shop eligible products</Link></Button>
          </article>
        ))}
      </div>
    </div>
  );
}
