import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { toast } from "sonner";
import { coupons, hospitals, products, type Product } from "@/data/catalog";

export type CartLine = { slug: string; qty: number };

type StoreState = {
  cart: CartLine[];
  wishlist: string[];
  couponCode: string | null;
  hospitalCode: string | null;
  pointsUsed: number;
  pointsBalance: number;
  pincode: string | null;
};

type StoreValue = StoreState & {
  addToCart: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  toggleWishlist: (slug: string) => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  applyHospital: (code: string) => boolean;
  setPointsUsed: (n: number) => void;
  setPincode: (p: string) => void;
  lines: { product: Product; qty: number }[];
  totals: {
    mrpTotal: number;
    productDiscount: number;
    couponDiscount: number;
    hospitalDiscount: number;
    pointsDiscount: number;
    delivery: number;
    tax: number;
    payable: number;
    savings: number;
    itemCount: number;
    maxPoints: number;
    requiresRx: boolean;
  };
};

const KEY = "seema-healthcare-demo-store";
const initial: StoreState = {
  cart: [],
  wishlist: [],
  couponCode: null,
  hospitalCode: null,
  pointsUsed: 0,
  pointsBalance: 480,
  pincode: null,
};

const StoreContext = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StoreState>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setState({ ...initial, ...JSON.parse(raw) });
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const addToCart = useCallback((slug: string, qty = 1) => {
    const product = products.find((p) => p.slug === slug);
    if (!product) return;
    if (product.stock === 0) {
      toast.error("Out of stock", { description: `${product.name} is currently unavailable.` });
      return;
    }
    setState((s) => {
      const existing = s.cart.find((l) => l.slug === slug);
      const nextQty = Math.min((existing?.qty ?? 0) + qty, 10);
      return {
        ...s,
        cart: existing
          ? s.cart.map((l) => (l.slug === slug ? { ...l, qty: nextQty } : l))
          : [...s.cart, { slug, qty: Math.min(qty, 10) }],
      };
    });
    toast.success("Added to cart", {
      description: product.rx ? `${product.name} — prescription required` : product.name,
    });
  }, []);

  const setQty = useCallback((slug: string, qty: number) => {
    setState((s) => ({
      ...s,
      cart:
        qty <= 0
          ? s.cart.filter((l) => l.slug !== slug)
          : s.cart.map((l) => (l.slug === slug ? { ...l, qty: Math.min(qty, 10) } : l)),
    }));
  }, []);

  const removeFromCart = useCallback((slug: string) => {
    setState((s) => ({ ...s, cart: s.cart.filter((l) => l.slug !== slug) }));
    toast("Removed from cart");
  }, []);

  const clearCart = useCallback(() => {
    setState((s) => ({ ...s, cart: [], couponCode: null, pointsUsed: 0 }));
  }, []);

  const toggleWishlist = useCallback((slug: string) => {
    setState((s) => {
      const on = s.wishlist.includes(slug);
      toast(on ? "Removed from wishlist" : "Saved to wishlist");
      return {
        ...s,
        wishlist: on ? s.wishlist.filter((w) => w !== slug) : [...s.wishlist, slug],
      };
    });
  }, []);

  const applyCoupon = useCallback((code: string) => {
    const found = coupons.find((c) => c.code.toLowerCase() === code.trim().toLowerCase());
    if (!found) {
      toast.error("Invalid coupon code", { description: "Check the code and try again." });
      return false;
    }
    setState((s) => ({ ...s, couponCode: found.code }));
    toast.success(`${found.code} applied`, { description: found.benefit });
    return true;
  }, []);

  const removeCoupon = useCallback(() => setState((s) => ({ ...s, couponCode: null })), []);

  const applyHospital = useCallback((code: string) => {
    const found = hospitals.find((h) => h.code.toLowerCase() === code.trim().toLowerCase());
    if (!found) {
      toast.error("Referral code not recognised", { description: "Try SMH100, CCH210, SCD330, LCH440 or SMC550." });
      return false;
    }
    setState((s) => ({ ...s, hospitalCode: found.code }));
    toast.success(`${found.name} verified`, { description: `${found.discount}% referral discount unlocked.` });
    return true;
  }, []);

  const setPointsUsed = useCallback((n: number) => setState((s) => ({ ...s, pointsUsed: Math.max(0, n) })), []);
  const setPincode = useCallback((p: string) => setState((s) => ({ ...s, pincode: p })), []);

  const lines = useMemo(
    () =>
      state.cart
        .map((l) => ({ product: products.find((p) => p.slug === l.slug)!, qty: l.qty }))
        .filter((l) => Boolean(l.product)),
    [state.cart],
  );

  const totals = useMemo(() => {
    const mrpTotal = lines.reduce((a, l) => a + l.product.mrp * l.qty, 0);
    const subtotal = lines.reduce((a, l) => a + l.product.price * l.qty, 0);
    const productDiscount = mrpTotal - subtotal;

    const coupon = coupons.find((c) => c.code === state.couponCode);
    let couponDiscount = 0;
    if (coupon && subtotal >= coupon.min) {
      if (coupon.code === "FREESHIP" || coupon.max === 0) couponDiscount = 0;
      else couponDiscount = Math.min(Math.round(subtotal * 0.15), coupon.max);
    }

    const hospital = hospitals.find((h) => h.code === state.hospitalCode);
    const hospitalDiscount =
      hospital && subtotal >= hospital.minOrder
        ? Math.min(Math.round((subtotal * hospital.discount) / 100), hospital.maxDiscount)
        : 0;

    const maxPoints = Math.min(state.pointsBalance, Math.floor(subtotal * 0.1));
    const pointsDiscount = Math.min(state.pointsUsed, maxPoints);

    const freeShip = subtotal >= 499 || state.couponCode === "FREESHIP";
    const delivery = lines.length === 0 ? 0 : freeShip ? 0 : 49;
    const taxable = Math.max(0, subtotal - couponDiscount - hospitalDiscount - pointsDiscount);
    const tax = Math.round(taxable * 0.05);
    const payable = Math.max(0, taxable + tax + delivery);

    return {
      mrpTotal,
      productDiscount,
      couponDiscount,
      hospitalDiscount,
      pointsDiscount,
      delivery,
      tax,
      payable,
      savings: productDiscount + couponDiscount + hospitalDiscount + pointsDiscount,
      itemCount: lines.reduce((a, l) => a + l.qty, 0),
      maxPoints,
      requiresRx: lines.some((l) => l.product.rx),
    };
  }, [lines, state.couponCode, state.hospitalCode, state.pointsUsed, state.pointsBalance]);

  const value: StoreValue = {
    ...state,
    addToCart,
    setQty,
    removeFromCart,
    clearCart,
    toggleWishlist,
    applyCoupon,
    removeCoupon,
    applyHospital,
    setPointsUsed,
    setPincode,
    lines,
    totals,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
