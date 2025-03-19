import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreProvider from "./store/storeProvider";
import LoadingOverlayComponent from "./components/LoadingOverlayComponent";
import "bootstrap-icons/font/bootstrap-icons.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Pack",
  description: "Web Application",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StoreProvider>
          <LoadingOverlayComponent />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
