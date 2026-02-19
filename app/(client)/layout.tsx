import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// TEMPORARILY COMMENTED OUT - Sanity Live
// import { SanityLive } from "@/sanity/lib/live";
import { Toaster } from "react-hot-toast";
// import { VisualEditing } from "next-sanity";
// import { draftMode } from "next/headers";
// import DisableDraftMode from "@/components/DisableDraftMode";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Lee Mart | Premium Streetwear",
  description: "Redefine Your Edge — Premium Men's Streetwear Collection.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <div>
        {/* TEMPORARILY COMMENTED OUT - Sanity Draft Mode
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
        */}
        <Header />
        {children}
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#000000",
              color: "#fff",
            },
          }}
        />
        {/* TEMPORARILY COMMENTED OUT - <SanityLive /> */}
      </div>
    </AuthProvider>
  );
}
