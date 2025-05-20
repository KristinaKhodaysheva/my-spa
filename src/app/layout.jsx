import {Header} from "@/components/Header";
import "./globals.css"
import {Footer} from "@/components/Footer";

export const metadata = {
  title: "React Recipes",
  description: "React recipes app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Header />
        <main className="conteiner mx-auto my-4 min-h-[calc(100vh - 64px - 92px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
