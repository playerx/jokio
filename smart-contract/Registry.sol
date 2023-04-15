pragma solidity ^0.8.0;

contract Registry {
    struct Game {
        uint256 id;
        string name;
        uint256 priceInEth;
        bool isApproved;
        string rejectReason;
    }

    Game[] private games;
    string public name;
    address[] public adminWalletAddresses;
    uint256 public fee;

    constructor(string memory _name, address[] memory _adminWalletAddresses, uint256 _fee) {
        name = _name;
        adminWalletAddresses = _adminWalletAddresses;
        fee = _fee;
    }

    function addNewGame(string memory _name, uint256 _priceInEth) public {
        games.push(Game({
            id: games.length + 1,
            name: _name,
            priceInEth: _priceInEth,
            isApproved: true,
            rejectReason: ""
        }));
    }

    function approveGame(uint256 _id) public {
        for (uint256 i = 0; i < games.length; i++) {
            if (games[i].id == _id) {
                games[i].isApproved = true;
                break;
            }
        }
    }

    function rejectGame(uint256 _id, string memory _reason) public {
        for (uint256 i = 0; i < games.length; i++) {
            if (games[i].id == _id) {
                if (games[i].isApproved) {
                    return;
                }
                games[i].rejectReason = _reason;
                break;
            }
        }
    }
}