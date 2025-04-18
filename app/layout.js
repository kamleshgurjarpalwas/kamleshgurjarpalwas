import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "kamleshgurjarpalwas",
  description: "This is kamlesh gurjar palwas portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          <Navbar />
          <main className="flex-grow container mx-auto max-w-6xl">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
