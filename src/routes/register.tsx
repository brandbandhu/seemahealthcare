import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Gift, Sparkles, UserRound } from "lucide-react";
import { type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { hospitals } from "@/data/catalog";
import { useAuth } from "@/context/AuthContext";
import rxImg from "@/assets/prescription-upload.jpg";

const registerSchema = z
  .object({
    fullName: z.string().min(2, "Enter the full name."),
    username: z.string().min(3, "Username must be at least 3 characters."),
    phone: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string().min(8, "Confirm your password."),
    email: z.string().email("Enter a valid email address.").optional().or(z.literal("")),
    dob: z.string().optional().or(z.literal("")),
    gender: z.string().optional().or(z.literal("")),
    address: z.string().min(6, "Enter the full delivery address."),
    city: z.string().min(2, "Enter the city."),
    state: z.string().min(2, "Enter the state."),
    pincode: z.string().regex(/^\d{6}$/, "Enter a valid 6-digit PIN code."),
    referredByHospital: z.boolean().default(false),
    hospital: z.string().optional().or(z.literal("")),
    doctor: z.string().optional().or(z.literal("")),
    referralCode: z.string().optional().or(z.literal("")),
    otp: z.string().regex(/^\d{6}$/, "Enter the 6-digit demo OTP."),
    acceptTerms: z.boolean().refine((value) => value, "Accept the Terms and Conditions."),
    acceptPrivacy: z.boolean().refine((value) => value, "Accept the Privacy Policy."),
  })
  .superRefine((values, ctx) => {
    if (values.password !== values.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "Passwords do not match.",
      });
    }

    if (values.referredByHospital && !values.hospital) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["hospital"],
        message: "Select the referring hospital.",
      });
    }
  });

type RegisterForm = z.infer<typeof registerSchema>;

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register - Seema Healthcare" },
      {
        name: "description",
        content: "Create a Seema Healthcare account to order medicines, upload prescriptions and track deliveries.",
      },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const { user, register, logout } = useAuth();

  const {
    register: formRegister,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      username: "",
      phone: "",
      password: "",
      confirmPassword: "",
      email: "",
      dob: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      referredByHospital: false,
      hospital: "",
      doctor: "",
      referralCode: "",
      otp: "123456",
      acceptTerms: false,
      acceptPrivacy: false,
    },
  });

  const referredByHospital = watch("referredByHospital");

  const onSubmit = (values: RegisterForm) => {
    const result = register(values);
    if (!result.ok) {
      toast.error(result.error);
      return;
    }
    navigate({ to: "/" });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:py-12">
      <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground">Register</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_500px] lg:items-start">
        <section className="space-y-6">
          <div>
            <Badge className="bg-teal/15 text-foreground hover:bg-teal/15">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Customer registration
            </Badge>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Create your Seema Healthcare account
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Register once, then log in to order medicines, upload prescriptions, track deliveries and earn hospital
              referral rewards.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: UserRound, title: "Personal account", text: "One profile for orders and rewards." },
              { icon: BadgeCheck, title: "Demo verification", text: "OTP 123456 verifies the registration flow." },
              { icon: Gift, title: "Hospital rewards", text: "Referred users get bonus points and discounts." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="card-soft p-5">
                <Icon className="h-5 w-5 text-primary" />
                <h2 className="mt-3 text-sm font-bold">{title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>

          <div className="card-soft overflow-hidden">
            <img
              src={rxImg}
              alt="Prescription upload on a phone"
              className="h-64 w-full object-cover sm:h-80 lg:h-[440px]"
              loading="lazy"
            />
            <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">How it works</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill the form, verify the demo OTP, and get redirected to the homepage as a signed-in customer.
                </p>
              </div>
              <div className="rounded-2xl bg-muted p-4 text-sm">
                <p className="font-semibold">Demo OTP</p>
                <p className="mt-1 text-muted-foreground">
                  Use <span className="font-semibold text-foreground">123456</span> for the registration verification
                  step.
                </p>
              </div>
            </div>
          </div>
        </section>

        <aside className="card-soft space-y-5 p-5 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Create account</p>
            <h2 className="mt-1 text-2xl font-extrabold">Register as a customer</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fields marked required are needed to create your demo account.
            </p>
          </div>

          {user && (
            <div className="rounded-2xl border border-success/20 bg-success/10 p-4 text-sm">
              <p className="font-semibold text-success">You already have a signed-in account</p>
              <p className="mt-1 text-muted-foreground">
                Current account: <span className="font-semibold text-foreground">{user.fullName}</span>
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button asChild size="sm">
                  <Link to="/">Go home</Link>
                </Button>
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              </div>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <Section title="Account details">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" error={errors.fullName?.message}>
                  <Input {...formRegister("fullName")} placeholder="Enter full name" />
                </Field>
                <Field label="Username" error={errors.username?.message}>
                  <Input {...formRegister("username")} placeholder="Choose a username" />
                </Field>
                <Field label="Mobile number" error={errors.phone?.message}>
                  <Input {...formRegister("phone")} inputMode="numeric" placeholder="10-digit phone" />
                </Field>
                <Field label="Email address" error={errors.email?.message}>
                  <Input {...formRegister("email")} type="email" placeholder="Optional email" />
                </Field>
                <Field label="Password" error={errors.password?.message}>
                  <Input {...formRegister("password")} type="password" placeholder="Create password" />
                </Field>
                <Field label="Confirm password" error={errors.confirmPassword?.message}>
                  <Input {...formRegister("confirmPassword")} type="password" placeholder="Repeat password" />
                </Field>
              </div>
            </Section>

            <Section title="Personal info">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Date of birth" error={errors.dob?.message}>
                  <Input {...formRegister("dob")} type="date" />
                </Field>
                <Field label="Gender" error={errors.gender?.message}>
                  <select
                    {...formRegister("gender")}
                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="">Select gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </Field>
              </div>
            </Section>

            <Section title="Delivery details">
              <div className="space-y-4">
                <Field label="Complete delivery address" error={errors.address?.message}>
                  <Textarea {...formRegister("address")} rows={3} placeholder="House / street / locality" />
                </Field>
                <div className="grid gap-4 sm:grid-cols-3">
                  <Field label="City" error={errors.city?.message}>
                    <Input {...formRegister("city")} placeholder="City" />
                  </Field>
                  <Field label="State" error={errors.state?.message}>
                    <Input {...formRegister("state")} placeholder="State" />
                  </Field>
                  <Field label="PIN code" error={errors.pincode?.message}>
                    <Input {...formRegister("pincode")} inputMode="numeric" placeholder="6-digit PIN" />
                  </Field>
                </div>
              </div>
            </Section>

            <Section title="Hospital referral">
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
                    {...formRegister("referredByHospital")}
                  />
                  Referred by a hospital
                </label>
                {referredByHospital && (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Hospital" error={errors.hospital?.message}>
                      <select
                        {...formRegister("hospital")}
                        className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                      >
                        <option value="">Select hospital</option>
                        {hospitals.map((hospital) => (
                          <option key={hospital.code} value={hospital.name}>
                            {hospital.name}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Doctor name" error={errors.doctor?.message}>
                      <Input {...formRegister("doctor")} placeholder="Optional doctor name" />
                    </Field>
                    <Field label="Hospital referral code" error={errors.referralCode?.message}>
                      <Input {...formRegister("referralCode")} placeholder="Optional code" />
                    </Field>
                    <div className="rounded-2xl bg-muted p-4 text-sm text-muted-foreground">
                      If you have a referral code, enter it here to unlock bonus points after verification.
                    </div>
                  </div>
                )}
              </div>
            </Section>

            <Section title="Verification and consent">
              <div className="space-y-4">
                <Field label="Demo OTP" error={errors.otp?.message}>
                  <Input {...formRegister("otp")} inputMode="numeric" placeholder="123456" />
                </Field>

                <div className="space-y-3">
                  <CheckField error={errors.acceptTerms?.message}>
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
                      {...formRegister("acceptTerms")}
                    />
                    <span>I accept the Terms and Conditions.</span>
                  </CheckField>

                  <CheckField error={errors.acceptPrivacy?.message}>
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
                      {...formRegister("acceptPrivacy")}
                    />
                    <span>I accept the Privacy Policy.</span>
                  </CheckField>
                </div>
              </div>
            </Section>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              Create account
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-primary hover:underline">
              Login here
            </Link>
          </p>
        </aside>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">{title}</p>
      {children}
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium">{label}</span>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </label>
  );
}

function CheckField({
  children,
  error,
}: {
  children: ReactNode;
  error?: string;
}) {
  return (
    <label className="flex items-start gap-2 text-sm text-muted-foreground">
      {children}
      {error && <span className="ml-6 text-xs text-destructive">{error}</span>}
    </label>
  );
}
