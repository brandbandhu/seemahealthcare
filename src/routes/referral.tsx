import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { hospitals } from "@/data/catalog";
import { useStore } from "@/context/StoreContext";

const ledger = [
  ["RWD-1041", "06 Aug 2026", "Signup bonus - Seema Multispeciality", 100, 0, 100],
  ["RWD-1042", "12 Aug 2026", "Order SH-ORD-0118 points earned", 64, 0, 164],
  ["RWD-1043", "19 Aug 2026", "Redeemed on order SH-ORD-0126", 0, 80, 84],
  ["RWD-1044", "02 Sep 2026", "Festival bonus campaign", 250, 0, 334],
  ["RWD-1045", "21 Sep 2026", "Repeat order points", 146, 0, 480],
] as const;

export default function ReferralPage() {
  const { applyHospital, hospitalCode } = useStore();
  const [code, setCode] = useState("");

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-extrabold">Hospital referral and rewards</h1>
      <p className="text-sm text-muted-foreground">
        1 point = Rs. 1 - redeem up to 10% of any cart - 100-point signup bonus for referred customers.
      </p>

      <div className="card-soft mt-6 flex flex-wrap items-end gap-3 p-5">
        <div className="min-w-0 flex-1">
          <label htmlFor="ref" className="text-sm font-semibold">
            Enter your hospital referral code
          </label>
          <Input id="ref" value={code} onChange={(e) => setCode(e.target.value)} placeholder="e.g. SMH100" />
        </div>
        <Button onClick={() => applyHospital(code)}>Check Eligibility</Button>
        {hospitalCode && <Badge className="bg-success text-success-foreground">Verified - {hospitalCode}</Badge>}
      </div>

      <h2 className="mt-8 text-xl font-bold">Associated hospitals</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {hospitals.map((h) => (
          <article key={h.code} className="card-soft p-5">
            <h3 className="text-base font-bold">{h.name}</h3>
            <p className="text-xs text-muted-foreground">
              {h.city} - Code {h.code}
            </p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Referral discount: {h.discount}%</li>
              <li>Points multiplier: {h.multiplier}x</li>
              <li>
                Minimum order: Rs. {h.minOrder} - Max discount: Rs. {h.maxDiscount}
              </li>
            </ul>
          </article>
        ))}
      </div>

      <h2 className="mt-8 text-xl font-bold">Reward ledger</h2>
      <div className="card-soft mt-3 overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="border-b text-left text-xs uppercase text-muted-foreground">
            <tr>
              {["Transaction", "Date", "Description", "Credit", "Debit", "Balance"].map((h) => (
                <th key={h} className="p-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ledger.map((r) => (
              <tr key={r[0]} className="border-b last:border-0">
                <td className="p-3 font-medium">{r[0]}</td>
                <td className="p-3 text-muted-foreground">{r[1]}</td>
                <td className="p-3 text-muted-foreground">{r[2]}</td>
                <td className="p-3 text-success">{r[3] || "-"}</td>
                <td className="p-3 text-destructive">{r[4] || "-"}</td>
                <td className="p-3 font-semibold">{r[5]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card-soft mt-6 p-5 text-sm text-muted-foreground">
        <h2 className="text-base font-bold text-foreground">Programme terms</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>One referral bonus per customer. Self-referral and reused single-use codes are rejected.</li>
          <li>Points are not credited on cancelled or refunded orders and cannot go negative.</li>
          <li>Referral status moves through Pending Verification, Verified, Rejected or Expired.</li>
          <li>All values are configurable by the administrator and shown here as demonstration data.</li>
        </ul>
      </div>
    </div>
  );
}
