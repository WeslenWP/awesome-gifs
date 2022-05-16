export const abi = {
  "_format": "hh-sol-artifact-1",
  "contractName": "AwesomeGifs",
  "sourceName": "contracts/AwesomeGifs.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "url",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "tags",
          "type": "string[]"
        }
      ],
      "name": "addGif",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getGifs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "url",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "tags",
              "type": "string[]"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            }
          ],
          "internalType": "struct AwesomeGifs.Gif[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getGifsFrom",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "url",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "tags",
              "type": "string[]"
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            }
          ],
          "internalType": "struct AwesomeGifs.Gif[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506111f6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063148179aa1461004657806398f950fb14610062578063e1ecc69414610080575b600080fd5b610060600480360381019061005b9190610c89565b6100b0565b005b61006a610306565b6040516100779190610f31565b60405180910390f35b61009a60048036038101906100959190610c60565b61064a565b6040516100a79190610f31565b60405180910390f35b60006040518060a001604052808681526020018581526020018481526020018381526020013373ffffffffffffffffffffffffffffffffffffffff168152509050600181908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000190805190602001906101399291906109cc565b5060208201518160010190805190602001906101569291906109cc565b5060408201518160020190805190602001906101739291906109cc565b506060820151816003019080519060200190610190929190610a52565b5060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050600190039060005260206000209060050201600090919091909150600082015181600001908051906020019061025e9291906109cc565b50602082015181600101908051906020019061027b9291906109cc565b5060408201518160020190805190602001906102989291906109cc565b5060608201518160030190805190602001906102b5929190610a52565b5060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050505050565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561064157838290600052602060002090600502016040518060a001604052908160008201805461035d906110d7565b80601f0160208091040260200160405190810160405280929190818152602001828054610389906110d7565b80156103d65780601f106103ab576101008083540402835291602001916103d6565b820191906000526020600020905b8154815290600101906020018083116103b957829003601f168201915b505050505081526020016001820180546103ef906110d7565b80601f016020809104026020016040519081016040528092919081815260200182805461041b906110d7565b80156104685780601f1061043d57610100808354040283529160200191610468565b820191906000526020600020905b81548152906001019060200180831161044b57829003601f168201915b50505050508152602001600282018054610481906110d7565b80601f01602080910402602001604051908101604052809291908181526020018280546104ad906110d7565b80156104fa5780601f106104cf576101008083540402835291602001916104fa565b820191906000526020600020905b8154815290600101906020018083116104dd57829003601f168201915b5050505050815260200160038201805480602002602001604051908101604052809291908181526020016000905b828210156105d4578382906000526020600020018054610547906110d7565b80601f0160208091040260200160405190810160405280929190818152602001828054610573906110d7565b80156105c05780601f10610595576101008083540402835291602001916105c0565b820191906000526020600020905b8154815290600101906020018083116105a357829003601f168201915b505050505081526020019060010190610528565b5050505081526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250508152602001906001019061032a565b50505050905090565b60606000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156109c157838290600052602060002090600502016040518060a00160405290816000820180546106dd906110d7565b80601f0160208091040260200160405190810160405280929190818152602001828054610709906110d7565b80156107565780601f1061072b57610100808354040283529160200191610756565b820191906000526020600020905b81548152906001019060200180831161073957829003601f168201915b5050505050815260200160018201805461076f906110d7565b80601f016020809104026020016040519081016040528092919081815260200182805461079b906110d7565b80156107e85780601f106107bd576101008083540402835291602001916107e8565b820191906000526020600020905b8154815290600101906020018083116107cb57829003601f168201915b50505050508152602001600282018054610801906110d7565b80601f016020809104026020016040519081016040528092919081815260200182805461082d906110d7565b801561087a5780601f1061084f5761010080835404028352916020019161087a565b820191906000526020600020905b81548152906001019060200180831161085d57829003601f168201915b5050505050815260200160038201805480602002602001604051908101604052809291908181526020016000905b828210156109545783829060005260206000200180546108c7906110d7565b80601f01602080910402602001604051908101604052809291908181526020018280546108f3906110d7565b80156109405780601f1061091557610100808354040283529160200191610940565b820191906000526020600020905b81548152906001019060200180831161092357829003601f168201915b5050505050815260200190600101906108a8565b5050505081526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050815260200190600101906106aa565b505050509050919050565b8280546109d8906110d7565b90600052602060002090601f0160209004810192826109fa5760008555610a41565b82601f10610a1357805160ff1916838001178555610a41565b82800160010185558215610a41579182015b82811115610a40578251825591602001919060010190610a25565b5b509050610a4e9190610ab2565b5090565b828054828255906000526020600020908101928215610aa1579160200282015b82811115610aa0578251829080519060200190610a909291906109cc565b5091602001919060010190610a72565b5b509050610aae9190610acf565b5090565b5b80821115610acb576000816000905550600101610ab3565b5090565b5b80821115610aef5760008181610ae69190610af3565b50600101610ad0565b5090565b508054610aff906110d7565b6000825580601f10610b115750610b30565b601f016020900490600052602060002090810190610b2f9190610ab2565b5b50565b6000610b46610b4184610f78565b610f53565b90508083825260208201905082856020860282011115610b6557600080fd5b60005b85811015610baf57813567ffffffffffffffff811115610b8757600080fd5b808601610b948982610c36565b85526020850194506020840193505050600181019050610b68565b5050509392505050565b6000610bcc610bc784610fa4565b610f53565b905082815260208101848484011115610be457600080fd5b610bef848285611095565b509392505050565b600081359050610c06816111a9565b92915050565b600082601f830112610c1d57600080fd5b8135610c2d848260208601610b33565b91505092915050565b600082601f830112610c4757600080fd5b8135610c57848260208601610bb9565b91505092915050565b600060208284031215610c7257600080fd5b6000610c8084828501610bf7565b91505092915050565b60008060008060808587031215610c9f57600080fd5b600085013567ffffffffffffffff811115610cb957600080fd5b610cc587828801610c36565b945050602085013567ffffffffffffffff811115610ce257600080fd5b610cee87828801610c36565b935050604085013567ffffffffffffffff811115610d0b57600080fd5b610d1787828801610c36565b925050606085013567ffffffffffffffff811115610d3457600080fd5b610d4087828801610c0c565b91505092959194509250565b6000610d588383610e6d565b905092915050565b6000610d6c8383610ea6565b905092915050565b610d7d81611063565b82525050565b6000610d8e82610ff5565b610d988185611030565b935083602082028501610daa85610fd5565b8060005b85811015610de65784840389528151610dc78582610d4c565b9450610dd283611016565b925060208a01995050600181019050610dae565b50829750879550505050505092915050565b6000610e0382611000565b610e0d8185611041565b935083602082028501610e1f85610fe5565b8060005b85811015610e5b5784840389528151610e3c8582610d60565b9450610e4783611023565b925060208a01995050600181019050610e23565b50829750879550505050505092915050565b6000610e788261100b565b610e828185611052565b9350610e928185602086016110a4565b610e9b81611198565b840191505092915050565b600060a0830160008301518482036000860152610ec38282610e6d565b91505060208301518482036020860152610edd8282610e6d565b91505060408301518482036040860152610ef78282610e6d565b91505060608301518482036060860152610f118282610d83565b9150506080830151610f266080860182610d74565b508091505092915050565b60006020820190508181036000830152610f4b8184610df8565b905092915050565b6000610f5d610f6e565b9050610f698282611109565b919050565b6000604051905090565b600067ffffffffffffffff821115610f9357610f92611169565b5b602082029050602081019050919050565b600067ffffffffffffffff821115610fbf57610fbe611169565b5b610fc882611198565b9050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061106e82611075565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b838110156110c25780820151818401526020810190506110a7565b838111156110d1576000848401525b50505050565b600060028204905060018216806110ef57607f821691505b602082108114156111035761110261113a565b5b50919050565b61111282611198565b810181811067ffffffffffffffff8211171561113157611130611169565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6111b281611063565b81146111bd57600080fd5b5056fea2646970667358221220b8c36782d72caf7b9ac696ebb48a8ae3314511df3a2f76fdb18d284b17e8210164736f6c63430008040033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063148179aa1461004657806398f950fb14610062578063e1ecc69414610080575b600080fd5b610060600480360381019061005b9190610c89565b6100b0565b005b61006a610306565b6040516100779190610f31565b60405180910390f35b61009a60048036038101906100959190610c60565b61064a565b6040516100a79190610f31565b60405180910390f35b60006040518060a001604052808681526020018581526020018481526020018381526020013373ffffffffffffffffffffffffffffffffffffffff168152509050600181908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000190805190602001906101399291906109cc565b5060208201518160010190805190602001906101569291906109cc565b5060408201518160020190805190602001906101739291906109cc565b506060820151816003019080519060200190610190929190610a52565b5060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819080600181540180825580915050600190039060005260206000209060050201600090919091909150600082015181600001908051906020019061025e9291906109cc565b50602082015181600101908051906020019061027b9291906109cc565b5060408201518160020190805190602001906102989291906109cc565b5060608201518160030190805190602001906102b5929190610a52565b5060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050505050565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561064157838290600052602060002090600502016040518060a001604052908160008201805461035d906110d7565b80601f0160208091040260200160405190810160405280929190818152602001828054610389906110d7565b80156103d65780601f106103ab576101008083540402835291602001916103d6565b820191906000526020600020905b8154815290600101906020018083116103b957829003601f168201915b505050505081526020016001820180546103ef906110d7565b80601f016020809104026020016040519081016040528092919081815260200182805461041b906110d7565b80156104685780601f1061043d57610100808354040283529160200191610468565b820191906000526020600020905b81548152906001019060200180831161044b57829003601f168201915b50505050508152602001600282018054610481906110d7565b80601f01602080910402602001604051908101604052809291908181526020018280546104ad906110d7565b80156104fa5780601f106104cf576101008083540402835291602001916104fa565b820191906000526020600020905b8154815290600101906020018083116104dd57829003601f168201915b5050505050815260200160038201805480602002602001604051908101604052809291908181526020016000905b828210156105d4578382906000526020600020018054610547906110d7565b80601f0160208091040260200160405190810160405280929190818152602001828054610573906110d7565b80156105c05780601f10610595576101008083540402835291602001916105c0565b820191906000526020600020905b8154815290600101906020018083116105a357829003601f168201915b505050505081526020019060010190610528565b5050505081526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250508152602001906001019061032a565b50505050905090565b60606000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156109c157838290600052602060002090600502016040518060a00160405290816000820180546106dd906110d7565b80601f0160208091040260200160405190810160405280929190818152602001828054610709906110d7565b80156107565780601f1061072b57610100808354040283529160200191610756565b820191906000526020600020905b81548152906001019060200180831161073957829003601f168201915b5050505050815260200160018201805461076f906110d7565b80601f016020809104026020016040519081016040528092919081815260200182805461079b906110d7565b80156107e85780601f106107bd576101008083540402835291602001916107e8565b820191906000526020600020905b8154815290600101906020018083116107cb57829003601f168201915b50505050508152602001600282018054610801906110d7565b80601f016020809104026020016040519081016040528092919081815260200182805461082d906110d7565b801561087a5780601f1061084f5761010080835404028352916020019161087a565b820191906000526020600020905b81548152906001019060200180831161085d57829003601f168201915b5050505050815260200160038201805480602002602001604051908101604052809291908181526020016000905b828210156109545783829060005260206000200180546108c7906110d7565b80601f01602080910402602001604051908101604052809291908181526020018280546108f3906110d7565b80156109405780601f1061091557610100808354040283529160200191610940565b820191906000526020600020905b81548152906001019060200180831161092357829003601f168201915b5050505050815260200190600101906108a8565b5050505081526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050815260200190600101906106aa565b505050509050919050565b8280546109d8906110d7565b90600052602060002090601f0160209004810192826109fa5760008555610a41565b82601f10610a1357805160ff1916838001178555610a41565b82800160010185558215610a41579182015b82811115610a40578251825591602001919060010190610a25565b5b509050610a4e9190610ab2565b5090565b828054828255906000526020600020908101928215610aa1579160200282015b82811115610aa0578251829080519060200190610a909291906109cc565b5091602001919060010190610a72565b5b509050610aae9190610acf565b5090565b5b80821115610acb576000816000905550600101610ab3565b5090565b5b80821115610aef5760008181610ae69190610af3565b50600101610ad0565b5090565b508054610aff906110d7565b6000825580601f10610b115750610b30565b601f016020900490600052602060002090810190610b2f9190610ab2565b5b50565b6000610b46610b4184610f78565b610f53565b90508083825260208201905082856020860282011115610b6557600080fd5b60005b85811015610baf57813567ffffffffffffffff811115610b8757600080fd5b808601610b948982610c36565b85526020850194506020840193505050600181019050610b68565b5050509392505050565b6000610bcc610bc784610fa4565b610f53565b905082815260208101848484011115610be457600080fd5b610bef848285611095565b509392505050565b600081359050610c06816111a9565b92915050565b600082601f830112610c1d57600080fd5b8135610c2d848260208601610b33565b91505092915050565b600082601f830112610c4757600080fd5b8135610c57848260208601610bb9565b91505092915050565b600060208284031215610c7257600080fd5b6000610c8084828501610bf7565b91505092915050565b60008060008060808587031215610c9f57600080fd5b600085013567ffffffffffffffff811115610cb957600080fd5b610cc587828801610c36565b945050602085013567ffffffffffffffff811115610ce257600080fd5b610cee87828801610c36565b935050604085013567ffffffffffffffff811115610d0b57600080fd5b610d1787828801610c36565b925050606085013567ffffffffffffffff811115610d3457600080fd5b610d4087828801610c0c565b91505092959194509250565b6000610d588383610e6d565b905092915050565b6000610d6c8383610ea6565b905092915050565b610d7d81611063565b82525050565b6000610d8e82610ff5565b610d988185611030565b935083602082028501610daa85610fd5565b8060005b85811015610de65784840389528151610dc78582610d4c565b9450610dd283611016565b925060208a01995050600181019050610dae565b50829750879550505050505092915050565b6000610e0382611000565b610e0d8185611041565b935083602082028501610e1f85610fe5565b8060005b85811015610e5b5784840389528151610e3c8582610d60565b9450610e4783611023565b925060208a01995050600181019050610e23565b50829750879550505050505092915050565b6000610e788261100b565b610e828185611052565b9350610e928185602086016110a4565b610e9b81611198565b840191505092915050565b600060a0830160008301518482036000860152610ec38282610e6d565b91505060208301518482036020860152610edd8282610e6d565b91505060408301518482036040860152610ef78282610e6d565b91505060608301518482036060860152610f118282610d83565b9150506080830151610f266080860182610d74565b508091505092915050565b60006020820190508181036000830152610f4b8184610df8565b905092915050565b6000610f5d610f6e565b9050610f698282611109565b919050565b6000604051905090565b600067ffffffffffffffff821115610f9357610f92611169565b5b602082029050602081019050919050565b600067ffffffffffffffff821115610fbf57610fbe611169565b5b610fc882611198565b9050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600061106e82611075565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b838110156110c25780820151818401526020810190506110a7565b838111156110d1576000848401525b50505050565b600060028204905060018216806110ef57607f821691505b602082108114156111035761110261113a565b5b50919050565b61111282611198565b810181811067ffffffffffffffff8211171561113157611130611169565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6111b281611063565b81146111bd57600080fd5b5056fea2646970667358221220b8c36782d72caf7b9ac696ebb48a8ae3314511df3a2f76fdb18d284b17e8210164736f6c63430008040033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
