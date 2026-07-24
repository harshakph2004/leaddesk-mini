import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "LeadDesk Mini | Better enquiries, clearly managed", description: "A lightweight lead-capture and management workspace." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
