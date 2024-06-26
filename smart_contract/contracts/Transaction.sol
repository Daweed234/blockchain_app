// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract Transaction{
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint timestamp, string keyword);

    struct TransferStruct{
        address sender;
        address reciever;
        uint amount;
        string message;
        uint timestamp;
        string keyword;
    }

    TransferStruct[] transaction;

    function addToBlockchain ( address payable receiver, uint amount, stirng memory message, string memory keyword ) public {
        transaction += 1;        
        transaction.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit.Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }
    function getAllTransactions () public view returns (TransferStruct[] memory) {
        return transactions;
    }
    function getTransactionCount () public view returns (uints256) {
     return transactionCount;   
    }
}