import React, { useState } from "react";
import { Navbar } from "@/components/shared/navbar";
import { Link } from "@nextui-org/link";

import ThemeContext from "@/context/themeContext";
import { Providers } from "./providers";
import { nunito } from "@/config/fonts";

const defaultTheme = "dark";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<string>(defaultTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={nunito.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-8 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="/"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">Country app</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </div>
    </ThemeContext.Provider>
  );
}
