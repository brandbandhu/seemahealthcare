import { Link } from "@tanstack/react-router";
import { Heart, Plus, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { inr, useStore } from "@/context/StoreContext";
import type { Product } from "@/data/catalog";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const saved = wishlist.includes(product.slug);

  return (
    <article className="group card-soft flex flex-col overflow-hidden transition-shadow hover:shadow-[var(--shadow-card)]">
      <div className="relative">
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="block bg-muted/50"
          aria-label={product.name}
        >
          <img
            src={product.image}
            alt={`${product.name} pack illustration`}
            loading="lazy"
            width={800}
            height={800}
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          {off > 0 && <Badge className="bg-accent text-accent-foreground">{off}% off</Badge>}
          {product.rx && <Badge variant="outline" className="bg-card text-primary">Rx</Badge>}
        </div>
        <button
          type="button"
          onClick={() => toggleWishlist(product.slug)}
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-2 top-2 grid h-9 w-9 place-items-center rounded-full bg-card/90 text-muted-foreground shadow-[var(--shadow-soft)] transition-colors hover:text-destructive"
        >
          <Heart className={`h-4 w-4 ${saved ? "fill-destructive text-destructive" : ""}`} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-3 sm:p-4">
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">{product.brand}</p>
        <Link
          to="/products/$slug"
          params={{ slug: product.slug }}
          className="line-clamp-2 text-sm font-semibold leading-snug hover:text-primary"
        >
          {product.name}
        </Link>
        <p className="line-clamp-1 text-xs text-muted-foreground">{product.composition}</p>
        <p className="text-xs text-muted-foreground">{product.packSize}</p>

        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>({product.reviews})</span>
          <span className="ml-auto font-medium" style={{ color: product.stock ? undefined : "var(--destructive)" }}>
            {product.stock ? "In stock" : "Out of stock"}
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div className="min-w-0">
            <p className="text-base font-bold">{inr(product.price)}</p>
            <p className="text-xs text-muted-foreground line-through">{inr(product.mrp)}</p>
          </div>
          <Button size="sm" disabled={!product.stock} onClick={() => addToCart(product.slug)}>
            <Plus className="h-4 w-4" /> Add
          </Button>
        </div>
      </div>
    </article>
  );
}
