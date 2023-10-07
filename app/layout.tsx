import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";

export const metadata = {
  title: "My Portfolio",
  description: "This is my personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
