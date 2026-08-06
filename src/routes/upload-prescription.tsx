import { useState, type FormEvent } from "react";
import { CheckCircle2, FileUp, Upload } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { doctors, hospitals } from "@/data/catalog";
import rxImg from "@/assets/prescription-upload.jpg";

export default function UploadPrescriptionPage() {
  const [files, setFiles] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [ref, setRef] = useState<string | null>(null);
  const [drag, setDrag] = useState(false);

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    const names = Array.from(list).map((f) => f.name);
    setFiles((f) => [...f, ...names]);
    toast.success(`${names.length} file(s) attached`);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      toast.error("Attach at least one prescription file");
      return;
    }
    if (!consent) {
      toast.error("Please accept the prescription consent");
      return;
    }
    const id = `SH-RX-${Math.floor(100000 + Math.random() * 899999)}`;
    setRef(id);
    toast.success("Prescription uploaded", { description: `Request ${id} - review in 30-60 minutes.` });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <h1 className="text-2xl font-extrabold">Upload your prescription</h1>
          <p className="text-sm text-muted-foreground">
            Our pharmacists review your prescription and send an itemised order value before anything is charged.
          </p>

          {ref && (
            <div className="mt-4 flex items-center gap-3 rounded-xl border border-success/40 bg-success/10 p-4 text-sm">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <p>
                Request <strong>{ref}</strong> received. Status: <Badge variant="secondary">Under Review</Badge> - estimated
                review time 30-60 minutes.
              </p>
            </div>
          )}

          <form onSubmit={submit} className="mt-5 space-y-5">
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDrag(true);
              }}
              onDragLeave={() => setDrag(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDrag(false);
                addFiles(e.dataTransfer.files);
              }}
              className={`card-soft flex flex-col items-center gap-2 border-dashed p-8 text-center ${drag ? "border-primary bg-primary/5" : ""}`}
            >
              <Upload className="h-8 w-8 text-primary" />
              <p className="text-sm font-semibold">Drag and drop your prescription here</p>
              <p className="text-xs text-muted-foreground">JPG, JPEG, PNG or PDF - up to 5 MB each - multiple files allowed</p>
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                <Label htmlFor="file" className="cursor-pointer rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted">
                  Browse files
                </Label>
                <Input id="file" type="file" multiple accept="image/*,application/pdf" className="hidden" onChange={(e) => addFiles(e.target.files)} />
                <Label htmlFor="camera" className="cursor-pointer rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted">
                  Use camera
                </Label>
                <Input id="camera" type="file" accept="image/*" capture="environment" className="hidden" onChange={(e) => addFiles(e.target.files)} />
              </div>
              {files.length > 0 && (
                <ul className="mt-3 w-full space-y-1 text-left text-xs">
                  {files.map((f, i) => (
                    <li key={`${f}-${i}`} className="flex items-center justify-between rounded-lg bg-muted px-3 py-2">
                      <span className="flex min-w-0 items-center gap-2 truncate">
                        <FileUp className="h-3.5 w-3.5 shrink-0" />
                        {f}
                      </span>
                      <button type="button" className="text-destructive" onClick={() => setFiles((p) => p.filter((_, x) => x !== i))}>
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="patient" label="Patient name" required />
              <Field id="age" label="Patient age" type="number" required />
              <Field id="mobile" label="Mobile number" type="tel" required />
              <div>
                <Label htmlFor="doctor">Doctor name</Label>
                <select id="doctor" className="mt-1 h-10 w-full rounded-md border bg-card px-3 text-sm">
                  <option value="">Select a doctor</option>
                  {doctors.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="hospital">Hospital / clinic</Label>
                <select id="hospital" className="mt-1 h-10 w-full rounded-md border bg-card px-3 text-sm">
                  <option value="">Select a hospital</option>
                  {hospitals.map((h) => (
                    <option key={h.code}>{h.name}</option>
                  ))}
                </select>
              </div>
              <Field id="rxdate" label="Prescription date" type="date" />
              <Field id="refcode" label="Referral code (optional)" />
              <Field id="deldate" label="Preferred delivery date" type="date" />
            </div>

            <div>
              <Label htmlFor="addr">Preferred delivery address</Label>
              <Textarea id="addr" rows={2} placeholder="House, street, city, state, PIN code" />
            </div>
            <div>
              <Label htmlFor="instr">Additional instructions</Label>
              <Textarea id="instr" rows={2} placeholder="Anything our pharmacist should know" />
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="consent" checked={consent} onCheckedChange={(v) => setConsent(Boolean(v))} />
              <Label htmlFor="consent" className="text-sm font-normal text-muted-foreground">
                I consent to Seema Healthcare storing my prescription, doctor and hospital details securely for order
                fulfilment.
              </Label>
            </div>

            <Button type="submit" size="lg">
              Submit prescription
            </Button>
          </form>
        </div>

        <aside className="space-y-4">
          <img src={rxImg} alt="Phone photographing a prescription" loading="lazy" width={1024} height={768} className="w-full rounded-2xl border" />
          <div className="card-soft p-5 text-sm text-muted-foreground">
            <h2 className="text-base font-bold text-foreground">Upload guidelines</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>The prescription must be fully readable.</li>
              <li>Doctor's name and registration details should be visible.</li>
              <li>Medicine names and dosage must be clear.</li>
              <li>Do not upload unrelated documents.</li>
              <li>Prescription medicines are reviewed before order confirmation.</li>
            </ul>
          </div>
          <div className="card-soft p-5 text-sm text-muted-foreground">
            <h2 className="text-base font-bold text-foreground">Prescription statuses</h2>
            <p className="mt-2">
              Uploaded - Under Review - Clearer Copy Required - Approved / Partially Approved / Rejected - Quotation
              Generated - Customer Approved - Converted to Order.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} required={required} className="mt-1" placeholder={label} />
    </div>
  );
}
