import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import '@solana/wallet-adapter-react-ui/styles.css'

// eslint-disable-next-line react/prop-types
const WalletContextProvider = ({ children }) => {
  const wallets = [new PhantomWalletAdapter()];

  return (
    <ConnectionProvider
      endpoint={
        "https://mainnet.helius-rpc.com/?api-key=784f3bd9-ef80-4e1f-af80-3023467ee4bd"
      }
    >
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletContextProvider;
