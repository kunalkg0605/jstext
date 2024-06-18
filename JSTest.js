let nftcollection = [];
function mintNFT(name, description, owner, nftType, blockchain) {
    const nft = {
        name: name,
        description: description,
        owner: owner,
        nftType: nftType,
        blockchain: blockchain
    };
    nftcollection.push(nft);
}

function listNFTs() {
    for (let i = 0; i < nftcollection.length; i++) {
        console.log("NFT: " + (i + 1));
        console.log("Name: " + nftcollection[i].name);
        console.log("Description: " + nftcollection[i].description);
        console.log("Owner: " + nftcollection[i].owner);
        console.log("NFT Type: " + nftcollection[i].nftType);
        console.log("Blockchain: " + nftcollection[i].blockchain);
        console.log(" ");
    }
}

function getTotalsupply() {
    console.log("Total NFTs: " + nftcollection.length);
}

mintNFT("crypto ei", "A unique piece of digital art", "Kunal", "Art", "Bitcoin");
mintNFT("crypto Collectible123", "A collectible item", "Rohan", "Collectible", "Cardano");
mintNFT("Game Collector", "A collectible item in game", "Kuldeep", "Virtual Currency", "XRP");

listNFTs();
getTotalsupply();
