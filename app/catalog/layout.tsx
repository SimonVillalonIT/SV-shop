import * as React from "react";

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="w-full h-full flex flex-col flex-1">{children}</main>;
}
