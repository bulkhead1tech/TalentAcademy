import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar";
import { AppProvider } from "@/components/appcontext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Talent Academy",
  description: "Services selection board interview preparation",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <meta name="google-site-verification" content="HmRL97VVk4_Hcx8Qr4WnPpECY_In6ouYlKkzpDJozL0" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >      
      <AppProvider>
        <div className="h-screen bg-white w-screen overflow-x-hidden">
        <div className="h-[8vh] w-screen"><Navbar/></div>
        <div className="h-[92vh] w-screen text-black flex ">
  {children}
</div>
        </div>
        </AppProvider>
        </body>
    </html>
  );
}

