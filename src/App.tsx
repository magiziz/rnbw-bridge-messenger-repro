import "./App.css";
import "viem/window";

await new Promise((resolve) => {
  if (typeof window.ethereum !== "undefined") {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        params: [],
      })
      .then(() => resolve(true));
  }
});

export default function App() {
  return <h2>eth_requestAccounts ✅</h2>;
}
