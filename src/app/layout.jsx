'use client'
import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalProvider } from './context/GlobalContext';
import Header from "./components/Header/Header";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <GlobalProvider>
        <html lang="pt-br">
          <body className={inter.className}>
              <Header/>
              {children}
          </body>
        </html>
    </GlobalProvider>
  );
}
