import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  CreditCard,
  FileCheck2,
  Gift,
  Headphones,
  PackageCheck,
  RefreshCw,
  Star,
  Truck,
  Upload,
  Quote,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProductCard } from "@/components/site/ProductCard";
import { articles, banners, categories, faqs, hospitals, products, testimonials } from "@/data/catalog";
import heroImg from "@/assets/hero-pharmacy.jpg";

const quickServices = [
  { icon: Upload, label: "Upload Prescription", to: "/upload-prescription" as const },
  { icon: RefreshCw, label: "Reorder Medicines", to: "/products" as const },
  { icon: Truck, label: "Track Order", to: "/track-order" as const },
  { icon: Gift, label: "Hospital Rewards", to: "/referral" as const },
  { icon: Headphones, label: "Speak to Support", to: "/contact" as const },
];

const steps = [
  { icon: Upload, title: "Upload prescription", text: "Snap or attach your doctor's prescription in seconds." },
  { icon: ClipboardCheck, title: "Pharmacist review", text: "Our team checks legibility, dosage and availability." },
  { icon: FileCheck2, title: "Order value generated", text: "You receive an itemised quotation with discounts." },
  { icon: CreditCard, title: "Approve and pay", text: "Pay online or choose cash on delivery." },
  { icon: PackageCheck, title: "Packed and delivered", text: "Sealed dispatch with live tracking to your door." },
];

const trust = [
  { icon: BadgeCheck, title: "Verified products", text: "Batch and expiry recorded on every invoice." },
  { icon: ClipboardCheck, title: "Secure prescriptions", text: "Files are stored privately, never in a public folder." },
  { icon: Star, title: "Transparent pricing", text: "MRP, discount and tax shown before you pay." },
  { icon: Truck, title: "Order tracking", text: "Ten-stage timeline from placement to delivery." },
];

export default function HomePage() {
  const [banner, setBanner] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const popular = products.filter((p) => p.tags.includes("popular")).slice(0, 8);
  const deals = products.filter((p) => p.tags.includes("deal")).slice(0, 4);
  const best = products.filter((p) => p.tags.includes("bestseller")).slice(0, 4);
  const fresh = products.filter((p) => p.tags.includes("new")).slice(0, 4);
  const referral = products.filter((p) => p.tags.includes("referral")).slice(0, 4);

  const active = banners[banner]!;

  return (
    <>
      <section className="border-b bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 lg:grid-cols-2 lg:py-16">
          <div>
            <Badge className="bg-teal/15 text-foreground hover:bg-teal/15">
              <Sparkles className="mr-1 h-3.5 w-3.5" /> Trusted Healthcare Delivered to Your Doorstep
            </Badge>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Order Medicines and Healthcare Products Online
            </h1>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              Upload your prescription and get your order value reviewed by a licensed pharmacist. Hospital-referred
              customers earn extra points and discounts on every eligible order.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/upload-prescription">
                  <Upload className="h-4 w-4" /> Upload Prescription
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/products">Shop Products</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link to="/referral">
                  Check Referral Benefits <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
              {[
                ["850+", "Registered customers"],
                ["5", "Partner hospitals"],
                ["30 min", "Average Rx review"],
              ].map(([v, k]) => (
                <div key={k}>
                  <dt className="text-xl font-extrabold text-primary">{v}</dt>
                  <dd className="text-xs text-muted-foreground">{k}</dd>
                </div>
              ))}
            </dl>
          </div>
          <img
            src={heroImg}
            alt="Pharmacist handing a sealed medicine parcel to a customer"
            width={1280}
            height={960}
            className="w-full rounded-3xl border object-cover shadow-[var(--shadow-card)]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="card-soft overflow-hidden">
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Featured offer</p>
              <h2 className="mt-1 text-xl font-bold sm:text-2xl">{active.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{active.subtitle}</p>
            </div>
            <Button asChild className="shrink-0">
              <Link to={active.to}>{active.cta}</Link>
            </Button>
          </div>
          <div className="flex gap-2 px-6 pb-5">
            {banners.map((b, i) => (
              <button
                key={b.title}
                type="button"
                aria-label={`Show banner ${i + 1}`}
                onClick={() => setBanner(i)}
                className={`h-1.5 rounded-full transition-all ${i === banner ? "w-8 bg-primary" : "w-3 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {quickServices.map(({ icon: Icon, label, to }) => (
            <Link
              key={label}
              to={to}
              className="card-soft flex flex-col items-center gap-2 p-4 text-center transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      <Section title="Shop by category" subtitle="Fourteen curated healthcare departments">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-7">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/products?category=${c.slug}`}
              className="card-soft p-4 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <p className="text-sm font-semibold leading-snug">{c.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>

      <ProductRow title="Popular products" subtitle="What customers reorder most" items={popular} />
      <ProductRow title="Deal of the day" subtitle="Limited-period savings" items={deals} />
      <ProductRow title="Best sellers" subtitle="Consistently top rated" items={best} />
      <ProductRow title="Newly added" subtitle="Fresh in our catalogue" items={fresh} />
      <ProductRow title="Hospital referral exclusives" subtitle="Extra benefits for referred customers" items={referral} />

      <Section title="How prescription ordering works" subtitle="Five clear steps, no surprises">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="card-soft p-5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-teal/15 text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-xs font-bold uppercase tracking-wide text-muted-foreground">Step {i + 1}</p>
              <h3 className="mt-1 text-sm font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="card-soft grid gap-6 bg-primary p-6 text-primary-foreground lg:grid-cols-2 lg:p-10">
          <div>
            <h2 className="text-2xl font-extrabold">Referred by an associated hospital?</h2>
            <p className="mt-2 text-sm opacity-90">
              Enter your hospital referral code to unlock a 100-point signup bonus, up to 7% off eligible orders and
              faster prescription review. Points are worth Rs. 1 each and redeemable against 10% of any cart.
            </p>
            <Button asChild variant="secondary" className="mt-5">
              <Link to="/referral">Check Eligibility</Link>
            </Button>
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {hospitals.map((h) => (
              <li key={h.code} className="rounded-xl bg-primary-foreground/10 p-3 text-sm">
                <p className="font-semibold">{h.name}</p>
                <p className="opacity-80">
                  Code {h.code} - {h.discount}% off - {h.multiplier}x points
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section title="Why customers trust us" subtitle="Safety and clarity at every step">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="card-soft p-5">
              <t.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-sm font-bold">{t.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Health articles" subtitle="General information, medically reviewed">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((a) => (
            <Link
              key={a.slug}
              to={`/articles/${a.slug}`}
              className="card-soft p-5 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <Badge variant="secondary">{a.category}</Badge>
              <h3 className="mt-3 text-base font-bold leading-snug">{a.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{a.excerpt}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                Reviewed by {a.reviewer} - {a.read}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="What our customers say" subtitle="Sample feedback from the demonstration dataset">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card-soft p-5">
              <Quote className="h-5 w-5 text-teal" />
              <blockquote className="mt-3 text-sm text-muted-foreground">{t.text}</blockquote>
              <figcaption className="mt-4 flex items-center justify-between text-sm">
                <span className="font-semibold">
                  {t.name} <span className="font-normal text-muted-foreground">- {t.city}</span>
                </span>
                <span className="flex items-center gap-0.5 text-accent">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent" />
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section title="Frequently asked questions" subtitle="Ordering, prescriptions, rewards and delivery">
        <Accordion type="single" collapsible className="card-soft divide-y px-5">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-0">
              <AccordionTrigger className="text-left text-sm font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <section className="mx-auto max-w-7xl px-4 pb-12">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!email.includes("@")) {
              toast.error("Enter a valid email address");
              return;
            }
            toast.success("Subscribed", { description: `We'll send health updates to ${email}.` });
            setEmail("");
            setName("");
          }}
          className="card-soft grid gap-3 p-6 sm:grid-cols-[1fr_1fr_auto]"
        >
          <div className="sm:col-span-3">
            <h2 className="text-lg font-bold">Health tips and offers, once a month</h2>
            <p className="text-sm text-muted-foreground">No spam. Unsubscribe any time.</p>
          </div>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" aria-label="Your name" />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
            aria-label="Email address"
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </section>
    </>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <header className="mb-4">
        <h2 className="text-xl font-extrabold sm:text-2xl">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </header>
      {children}
    </section>
  );
}

function ProductRow({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: typeof products;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <header className="mb-4 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-xl font-extrabold sm:text-2xl">{title}</h2>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <Button asChild variant="ghost" size="sm" className="shrink-0">
          <Link to="/products">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </header>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
