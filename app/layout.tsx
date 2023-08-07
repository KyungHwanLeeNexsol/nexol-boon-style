import SideBar from "@/components/SideBar";
import "../public/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.css";
import type { Metadata } from "next";
import "normalize.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Nexsol bo:on style guide",
  description: "넥솔 보온 컴포넌트 guide",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <div className="container flex w-100 max-w-7xl">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
