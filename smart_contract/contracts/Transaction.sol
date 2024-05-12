// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Transaction{
    uint256 transactionCounter;

    event Transfer(address from, address receiver, uint amount, string message, uint timestamp, string keyword);

    struct transferStruct{
        address sender;
        address reciever;
        uint amount;
        string message;
        uint timestamp;
        string keyword;
    }
}