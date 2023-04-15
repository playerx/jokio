pragma solidity ^0.8.0;

// PUSH Comm Contract Interface
interface IPUSHCommInterface {
    function sendNotification(address _channel, address _recipient, bytes calldata _identity) external;
}

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

        IPUSHCommInterface(0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa).sendNotification(
            0x69f85F4D2441ec1AF3c6Bf3be854378cF115f933, // from channel - recommended to set channel via dApp and put it's value -> then once contract is deployed, go back and add the contract address as delegate for your channel
            address(this), // to recipient, put address(this) in case you want Broadcast or Subset. For Targetted put the address to which you want to send
            bytes(
                string(
                    // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                    abi.encodePacked(
                        "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                        "+", // segregator
                        "1", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targetted or subset)
                        "+", // segregator
                        _name, // this is notificaiton title
                        "+", // segregator
                        "New game is published for the review." // notification body
                    )
                )
            )
        );

    }

    function approveGame(uint256 _id) public {
        for (uint256 i = 0; i < games.length; i++) {
            if (games[i].id == _id) {
                games[i].isApproved = true;
                break;
            }
        }

        IPUSHCommInterface(0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa).sendNotification(
            0x69f85F4D2441ec1AF3c6Bf3be854378cF115f933, // from channel - recommended to set channel via dApp and put it's value -> then once contract is deployed, go back and add the contract address as delegate for your channel
            address(this), // to recipient, put address(this) in case you want Broadcast or Subset. For Targetted put the address to which you want to send
            bytes(
                string(
                    // We are passing identity here: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                    abi.encodePacked(
                        "0", // this is notification identity: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/identity/payload-identity-implementations
                        "+", // segregator
                        "1", // this is payload type: https://docs.epns.io/developers/developer-guides/sending-notifications/advanced/notification-payload-types/payload (1, 3 or 4) = (Broadcast, targetted or subset)
                        "+", // segregator
                        "New Game", // this is notificaiton title
                        "+", // segregator
                        "New game is published!" // notification body
                    )
                )
            )
        );
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
