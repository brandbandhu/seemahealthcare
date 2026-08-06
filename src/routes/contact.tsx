import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supportEmail, supportPhone, supportWhatsApp } from "@/data/catalog";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Seema Healthcare — Support & Enquiries" },
      { name: "description", content: "Call, WhatsApp or email Seema Healthcare for order, prescription, delivery, refund or referral support." },
      { property: "og:title", content: "Contact Seema Healthcare" },
      { property: "og:description", content: "Support hours 9 am to 9 pm, all seven days." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-extrabold">Contact us</h1>
      <p className="text-sm text-muted-foreground">We reply to most enquiries within one working hour.</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <form
          className="card-soft space-y-4 p-5"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Enquiry submitted", { description: "Our support team will call you shortly." });
            (e.target as HTMLFormElement).reset();
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div><Label htmlFor="n">Name</Label><Input id="n" required placeholder="Your full name" className="mt-1" /></div>
            <div><Label htmlFor="m">Mobile</Label><Input id="m" type="tel" required placeholder="10-digit mobile" className="mt-1" /></div>
            <div><Label htmlFor="e">Email</Label><Input id="e" type="email" placeholder="you@example.com" className="mt-1" /></div>
            <div><Label htmlFor="o">Order number (optional)</Label><Input id="o" placeholder="SH-ORD-…" className="mt-1" /></div>
          </div>
          <div>
            <Label htmlFor="s">Subject</Label>
            <select id="s" className="mt-1 h-10 w-full rounded-md border bg-card px-3 text-sm">
              {["Order support", "Prescription query", "Delivery issue", "Refund request", "Referral and rewards", "Other"].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </div>
          <div><Label htmlFor="msg">Message</Label><Textarea id="msg" rows={4} required placeholder="How can we help?" className="mt-1" /></div>
          <Button type="submit">Submit enquiry</Button>
        </form>

        <aside className="space-y-4">
          <div className="card-soft space-y-3 p-5 text-sm">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> {supportPhone}</p>
            <p className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> WhatsApp {supportWhatsApp}</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> {supportEmail}</p>
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> Seema Healthcare, Ring Road, Nagpur, Maharashtra 440015</p>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> 9:00 am – 9:00 pm, all days</p>
          </div>
          <div className="card-soft grid h-40 place-items-center bg-muted text-sm text-muted-foreground">Map placeholder</div>
          <Button asChild variant="outline" className="w-full"><Link to="/">Read our FAQs</Link></Button>
        </aside>
      </div>
    </div>
  );
}
