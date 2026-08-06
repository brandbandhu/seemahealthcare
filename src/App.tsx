import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileNav } from "@/components/site/MobileNav";
import { AuthProvider } from "@/context/AuthContext";
import { StoreProvider } from "@/context/StoreContext";
import { Toaster } from "@/components/ui/sonner";

import HomePage from "@/routes/index";
import AboutPage from "@/routes/about";
import CartPage from "@/routes/cart";
import CheckoutPage from "@/routes/checkout";
import ContactPage from "@/routes/contact";
import LoginPage from "@/routes/login";
import OffersPage from "@/routes/offers";
import OrderSuccessPage from "@/routes/order-success";
import ProductsPage from "@/routes/products.index";
import ProductDetailPage from "@/routes/products.$slug";
import RegisterPage from "@/routes/register";
import ReferralPage from "@/routes/referral";
import TrackOrderPage from "@/routes/track-order";
import UploadPrescriptionPage from "@/routes/upload-prescription";
import ArticlesPage from "@/routes/articles.index";
import ArticlePage from "@/routes/articles.$slug";
import PolicyPage from "@/routes/policies.$slug";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StoreProvider>
          <Routes>
            <Route element={<Shell />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="offers" element={<OffersPage />} />
              <Route path="order-success" element={<OrderSuccessPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="referral" element={<ReferralPage />} />
              <Route path="track-order" element={<TrackOrderPage />} />
              <Route path="upload-prescription" element={<UploadPrescriptionPage />} />
              <Route path="articles">
                <Route index element={<ArticlesPage />} />
                <Route path=":slug" element={<ArticlePage />} />
              </Route>
              <Route path="policies/:slug" element={<PolicyPage />} />
              <Route path="products">
                <Route index element={<ProductsPage />} />
                <Route path=":slug" element={<ProductDetailPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
          <Toaster position="top-center" richColors />
        </StoreProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

function Shell() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-24 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
