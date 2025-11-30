import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Win Craft UPVC | Doors & Windows",
  description:
    "Win Craft UPVC designs and installs premium uPVC windows and doors across Lahore with German hardware and expert fabrication.",
  icons: {
    icon: "/upvc.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
