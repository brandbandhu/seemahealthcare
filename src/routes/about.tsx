import { createFileRoute, Link } from "@tanstack/react-router";
import { HeartHandshake, ShieldCheck, Target, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Seema Healthcare — Our Mission and Values" },
      { name: "description", content: "Seema Healthcare delivers genuine medicines and wellness products with pharmacist-verified prescriptions and transparent pricing." },
      { property: "og:title", content: "About Seema Healthcare" },
      { property: "og:description", content: "Trusted Healthcare Delivered to Your Doorstep." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-extrabold sm:text-3xl">About Seema Healthcare</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Seema Healthcare is a community pharmacy that moved online so families can order medicines without queueing.
        Every prescription is read by a licensed pharmacist, every pack is checked for batch and expiry, and every price
        is shown in full before you pay.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {[
          { icon: Target, title: "Our mission", text: "Make genuine medicines affordable and reachable across Vidarbha, one household at a time." },
          { icon: ShieldCheck, title: "Our vision", text: "A pharmacy people trust because nothing about the process is hidden from them." },
          { icon: HeartHandshake, title: "Our values", text: "Accuracy first, honest pricing, patient privacy and respectful service." },
          { icon: Truck, title: "Delivery coverage", text: "Same-day dispatch within Nagpur and 2–3 day delivery across partner districts." },
        ].map((v) => (
          <div key={v.title} className="card-soft p-5">
            <v.icon className="h-6 w-6 text-primary" />
            <h2 className="mt-3 text-base font-bold">{v.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-xl font-bold">Why choose us</h2>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
        <li>Prescriptions reviewed by qualified pharmacists, never auto-approved.</li>
        <li>Prescription files stored privately with authenticated access only.</li>
        <li>Batch and expiry recorded on every invoice; expired stock is never sold.</li>
        <li>Hospital referral rewards for patients discharged from partner hospitals.</li>
        <li>Support on phone, WhatsApp and email through working hours.</li>
      </ul>

      <div className="mt-8 flex flex-wrap gap-2">
        <Button asChild><Link to="/products">Browse products</Link></Button>
        <Button asChild variant="outline"><Link to="/contact">Talk to us</Link></Button>
      </div>
    </div>
  );
}
