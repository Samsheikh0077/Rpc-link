document.getElementById("addRpcBtn").addEventListener("click", async () => {
    if (window.ethereum) {
        try {
            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: "0x38",  // BSC Chain ID in HEX (56 Decimal = 0x38 Hex)
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
        } catch (error) {
            document.getElementById("status").innerText = "❌ Error Adding RPC: " + error.message;
        }
    } else {
        document.getElementById("status").innerText = "❌ Trust Wallet or MetaMask Not Detected!";
    }
});
