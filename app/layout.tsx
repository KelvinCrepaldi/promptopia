import Nav from "@components/Nav";
import "@styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
