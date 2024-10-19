import jetbrains_Mono from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";

const jetbrainsMono = jetbrains_Mono({
  src: "./fonts/JetBrainsMono-Italic-VariableFont_wght.ttf",
  variable: "--font-jetbrainsMono",
  weight: "100 900",
});

export const metadata = {
  title: "Abdul Waheed",
  description: "Web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} `}>
        <Header />
        <StairTransition />

        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
