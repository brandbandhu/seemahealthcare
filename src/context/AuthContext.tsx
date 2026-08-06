import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";

export type DemoAuthUser = {
  customerId: string;
  fullName: string;
  username: string;
  phone: string;
  email?: string;
  dob?: string;
  gender?: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  referredByHospital: boolean;
  hospital?: string;
  doctor?: string;
  referralCode?: string;
  status: "Active" | "Inactive" | "Suspended" | "Blocked";
  password: string;
};

export type RegisterInput = Omit<DemoAuthUser, "customerId" | "status"> & {
  confirmPassword: string;
  otp: string;
  acceptTerms: boolean;
  acceptPrivacy: boolean;
};

export type LoginResult =
  | { ok: true; user: DemoAuthUser }
  | { ok: false; error: string };

export type RegisterResult = LoginResult;

type AuthContextValue = {
  user: DemoAuthUser | null;
  login: (identifier: string, password: string) => LoginResult;
  register: (payload: RegisterInput) => RegisterResult;
  logout: () => void;
};

const USERS_KEY = "seema-healthcare-demo-users";
const SESSION_KEY = "seema-healthcare-demo-session";

const seedUsers: DemoAuthUser[] = [
  {
    customerId: "SHC-1001",
    fullName: "Demo Customer",
    username: "demo.customer",
    phone: "9999999999",
    email: "customer@seemahealthcare.demo",
    dob: "1994-08-06",
    gender: "Female",
    address: "123 Demo Street, Civil Lines",
    city: "Nagpur",
    state: "Maharashtra",
    pincode: "440001",
    referredByHospital: true,
    hospital: "Seema Multispeciality Hospital",
    doctor: "Dr. Anita Deshmukh",
    referralCode: "SMH100",
    status: "Active",
    password: "Demo@123",
  },
];

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<DemoAuthUser[]>(seedUsers);
  const [user, setUser] = useState<DemoAuthUser | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const rawUsers = localStorage.getItem(USERS_KEY);
      if (rawUsers) setUsers(JSON.parse(rawUsers));
      const rawSession = localStorage.getItem(SESSION_KEY);
      if (rawSession) setUser(JSON.parse(rawSession));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    else localStorage.removeItem(SESSION_KEY);
  }, [hydrated, users, user]);

  const nextCustomerId = useMemo(() => {
    const maxId = users.reduce((max, current) => {
      const num = Number(current.customerId.replace(/\D/g, ""));
      return Number.isFinite(num) && num > max ? num : max;
    }, 1000);
    return `SHC-${String(maxId + 1).padStart(4, "0")}`;
  }, [users]);

  const login = (identifier: string, password: string): LoginResult => {
    const normalized = identifier.trim().toLowerCase();
    const found = users.find(
      (item) =>
        item.username.toLowerCase() === normalized ||
        item.phone === normalized ||
        (item.email?.toLowerCase() ?? "") === normalized,
    );

    if (!found) {
      return { ok: false, error: "We could not find that account. Try the demo customer or register a new one." };
    }

    if (found.password !== password) {
      return { ok: false, error: "Password does not match this account." };
    }

    setUser(found);
    toast.success("Signed in successfully", { description: `Welcome back, ${found.fullName}.` });
    return { ok: true, user: found };
  };

  const register = (payload: RegisterInput): RegisterResult => {
    const username = payload.username.trim().toLowerCase();
    const phone = payload.phone.trim();
    const email = payload.email?.trim().toLowerCase();

    if (payload.password !== payload.confirmPassword) {
      return { ok: false, error: "Passwords do not match." };
    }

    if (payload.otp.trim() !== "123456") {
      return { ok: false, error: "Demo OTP is 123456." };
    }

    if (!payload.acceptTerms || !payload.acceptPrivacy) {
      return { ok: false, error: "Please accept the terms and privacy policy." };
    }

    const duplicate = users.find(
      (item) =>
        item.username.toLowerCase() === username ||
        item.phone === phone ||
        (email && item.email?.toLowerCase() === email),
    );

    if (duplicate) {
      return { ok: false, error: "Username, phone number or email already exists." };
    }

    const next: DemoAuthUser = {
      customerId: nextCustomerId,
      fullName: payload.fullName.trim(),
      username: payload.username.trim(),
      phone: payload.phone.trim(),
      email: payload.email?.trim() || undefined,
      dob: payload.dob || undefined,
      gender: payload.gender || undefined,
      address: payload.address.trim(),
      city: payload.city.trim(),
      state: payload.state.trim(),
      pincode: payload.pincode.trim(),
      referredByHospital: payload.referredByHospital,
      hospital: payload.referredByHospital ? payload.hospital?.trim() || undefined : undefined,
      doctor: payload.doctor?.trim() || undefined,
      referralCode: payload.referralCode?.trim() || undefined,
      status: "Active",
      password: payload.password,
    };

    setUsers((current) => [...current, next]);
    setUser(next);
    toast.success("Account created", { description: `Welcome to Seema Healthcare, ${next.fullName}.` });
    return { ok: true, user: next };
  };

  const logout = () => {
    setUser(null);
    toast("Signed out");
  };

  const value: AuthContextValue = { user, login, register, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
