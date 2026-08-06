import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Gift,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  ShoppingCart,
  Stethoscope,
  Tag,
  Truck,
  Upload,
  User,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useStore } from "@/context/StoreContext";
import { supportPhone } from "@/data/catalog";

const navLinks = [
  { to: "/products", label: "Shop" },
  { to: "/upload-prescription", label: "Upload Prescription" },
  { to: "/offers", label: "Offers" },
  { to: "/referral", label: "Referral Rewards" },
  { to: "/articles", label: "Health Articles" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const strip = [
  { icon: ShieldCheck, text: "Genuine healthcare products" },
  { icon: Stethoscope, text: "Pharmacist prescription verification" },
  { icon: Truck, text: "Doorstep delivery" },
  { icon: Tag, text: "Secure payments" },
];

export function Header() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { totals, pincode, setPincode } = useStore();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/products", search: { q: query || undefined } });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
      <div className="hidden bg-primary text-primary-foreground lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-1.5 text-xs">
          {strip.map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5">
              <Icon className="h-3.5 w-3.5" /> {text}
            </span>
          ))}
          <a href={`tel:${supportPhone.replace(/\s/g, "")}`} className="ml-auto flex items-center gap-1.5 font-medium">
            <Phone className="h-3.5 w-3.5" /> {supportPhone}
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-3 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center">
        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 p-0">
              <nav className="flex flex-col gap-1 p-4 pt-10">
                {navLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted"
                    activeProps={{ className: "bg-muted text-primary" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex shrink-0 items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-base font-extrabold">Seema Healthcare</span>
              <span className="block text-[11px] text-muted-foreground">Trusted care, delivered</span>
            </span>
          </Link>
        </div>

        <form onSubmit={submit} className="relative min-w-0 sm:min-w-[240px] lg:min-w-[320px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search medicines, brands, health concerns…"
            aria-label="Search products"
            className="h-10 rounded-full bg-muted/60 pl-9"
          />
        </form>

        <div className="flex flex-wrap items-center justify-end gap-1 sm:flex-nowrap">
          <button
            type="button"
            onClick={() => {
              const p = window.prompt("Enter delivery PIN code", pincode ?? "440001");
              if (p) setPincode(p);
            }}
            className="hidden items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-medium text-muted-foreground hover:text-primary xl:flex"
          >
            <MapPin className="h-4 w-4" /> {pincode ? `Deliver to ${pincode}` : "Set PIN code"}
          </button>
          <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
            <Link to="/upload-prescription">
              <Upload className="h-4 w-4" /> Upload Rx
            </Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="hidden lg:inline-flex">
            <Link to="/referral">
              <Gift className="h-4 w-4" /> Rewards
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" aria-label="Account">
            <Link to="/contact">
              <User className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="relative" aria-label="Cart">
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              {totals.itemCount > 0 && (
                <Badge className="absolute -right-1 -top-1 h-5 min-w-5 justify-center rounded-full bg-accent px-1 text-[10px] text-accent-foreground">
                  {totals.itemCount}
                </Badge>
              )}
            </Link>
          </Button>
        </div>
      </div>

      <nav className="hidden border-t lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-2 text-sm">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
