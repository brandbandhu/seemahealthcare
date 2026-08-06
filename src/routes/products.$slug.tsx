import { useState } from "react";
import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { AlertTriangle, Heart, Minus, Plus, ShieldCheck, Star, Truck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ProductCard } from "@/components/site/ProductCard";
import { categoryBySlug, productBySlug, products } from "@/data/catalog";
import { inr, useStore } from "@/context/StoreContext";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product unavailable — Seema Healthcare" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.name} — ${p.packSize} | Seema Healthcare` },
        { name: "description", content: `${p.name} (${p.composition}), ${p.packSize} by ${p.brand}. Order online with pharmacist verification and doorstep delivery.` },
        { property: "og:title", content: `${p.name} — Seema Healthcare` },
        { property: "og:description", content: `${p.composition} · ${p.packSize} · ${p.brand}` },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [pin, setPin] = useState("");
  const [eta, setEta] = useState<string | null>(null);

  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const cat = categoryBySlug(product.category);
  const similar = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);
  const together = products.filter((p) => p.concern === product.concern && p.slug !== product.slug).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink asChild><Link to="/products">Products</Link></BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>{product.name}</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-4 grid gap-8 lg:grid-cols-2">
        <div>
          <img
            src={product.images[0]}
            alt={`${product.name} pack`}
            width={800}
            height={800}
            className="w-full rounded-2xl border bg-card object-cover"
          />
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {product.images.slice(0, 4).map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`${product.name} view ${i + 1}`}
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square w-full rounded-xl border object-cover"
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            {cat && <Badge variant="secondary">{cat.name}</Badge>}
            {product.rx && <Badge className="bg-primary">Prescription required</Badge>}
            {off > 0 && <Badge className="bg-accent text-accent-foreground">{off}% off</Badge>}
          </div>
          <h1 className="mt-3 text-2xl font-extrabold sm:text-3xl">{product.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {product.composition} · {product.packSize}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {product.brand} · Marketed by {product.manufacturer}
          </p>

          <div className="mt-2 flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold">{product.rating}</span>
            <span className="text-muted-foreground">({product.reviews} ratings)</span>
          </div>

          <div className="mt-4 flex items-end gap-3">
            <span className="text-3xl font-extrabold">{inr(product.price)}</span>
            <span className="pb-1 text-sm text-muted-foreground line-through">{inr(product.mrp)}</span>
            <span className="pb-1 text-sm font-semibold text-success">Save {inr(product.mrp - product.price)}</span>
          </div>
          <p className="text-xs text-muted-foreground">Inclusive of 5% GST. Delivery charge calculated at checkout.</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-full border">
              <Button variant="ghost" size="icon" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center text-sm font-semibold">{qty}</span>
              <Button variant="ghost" size="icon" aria-label="Increase quantity" onClick={() => setQty((q) => Math.min(10, q + 1))}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button disabled={!product.stock} onClick={() => addToCart(product.slug, qty)}>
              Add to Cart
            </Button>
            <Button
              variant="secondary"
              disabled={!product.stock}
              onClick={() => {
                addToCart(product.slug, qty);
                navigate({ to: "/cart" });
              }}
            >
              Buy Now
            </Button>
            <Button variant="outline" size="icon" aria-label="Wishlist" onClick={() => toggleWishlist(product.slug)}>
              <Heart className={`h-4 w-4 ${wishlist.includes(product.slug) ? "fill-destructive text-destructive" : ""}`} />
            </Button>
          </div>
          <p className="mt-2 text-sm font-medium" style={{ color: product.stock ? "var(--success)" : "var(--destructive)" }}>
            {product.stock ? `In stock — ${product.stock} units available` : "Currently out of stock"}
          </p>

          <form
            className="card-soft mt-5 flex flex-wrap items-end gap-3 p-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (!/^\d{6}$/.test(pin)) {
                toast.error("Enter a valid 6-digit PIN code");
                return;
              }
              setEta("Delivery by Tuesday, standard shipping · Express available");
              toast.success("Delivery available at " + pin);
            }}
          >
            <div className="min-w-0 flex-1">
              <label htmlFor="pin" className="text-xs font-semibold">Check delivery</label>
              <Input id="pin" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="6-digit PIN code" inputMode="numeric" />
            </div>
            <Button type="submit" variant="outline">Check</Button>
            {eta && (
              <p className="flex w-full items-center gap-2 text-sm text-success">
                <Truck className="h-4 w-4" /> {eta}
              </p>
            )}
          </form>

          {product.rx && (
            <div className="mt-4 flex gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm">
              <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
              <p>
                This medicine requires a valid prescription. Add it to your cart and{" "}
                <Link to="/upload-prescription" className="font-semibold text-primary underline">
                  upload your prescription
                </Link>
                . Dispatch happens only after pharmacist approval.
              </p>
            </div>
          )}
        </div>
      </div>

      <Tabs defaultValue="description" className="mt-10">
        <TabsList className="flex h-auto flex-wrap justify-start">
          {["description", "uses", "directions", "safety", "storage", "manufacturer", "returns"].map((t) => (
            <TabsTrigger key={t} value={t} className="capitalize">{t}</TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="description" className="card-soft mt-3 p-5 text-sm text-muted-foreground">{product.description}</TabsContent>
        <TabsContent value="uses" className="card-soft mt-3 p-5 text-sm text-muted-foreground">{product.uses}</TabsContent>
        <TabsContent value="directions" className="card-soft mt-3 p-5 text-sm text-muted-foreground">{product.directions}</TabsContent>
        <TabsContent value="safety" className="card-soft mt-3 p-5 text-sm text-muted-foreground">{product.safety}</TabsContent>
        <TabsContent value="storage" className="card-soft mt-3 p-5 text-sm text-muted-foreground">{product.storage}</TabsContent>
        <TabsContent value="manufacturer" className="card-soft mt-3 p-5 text-sm text-muted-foreground">
          {product.manufacturer}, India. Batch number and expiry date are printed on the pack and listed on your invoice.
        </TabsContent>
        <TabsContent value="returns" className="card-soft mt-3 p-5 text-sm text-muted-foreground">
          Sealed non-prescription items can be returned within 7 days. Prescription and temperature-sensitive products are
          not returnable for safety reasons.
        </TabsContent>
      </Tabs>

      <div className="mt-5 flex gap-3 rounded-xl border border-accent/40 bg-accent/10 p-4 text-sm">
        <AlertTriangle className="h-5 w-5 shrink-0 text-accent" />
        <p>
          <strong>Medical disclaimer:</strong> This information is for general reference only and is not medical advice.
          Consult your doctor or pharmacist before starting, stopping or changing any medicine. Do not alter a prescribed
          dosage yourself.
        </p>
      </div>

      <Row title="Similar products" items={similar} />
      <Row title="Frequently bought together" items={together} />
    </div>
  );
}

function Row({ title, items }: { title: string; items: typeof products }) {
  if (!items.length) return null;
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-xl font-extrabold">{title}</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
