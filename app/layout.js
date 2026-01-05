import "./globals.css";

export const metadata = {
  title: "Innovative Architecture, Timeless Elegance",
  description: "Crafting Dreams, Building Legacies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
