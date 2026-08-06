import { Navigate, useParams } from "react-router-dom";

const policies: Record<string, { title: string; intro: string; points: string[] }> = {
  "privacy-policy": {
    title: "Privacy Policy",
    intro: "We collect only the information needed to fulfil your order and protect health data with restricted access.",
    points: [
      "Personal and health data is stored on access-controlled systems.",
      "Prescription files are never placed in a publicly accessible folder.",
      "We never sell your data to third parties.",
      "You may request deletion of your account and stored documents.",
    ],
  },
  "terms-and-conditions": {
    title: "Terms and Conditions",
    intro: "By using Seema Healthcare you agree to order lawfully and provide accurate prescription information.",
    points: [
      "Accounts are personal; sharing login credentials is not permitted.",
      "Prices, offers and availability may change without notice.",
      "We may decline an order where a prescription cannot be verified.",
      "Misuse of referral codes may result in reward reversal.",
    ],
  },
  "shipping-policy": {
    title: "Shipping Policy",
    intro: "Standard delivery is Rs. 49 and free above Rs. 499. Express delivery is available on selected PIN codes.",
    points: [
      "Orders placed before 4 pm are dispatched the same working day.",
      "Delivery windows are estimates and may vary with weather or courier delays.",
      "Prescription orders ship only after pharmacist approval.",
      "Temperature-sensitive items ship in insulated packaging.",
    ],
  },
  "return-and-refund-policy": {
    title: "Return, Cancellation and Refund Policy",
    intro: "Sealed non-prescription products can be returned within 7 days of delivery.",
    points: [
      "Prescription and temperature-sensitive medicines are not returnable.",
      "Orders can be cancelled free of charge before dispatch.",
      "Approved refunds are initiated within 48 hours to the original payment method.",
      "Reward points used on a refunded order are returned to your balance.",
    ],
  },
  "prescription-policy": {
    title: "Prescription Upload Policy",
    intro: "Prescription medicines are dispensed only against a valid prescription from a registered practitioner.",
    points: [
      "The doctor's name, registration details, medicines and dosage must be readable.",
      "We may request a clearer copy before approving your order.",
      "Dosage written by your doctor cannot be altered by you or by us.",
      "Substitutions require authorised pharmacist review.",
    ],
  },
  "reward-points-policy": {
    title: "Reward Points Policy",
    intro: "1 point equals Rs. 1 and can be redeemed against a maximum of 10% of your cart value.",
    points: [
      "Points are credited after delivery is confirmed.",
      "Points are reversed on cancelled or refunded orders.",
      "Point balances cannot go negative and are non-transferable.",
      "Unused points expire 12 months after they are credited.",
    ],
  },
  "hospital-referral-terms": {
    title: "Hospital Referral Programme Terms",
    intro: "Customers referred by an associated hospital receive signup points and discounts on eligible orders.",
    points: [
      "One referral bonus per customer; self-referral is not permitted.",
      "Single-use codes cannot be reused across accounts.",
      "Referral discounts apply above the hospital's minimum order value.",
      "The administrator may verify or reject a referral manually.",
    ],
  },
  "medical-disclaimer": {
    title: "Medical Disclaimer",
    intro: "Seema Healthcare is an ordering and fulfilment platform, not a diagnosis service.",
    points: [
      "No content on this site constitutes medical advice.",
      "We do not claim any product cures a disease.",
      "Always consult your doctor or pharmacist before changing treatment.",
      "In an emergency, contact your nearest hospital immediately.",
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    intro: "We use essential cookies to keep you signed in and remember your cart.",
    points: [
      "Essential cookies cannot be disabled without breaking core features.",
      "Analytics cookies are used only in aggregate form.",
      "You can clear cookies from your browser settings at any time.",
      "We do not use cookies to profile health conditions.",
    ],
  },
};

export default function PolicyPage() {
  const { slug } = useParams();
  const policy = slug ? policies[slug] : undefined;

  if (!policy) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-extrabold">{policy.title}</h1>
      <p className="mt-3 text-sm text-muted-foreground">{policy.intro}</p>
      <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
        {policy.points.map((p: string) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-muted-foreground">
        Demonstration content. Replace with legally reviewed text before going live.
      </p>
    </div>
  );
}
