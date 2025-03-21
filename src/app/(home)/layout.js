import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Drawer from "@/components/drawer";
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
export const metadata = {
  title: "Talent Academy - Expert Interview Preparation (Free) | Services Selection Board (SSB) Coaching",
  description: "Unlock your potential with our free comprehensive services selection board (SSB) interview preparation, coaching, and training programs for defense, government, and corporate jobs.",
  keywords: "SSB Interview, Services Selection Board, SSB, free SSB, ssb, Interview Preparation, Coaching, Defense Jobs, Government Jobs, Corporate Jobs",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <meta name="google-site-verification" content="HmRL97VVk4_Hcx8Qr4WnPpECY_In6ouYlKkzpDJozL0" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
        <AppProvider>
        <div className="h-screen bg-white w-screen overflow-hidden">
        <div className="h-[8vh] w-screen"><Navbar/></div>
        <audio src="/alert_sound.mp3" className="hidden"></audio>
        <div className="h-[92vh] w-screen bg-white text-black flex ">
          <Drawer/>
  {children}
  </div>
        </div></AppProvider></body>
    </html>
  );
}
