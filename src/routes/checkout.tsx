import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { inr, useStore } from "@/context/StoreContext";
import { hospitals } from "@/data/catalog";

const stepNames = ["Address", "Prescription", "Offers", "Delivery", "Payment", "Confirm"];

export default function CheckoutPage() {
  const { lines, totals, applyHospital, hospitalCode, clearCart } = useStore();
  const [step, setStep] = useState(0);
  const [address, setAddress] = useState("Flat 12, Green Residency, Ring Road, Nagpur 440015");
  const [refCode, setRefCode] = useState("");
  const [delivery, setDelivery] = useState("standard");
  const [payment, setPayment] = useState("upi");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <h1 className="text-xl font-bold">Nothing to check out</h1>
        <Button asChild className="mt-4">
          <Link to="/products">Shop products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <h1 className="text-2xl font-extrabold">Checkout</h1>
      <ol className="mt-4 flex flex-wrap gap-2 text-xs">
        {stepNames.map((s, i) => (
          <li
            key={s}
            className={`rounded-full border px-3 py-1 font-medium ${
              i === step ? "border-primary bg-primary text-primary-foreground" : i < step ? "border-success text-success" : "text-muted-foreground"
            }`}
          >
            {i + 1}. {s}
          </li>
        ))}
      </ol>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="card-soft space-y-4 p-5">
          {step === 0 && (
            <>
              <h2 className="text-base font-bold">Delivery address</h2>
              <Label htmlFor="addr">Full address</Label>
              <Textarea id="addr" value={address} onChange={(e) => setAddress(e.target.value)} rows={3} />
              <p className="text-xs text-muted-foreground">Saved as Home - set as default</p>
            </>
          )}
          {step === 1 && (
            <>
              <h2 className="text-base font-bold">Prescription</h2>
              <p className="text-sm text-muted-foreground">
                {totals.requiresRx
                  ? "Your cart contains prescription medicines. Dispatch happens only after pharmacist approval."
                  : "No prescription medicines in this cart."}
              </p>
              <Button asChild variant="outline">
                <Link to="/upload-prescription">Upload a new prescription</Link>
              </Button>
            </>
          )}
          {step === 2 && (
            <>
              <h2 className="text-base font-bold">Referral and offers</h2>
              <div className="flex gap-2">
                <Input value={refCode} onChange={(e) => setRefCode(e.target.value)} placeholder="Hospital referral code" aria-label="Hospital referral code" />
                <Button variant="outline" onClick={() => applyHospital(refCode)}>
                  Validate
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Associated hospitals: {hospitals.map((h) => h.code).join(", ")}
                {hospitalCode ? ` - applied: ${hospitalCode}` : ""}
              </p>
            </>
          )}
          {step === 3 && (
            <>
              <h2 className="text-base font-bold">Delivery option</h2>
              <RadioGroup value={delivery} onValueChange={setDelivery} className="space-y-2">
                {[
                  ["standard", "Standard delivery - 2-3 days"],
                  ["express", "Express delivery - next day (Rs. 99)"],
                ].map(([v, l]) => (
                  <div key={v} className="flex items-center gap-2">
                    <RadioGroupItem value={v!} id={v!} />
                    <Label htmlFor={v!} className="font-normal">
                      {l}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              <Label htmlFor="notes">Delivery instructions</Label>
              <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows={2} placeholder="Ring the bell twice" />
            </>
          )}
          {step === 4 && (
            <>
              <h2 className="text-base font-bold">Payment method</h2>
              <RadioGroup value={payment} onValueChange={setPayment} className="space-y-2">
                {[
                  ["upi", "UPI"],
                  ["card", "Debit / Credit card"],
                  ["netbanking", "Net banking"],
                  ["wallet", "Wallet"],
                  ["cod", "Cash on delivery"],
                ].map(([v, l]) => (
                  <div key={v} className="flex items-center gap-2">
                    <RadioGroupItem value={v!} id={`pay-${v}`} />
                    <Label htmlFor={`pay-${v}`} className="font-normal">
                      {l}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              <p className="text-xs text-muted-foreground">Demo mode - no real payment is processed.</p>
            </>
          )}
          {step === 5 && (
            <>
              <h2 className="text-base font-bold">Review and place order</h2>
              <dl className="space-y-1 text-sm text-muted-foreground">
                <div>
                  <dt className="inline font-semibold text-foreground">Address: </dt>
                  <dd className="inline">{address}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-foreground">Delivery: </dt>
                  <dd className="inline">{delivery}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-foreground">Payment: </dt>
                  <dd className="inline">{payment.toUpperCase()}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold text-foreground">Items: </dt>
                  <dd className="inline">{totals.itemCount}</dd>
                </div>
              </dl>
              <p className="text-xs text-muted-foreground">By placing this order you accept the terms and prescription policy.</p>
            </>
          )}

          <div className="flex justify-between pt-2">
            <Button variant="ghost" disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
              Back
            </Button>
            {step < 5 ? (
              <Button onClick={() => setStep((s) => s + 1)}>Continue</Button>
            ) : (
              <Button
                onClick={() => {
                  toast.success("Order placed");
                  clearCart();
                  navigate("/order-success");
                }}
              >
                Place Order
              </Button>
            )}
          </div>
        </div>

        <aside className="card-soft h-fit p-5 text-sm">
          <h2 className="text-base font-bold">Summary</h2>
          <Separator className="my-3" />
          <div className="flex justify-between">
            <span className="text-muted-foreground">Items</span>
            <span>{totals.itemCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Savings</span>
            <span className="text-success">{inr(totals.savings)}</span>
          </div>
          <div className="mt-2 flex justify-between text-base font-extrabold">
            <span>Payable</span>
            <span>{inr(totals.payable)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
