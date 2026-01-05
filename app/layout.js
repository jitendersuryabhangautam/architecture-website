import "./globals.css";

export const metadata = {
  title: "Step One Design Studio - Architecture & Interior Design",
  description: "Crafting Dreams, Building Legacies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
