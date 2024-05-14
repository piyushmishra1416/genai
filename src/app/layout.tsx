import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GenAI- Transform Ideas into App",
  description: "Transform ideas into app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>{children}+ </ThemeProvider>+{" "}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
