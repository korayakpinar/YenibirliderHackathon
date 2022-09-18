import 'styles/globals.css';
/* import {
  createClient,
  configureChains,
  defaultChains,
  WagmiConfig,
} from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import { SessionProvider } from "next-auth/react"
import { MoralisProvider } from "react-moralis"

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
])

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
}) */

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
