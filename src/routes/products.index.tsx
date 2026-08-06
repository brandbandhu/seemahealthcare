import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Filter, Grid2x2, LayoutList, SearchX, SlidersHorizontal } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProductCard } from "@/components/site/ProductCard";
import { brands, categories, healthConcerns, products } from "@/data/catalog";
import { inr, useStore } from "@/context/StoreContext";

const searchSchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
});

const sorts = [
  { value: "popularity", label: "Popularity" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "discount", label: "Highest discount" },
  { value: "newest", label: "Newest" },
  { value: "rating", label: "Customer rating" },
];

const PAGE = 12;

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const initial = searchSchema.safeParse({
    q: searchParams.get("q") ?? undefined,
    category: searchParams.get("category") ?? undefined,
  }).data;
  const [query, setQuery] = useState(initial?.q ?? "");
  const [category, setCategory] = useState<string[]>(initial?.category ? [initial.category] : []);
  const [brand, setBrand] = useState<string[]>([]);
  const [concern, setConcern] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(2500);
  const [minDiscount, setMinDiscount] = useState(0);
  const [rxOnly, setRxOnly] = useState(false);
  const [inStock, setInStock] = useState(false);
  const [sort, setSort] = useState("popularity");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [visible, setVisible] = useState(PAGE);
  const { addToCart } = useStore();

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) =>
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = products.filter((p) => {
      const off = Math.round(((p.mrp - p.price) / p.mrp) * 100);
      if (q && ![p.name, p.composition, p.brand, p.manufacturer, p.category, p.concern].join(" ").toLowerCase().includes(q))
        return false;
      if (category.length && !category.includes(p.category)) return false;
      if (brand.length && !brand.includes(p.brand)) return false;
      if (concern.length && !concern.includes(p.concern)) return false;
      if (p.price > maxPrice) return false;
      if (off < minDiscount) return false;
      if (rxOnly && !p.rx) return false;
      if (inStock && p.stock === 0) return false;
      return true;
    });
    const disc = (p: (typeof products)[number]) => (p.mrp - p.price) / p.mrp;
    list = [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "discount":
          return disc(b) - disc(a);
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return Number(b.tags.includes("new")) - Number(a.tags.includes("new"));
        default:
          return b.reviews - a.reviews;
      }
    });
    return list;
  }, [query, category, brand, concern, maxPrice, minDiscount, rxOnly, inStock, sort]);

  const reset = () => {
    setQuery("");
    setCategory([]);
    setBrand([]);
    setConcern([]);
    setMaxPrice(2500);
    setMinDiscount(0);
    setRxOnly(false);
    setInStock(false);
    setVisible(PAGE);
  };

  const filters = (
    <div className="space-y-6">
      <FilterGroup title="Category">
        {categories.map((c) => (
          <CheckRow
            key={c.slug}
            id={`cat-${c.slug}`}
            label={c.name}
            checked={category.includes(c.slug)}
            onChange={() => {
              toggle(category, setCategory, c.slug);
              setVisible(PAGE);
            }}
          />
        ))}
      </FilterGroup>
      <FilterGroup title="Brand">
        {brands.map((b) => (
          <CheckRow key={b} id={`brand-${b}`} label={b} checked={brand.includes(b)} onChange={() => toggle(brand, setBrand, b)} />
        ))}
      </FilterGroup>
      <FilterGroup title="Health concern">
        {healthConcerns.map((h) => (
          <CheckRow key={h} id={`hc-${h}`} label={h} checked={concern.includes(h)} onChange={() => toggle(concern, setConcern, h)} />
        ))}
      </FilterGroup>
      <div>
        <h3 className="mb-3 text-sm font-bold">Maximum price - {inr(maxPrice)}</h3>
        <Slider value={[maxPrice]} min={50} max={2500} step={50} onValueChange={(v) => setMaxPrice(v[0]!)} />
      </div>
      <div>
        <h3 className="mb-3 text-sm font-bold">Minimum discount - {minDiscount}%</h3>
        <Slider value={[minDiscount]} min={0} max={40} step={5} onValueChange={(v) => setMinDiscount(v[0]!)} />
      </div>
      <FilterGroup title="Availability">
        <CheckRow id="rx" label="Prescription required" checked={rxOnly} onChange={() => setRxOnly(!rxOnly)} />
        <CheckRow id="stock" label="In stock only" checked={inStock} onChange={() => setInStock(!inStock)} />
      </FilterGroup>
      <Button variant="outline" className="w-full" onClick={reset}>
        Clear all filters
      </Button>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="mt-3 text-2xl font-extrabold">All products</h1>
      <p className="text-sm text-muted-foreground">{results.length} items available in the demonstration catalogue</p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVisible(PAGE);
          }}
          placeholder="Search by name, composition or brand"
          aria-label="Search products"
          className="h-10 w-full sm:min-w-[220px] sm:flex-1 lg:max-w-sm"
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full justify-center sm:w-auto lg:hidden">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[90vw] max-w-sm overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="p-4">{filters}</div>
          </SheetContent>
        </Sheet>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-full sm:min-w-[190px] lg:w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sorts.map((s) => (
              <SelectItem key={s.value} value={s.value}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="hidden gap-1 sm:flex lg:ml-auto">
          <Button variant={view === "grid" ? "default" : "outline"} size="icon" aria-label="Grid view" onClick={() => setView("grid")}>
            <Grid2x2 className="h-4 w-4" />
          </Button>
          <Button variant={view === "list" ? "default" : "outline"} size="icon" aria-label="List view" onClick={() => setView("list")}>
            <LayoutList className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="card-soft sticky top-32 max-h-[75vh] overflow-y-auto p-5">
            <h2 className="mb-4 flex items-center gap-2 text-sm font-bold">
              <Filter className="h-4 w-4" /> Filters
            </h2>
            {filters}
          </div>
        </aside>

        <div>
          {results.length === 0 ? (
            <div className="card-soft flex flex-col items-center gap-3 p-12 text-center">
              <SearchX className="h-10 w-10 text-muted-foreground" />
              <h2 className="text-lg font-bold">No products match these filters</h2>
              <p className="text-sm text-muted-foreground">Try widening the price range or clearing a filter.</p>
              <Button onClick={reset}>Clear filters</Button>
            </div>
          ) : view === "grid" ? (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {results.slice(0, visible).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <ul className="space-y-3">
              {results.slice(0, visible).map((p) => (
                <li key={p.id} className="card-soft grid grid-cols-1 gap-4 p-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link to={`/products/${p.slug}`} className="font-semibold hover:text-primary">
                        {p.name}
                      </Link>
                      {p.rx && (
                        <Badge variant="outline" className="text-primary">
                          Rx
                        </Badge>
                      )}
                    </div>
                    <p className="truncate text-xs text-muted-foreground">
                      {p.composition} - {p.packSize} - {p.brand}
                    </p>
                    <p className="mt-1 text-sm font-bold">
                      {inr(p.price)} <span className="text-xs font-normal text-muted-foreground line-through">{inr(p.mrp)}</span>
                    </p>
                  </div>
                  <Button size="sm" className="w-full sm:w-auto" disabled={!p.stock} onClick={() => addToCart(p.slug)}>
                    {p.stock ? "Add to cart" : "Out of stock"}
                  </Button>
                </li>
              ))}
            </ul>
          )}

          {visible < results.length && (
            <div className="mt-6 text-center">
              <Button variant="outline" onClick={() => setVisible((v) => v + PAGE)}>
                Load more ({results.length - visible} remaining)
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-bold">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function CheckRow({ id, label, checked, onChange }: { id: string; label: string; checked: boolean; onChange: () => void }) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={id} checked={checked} onCheckedChange={onChange} />
      <Label htmlFor={id} className="text-sm font-normal text-muted-foreground">
        {label}
      </Label>
    </div>
  );
}
