import type { Metadata } from "next";
import '../globals.css';

export const metadata: Metadata = {
  title: "Fragment42 | Project Details",
  description: "Detailed information about projects created by Fragment42 web design studio.",
  keywords: "web design, projects, portfolio, Fragment42, case studies",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
