import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { inr, useStore } from "@/context/StoreContext";

export default function CartPage() {
  const {
    lines,
    totals,
    setQty,
    removeFromCart,
    applyCoupon,
    removeCoupon,
    couponCode,
    pointsUsed,
    setPointsUsed,
    pointsBalance,
    hospitalCode,
  } = useStore();
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="card-soft mx-auto flex max-w-md flex-col items-center gap-3 p-10 text-center">
          <ShoppingBag className="h-10 w-10 text-muted-foreground" />
          <h1 className="text-xl font-bold">Your cart is empty</h1>
          <p className="text-sm text-muted-foreground">Add products, or upload a prescription and we'll build the order for you.</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button asChild>
              <Link to="/products">Shop products</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/upload-prescription">Upload prescription</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="text-2xl font-extrabold">Your cart</h1>
      <p className="text-sm text-muted-foreground">{totals.itemCount} items</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <ul className="space-y-3">
          {lines.map(({ product, qty }) => (
            <li key={product.slug} className="card-soft grid grid-cols-[64px_minmax(0,1fr)] gap-4 p-4 sm:grid-cols-[80px_minmax(0,1fr)_auto]">
              <img src={product.image} alt={product.name} loading="lazy" width={800} height={800} className="h-16 w-16 rounded-xl border object-cover sm:h-20 sm:w-20" />
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <Link to={`/products/${product.slug}`} className="font-semibold hover:text-primary">
                    {product.name}
                  </Link>
                  {product.rx && <Badge variant="outline" className="text-primary">Rx</Badge>}
                </div>
                <p className="text-xs text-muted-foreground">{product.packSize} - {product.brand}</p>
                <p className="mt-1 text-sm font-bold">
                  {inr(product.price)} <span className="text-xs font-normal text-muted-foreground line-through">{inr(product.mrp)}</span>
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center rounded-full border">
                    <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Decrease" onClick={() => setQty(product.slug, qty - 1)}>
                      <Minus className="h-3.5 w-3.5" />
                    </Button>
                    <span className="w-7 text-center text-sm font-semibold">{qty}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Increase" onClick={() => setQty(product.slug, qty + 1)}>
                      <Plus className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => removeFromCart(product.slug)}>
                    <Trash2 className="h-4 w-4" /> Remove
                  </Button>
                </div>
              </div>
              <p className="col-span-2 text-right text-sm font-bold sm:col-span-1">{inr(product.price * qty)}</p>
            </li>
          ))}

          {totals.requiresRx && (
            <li className="flex flex-wrap items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm">
              <Upload className="h-5 w-5 text-primary" />
              <p className="min-w-0 flex-1">Your cart contains prescription medicines. A valid prescription is required before dispatch.</p>
              <Button asChild size="sm" variant="outline">
                <Link to="/upload-prescription">Upload now</Link>
              </Button>
            </li>
          )}
        </ul>

        <aside className="card-soft h-fit p-5 lg:sticky lg:top-32">
          <h2 className="text-base font-bold">Order summary</h2>

          <div className="mt-4 space-y-2">
            <div className="flex gap-2">
              <Input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Coupon code e.g. SEEMA10" aria-label="Coupon code" />
              <Button variant="outline" onClick={() => applyCoupon(code) && setCode("")}>Apply</Button>
            </div>
            {couponCode && (
              <p className="flex items-center justify-between text-xs text-success">
                {couponCode} applied
                <button className="underline" onClick={removeCoupon}>Remove</button>
              </p>
            )}
            <div className="flex gap-2">
              <Input
                type="number"
                min={0}
                max={totals.maxPoints}
                value={pointsUsed || ""}
                onChange={(e) => setPointsUsed(Math.min(Number(e.target.value), totals.maxPoints))}
                placeholder={`Use points (max ${totals.maxPoints})`}
                aria-label="Reward points to redeem"
              />
              <Button variant="outline" onClick={() => setPointsUsed(totals.maxPoints)}>Max</Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Balance {pointsBalance} points - 1 point = Rs. 1 - up to 10% of cart value
            </p>
          </div>

          <Separator className="my-4" />

          <dl className="space-y-2 text-sm">
            <Row label="MRP total" value={inr(totals.mrpTotal)} />
            <Row label="Product discount" value={`- ${inr(totals.productDiscount)}`} tone="success" />
            {totals.couponDiscount > 0 && <Row label="Coupon discount" value={`- ${inr(totals.couponDiscount)}`} tone="success" />}
            {totals.hospitalDiscount > 0 && (
              <Row label={`Hospital referral (${hospitalCode})`} value={`- ${inr(totals.hospitalDiscount)}`} tone="success" />
            )}
            {totals.pointsDiscount > 0 && <Row label="Reward points" value={`- ${inr(totals.pointsDiscount)}`} tone="success" />}
            <Row label="GST (5%)" value={inr(totals.tax)} />
            <Row label="Delivery" value={totals.delivery ? inr(totals.delivery) : "Free"} />
            <Separator className="my-2" />
            <div className="flex justify-between text-base font-extrabold">
              <dt>Payable</dt>
              <dd>{inr(totals.payable)}</dd>
            </div>
            <p className="rounded-lg bg-success/10 px-3 py-2 text-xs font-semibold text-success">
              You save {inr(totals.savings)} on this order
            </p>
          </dl>

          <Button className="mt-4 w-full" size="lg" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </Button>
          <Button asChild variant="ghost" className="mt-1 w-full">
            <Link to="/products">Continue shopping</Link>
          </Button>
        </aside>
      </div>
    </div>
  );
}

function Row({ label, value, tone }: { label: string; value: string; tone?: "success" }) {
  return (
    <div className="flex justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={tone === "success" ? "font-medium text-success" : "font-medium"}>{value}</dd>
    </div>
  );
}
