import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "News Website",
  description: "LiveHindustan Clone using Next.js + Tailwindv3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
