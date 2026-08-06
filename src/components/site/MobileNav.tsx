import { NavLink } from "react-router-dom";
import { Home, LayoutGrid, ShoppingCart, Upload, Gift } from "lucide-react";
import { useStore } from "@/context/StoreContext";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/products", label: "Shop", icon: LayoutGrid },
  { to: "/upload-prescription", label: "Upload", icon: Upload },
  { to: "/referral", label: "Rewards", icon: Gift },
  { to: "/cart", label: "Cart", icon: ShoppingCart },
] as const;

export function MobileNav() {
  const { totals } = useStore();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
      <ul className="mx-auto grid max-w-lg grid-cols-5">
        {items.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `relative flex flex-col items-center gap-0.5 px-1 py-2 text-[10px] font-medium text-muted-foreground sm:text-[11px] ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              <Icon className="h-5 w-5" />
              {label}
              {to === "/cart" && totals.itemCount > 0 && (
                <span className="absolute right-4 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[10px] text-accent-foreground">
                  {totals.itemCount}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
