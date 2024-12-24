import { Roboto } from "next/font/google";
import "@/app/globals.css";

export const metadata = {
  title: "ToDo List",
  description: "ToDo List",
};

const font = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
