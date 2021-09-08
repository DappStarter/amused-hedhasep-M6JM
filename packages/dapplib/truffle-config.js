require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift reflect night minimum gesture open foster gaze'; 
let testAccounts = [
"0x270b469661ec72ed806246ec1ef2bf68948b4e6661504de1dedce8c4158e1ed9",
"0x7cdf3f9cb586aa6c72c85840e719e21928b81c148d560a717bf4108f55034964",
"0xd647f96f7358b323a9e8056ac7fbea2c702ecc192ad2b3adb96e0a9a29b6a4d1",
"0x981b2ef5cc20a3ffe0545837d66995af59662b65b0ec75f7f19ef8350e0906ec",
"0xa21c953417a51594be1a11618cdb6a0205a8e05a6e999f89755518ea5fdd562e",
"0x1ad769f529760d65eed44d379daea5d34673767c3fac5f78591a8972ad006b9b",
"0x4667b8613bee53e5b3cc279f100803ca93b3700682050e942a4e02b2de37ce73",
"0x8c5b8d819f40fbc60b5ffe6ca41c0572c133f7e098fad07cbe6d2de37c36dd38",
"0xcbea8aeea36295a6ca1139fff0768840ced2e8b0c1e28d90ac3c82c34ca7f738",
"0xbbb8449c601138e9a56fb750321e879837ac5a8f50cb78577b3afab872fe323b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


