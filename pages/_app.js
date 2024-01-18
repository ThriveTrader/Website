import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { ConvexClientProvider } from "../components/convex-provider";

function MyApp({ Component, pageProps }) {
  return (
    <ConvexClientProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ConvexClientProvider>
  );
}

export default MyApp;
