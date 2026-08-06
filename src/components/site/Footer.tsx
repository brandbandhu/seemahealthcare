import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ShieldCheck, Youtube } from "lucide-react";
import { categories, supportEmail, supportPhone, supportWhatsApp } from "@/data/catalog";

const policies = [
  { slug: "privacy-policy", label: "Privacy Policy" },
  { slug: "terms-and-conditions", label: "Terms and Conditions" },
  { slug: "shipping-policy", label: "Shipping Policy" },
  { slug: "return-and-refund-policy", label: "Return, Cancellation & Refund" },
  { slug: "prescription-policy", label: "Prescription Upload Policy" },
  { slug: "reward-points-policy", label: "Reward Points Policy" },
  { slug: "hospital-referral-terms", label: "Hospital Referral Terms" },
  { slug: "medical-disclaimer", label: "Medical Disclaimer" },
  { slug: "cookie-policy", label: "Cookie Policy" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t bg-card pb-28 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="text-base font-extrabold">Seema Healthcare</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Trusted Healthcare Delivered to Your Doorstep. Medicines, wellness and care - all in one place, with
            pharmacist-verified prescriptions and transparent pricing.
          </p>
          <div className="mt-4 flex gap-2">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <span
                key={i}
                className="grid h-9 w-9 place-items-center rounded-full border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold">Shop categories</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {categories.slice(0, 8).map((c) => (
              <li key={c.slug}>
                <Link to={`/products?category=${c.slug}`} className="hover:text-primary">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold">Customer support</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/upload-prescription" className="hover:text-primary">
                Upload prescription
              </Link>
            </li>
            <li>
              <Link to="/track-order" className="hover:text-primary">
                Track order
              </Link>
            </li>
            <li>
              <Link to="/referral" className="hover:text-primary">
                Referral rewards
              </Link>
            </li>
            <li>
              <Link to="/offers" className="hover:text-primary">
                Offers and coupons
              </Link>
            </li>
            <li>
              <Link to="/articles" className="hover:text-primary">
                Health articles
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold">Get in touch</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" /> {supportPhone}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" /> WhatsApp {supportWhatsApp}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" /> {supportEmail}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Seema Healthcare, Ring Road, Nagpur, Maharashtra 440015
            </li>
          </ul>
          <h3 className="mt-6 text-sm font-bold">Policies</h3>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
            {policies.map((p) => (
              <li key={p.slug}>
                <Link to={`/policies/${p.slug}`} className="hover:text-primary">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto max-w-7xl space-y-2 px-4 py-5 text-xs text-muted-foreground">
          <p>
            <strong className="text-foreground">Medical disclaimer:</strong> Seema Healthcare is an ordering and
            fulfilment platform, not a diagnosis service. Content here is general information only. Always consult your
            doctor or pharmacist. In an emergency, contact your nearest hospital immediately.
          </p>
          <p>
            This site is a demonstration build. All products, prices, hospitals, doctors, articles and reviews shown are
            sample data.
          </p>
          <p>(c) {new Date().getFullYear()} Seema Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
