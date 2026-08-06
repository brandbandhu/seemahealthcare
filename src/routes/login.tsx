import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, LockKeyhole, ShieldCheck, UserRound } from "lucide-react";
import { useMemo, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/context/AuthContext";
import heroImg from "@/assets/hero-pharmacy.jpg";

const loginSchema = z.object({
  identifier: z.string().min(1, "Enter your username, phone number or email."),
  password: z.string().min(1, "Enter your password."),
  rememberMe: z.boolean().default(true),
});

type LoginForm = z.infer<typeof loginSchema>;

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login - Seema Healthcare" },
      {
        name: "description",
        content: "Sign in to your Seema Healthcare customer account using username, phone number or email.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const { user, login, logout } = useAuth();
  const demo = useMemo(
    () => [
      { label: "Username", value: "demo.customer" },
      { label: "Phone", value: "9999999999" },
      { label: "Email", value: "customer@seemahealthcare.demo" },
      { label: "Password", value: "Demo@123" },
    ],
    [],
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
      rememberMe: true,
    },
  });

  const onSubmit = (values: LoginForm) => {
    const result = login(values.identifier, values.password);
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
        <span className="text-foreground">Login</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center">
        <section className="space-y-6">
          <div>
            <Badge className="bg-teal/15 text-foreground hover:bg-teal/15">
              <ShieldCheck className="mr-1 h-3.5 w-3.5" />
              Secure customer portal
            </Badge>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Sign in to your Seema Healthcare account
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Access your cart, upload prescriptions, track orders and review rewards with one demo account.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: UserRound, title: "Customer dashboard", text: "See orders, refills and saved items." },
              { icon: LockKeyhole, title: "Private access", text: "All demo data stays in your browser." },
              { icon: BadgeCheck, title: "Fast checkout", text: "Continue where you left off after login." },
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
              src={heroImg}
              alt="Customer receiving a pharmacy parcel"
              className="h-64 w-full object-cover sm:h-80 lg:h-[440px]"
              loading="lazy"
            />
            <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Demo access</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use the sample credentials on the right to test the login flow immediately.
                </p>
              </div>
              <div className="rounded-2xl bg-muted p-4 text-sm">
                <p className="font-semibold">Need a quick reset?</p>
                <p className="mt-1 text-muted-foreground">
                  Use OTP <span className="font-semibold text-foreground">123456</span> in the registration flow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <aside className="card-soft space-y-5 p-5 sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Welcome back</p>
            <h2 className="mt-1 text-2xl font-extrabold">Login to your account</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Use username, phone number or email with your password.
            </p>
          </div>

          {user && (
            <div className="rounded-2xl border border-success/20 bg-success/10 p-4 text-sm">
              <p className="font-semibold text-success">You are already signed in</p>
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

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Field label="Username, phone or email" error={errors.identifier?.message}>
              <Input {...register("identifier")} placeholder="demo.customer or 9999999999" />
            </Field>

            <Field label="Password" error={errors.password?.message}>
              <Input {...register("password")} type="password" placeholder="Enter your password" />
            </Field>

            <div className="flex items-center justify-between gap-3">
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-input text-primary focus:ring-primary"
                  {...register("rememberMe")}
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-sm font-medium text-primary hover:underline"
                onClick={() => toast.info("Demo password reset OTP: 123456")}
              >
                Forgot password?
              </button>
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              Login
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>

          <div className="rounded-2xl bg-muted p-4">
            <p className="text-sm font-semibold">Demo login credentials</p>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
              {demo.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-3">
                  <span>{item.label}</span>
                  <code className="rounded bg-background px-2 py-1 text-xs font-semibold text-foreground">
                    {item.value}
                  </code>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            New here?{" "}
            <Link to="/register" className="font-semibold text-primary hover:underline">
              Create an account
            </Link>
          </p>
        </aside>
      </div>
    </div>
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
