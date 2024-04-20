const ethers = require("ethers");
const provider = new ethers.JsonRpcProvider(`https://polygon-amoy.g.alchemy.com/v2/mHvKsUwxN0a596cxV4jbV1Tk6kdwR85T`);

const contractAddress = "0xace0f0d029c4d28318843929a715536458b5817b";

const contractAbi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_userAddress",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_userName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "_prover",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_ofIssuer",
                "type": "bool"
            }
        ],
        "name": "addDetails",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_data",
                "type": "string"
            }
        ],
        "name": "addUserData",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DeCertify_Invalid_User",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "DeCertify__AlreadyExists",
        "type": "error"
    },
    {
        "inputs": [],
        "name": "DeCertify__OnlyIssuerRequired",
        "type": "error"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_changeUserName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_changeEmail",
                "type": "string"
            }
        ],
        "name": "updateDetailsByUser",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_userAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "_userName",
                "type": "string"
            }
        ],
        "name": "UserSignIn",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "checkDetail",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "fetchDetail",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "userName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                    },
                    {
                        "internalType": "bool",
                        "name": "prover",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "isIssuer",
                        "type": "bool"
                    }
                ],
                "internalType": "struct DeCertify.Detail",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_email",
                "type": "string"
            }
        ],
        "name": "fetchUserData",
        "outputs": [
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "s_details",
        "outputs": [
            {
                "internalType": "string",
                "name": "userName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "email",
                "type": "string"
            },
            {
                "internalType": "bool",
                "name": "prover",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "isIssuer",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "s_userData",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const contractInteraction = async () => {
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);

    const contractName = await contract.name();
    console.log(`Contract name: ${contractName}`);

    const contractSymbol = await contract.symbol();
    console.log(`Contract symbol: ${contractSymbol}`);

    const contractTotalSupply = await contract.totalSupply();
    console.log(`Contract totalSupply: ${contractTotalSupply}`);

    const contractBalance = await contract.balanceOf(ethers.constants.AddressZero);
    console.log(`Contract balance: ${contractBalance}`);
}