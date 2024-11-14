import "./globals.css";
import AosContainer from "@/components/Aos";

export const metadata = {
  title: "HooBank - JavaScript Mastery Design",
  description:
    "A responsive landing page transformed from JavaScript Mastery Academy's Figma design. Built by Ragab",
  icon: "/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AosContainer />
      <body className=" overflow-x-hidden">{children}</body>
    </html>
  );
}
