import { ReactChildren, ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    // flex items-start
    <div className="grid grid-cols-12 items-start">
      <Sidebar />
      <div className="w-full col-start-3 col-end-13">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
