import type { Metadata } from "next";
import { Inter ,Poppins ,Plus_Jakarta_Sans as FontSans} from "next/font/google";
import "./globals.css";
import { cn }  from '@/lib/utils'
import { ThemeProvider } from "@/components/Theme-provider";
// const inter = Inter({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Qmm Hospital",
  description: "heath care management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  
      <body className={cn("min-h-full bg-dark-300 font-sans antialiased", fontSans.variable)}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark">        {children}</ThemeProvider>
</body>

    </html>
  );
}
