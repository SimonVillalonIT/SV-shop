import Header from "@/components/catalog/header";
import * as React from "react";

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="w-full h-full flex flex-col flex-1 mt-20">{children}</main>
    </>
  );
}
