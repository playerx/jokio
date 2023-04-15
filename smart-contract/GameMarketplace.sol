pragma solidity ^0.8.0;

struct Game {
    address developer;
    string title;
    string description;
    string gameFileHash;
    uint approvals;
    uint rejections;
    mapping (address => bool) approvedBy;
    mapping (address => bool) rejectedBy;
    mapping (address => bool) hasReviewed;
    mapping (address => uint) ratings;
    mapping (address => string) reviews;
}

struct Community {
    address[] members;
    mapping (address => bool) approved;
}

contract GameMarketplace {

    address public owner;
    uint public minCommunitySize;
    uint public approvalThreshold;
    mapping (address => Game) public games;
    mapping(address => Community) public communities;


    event GameSubmitted(address gameAddress);
    event GameApproved(address gameAddress);
    event GameRejected(address gameAddress);
    event GameReviewed(address gameAddress, address reviewer);

    constructor(uint _minCommunitySize, uint _approvalThreshold) {
        owner = msg.sender;
        minCommunitySize = _minCommunitySize;
        approvalThreshold = _approvalThreshold;
    }

    function submitGame(string memory _title, string memory _description, string memory _gameFileHash) public {
        require(bytes(_title).length > 0 && bytes(_description).length > 0 && bytes(_gameFileHash).length > 0, "All fields are required");
        Game memory newGame = Game({
            developer: msg.sender,
            title: _title,
            description: _description,
            gameFileHash: _gameFileHash,
            approvals: 0,
            rejections: 0
        });
        games[address(newGame)] = newGame;
        emit GameSubmitted(address(newGame));
    }

    function joinCommunity() public {
        require(communities[msg.sender].members.length == 0, "You're already a member of the community");
        if (communities[owner].members.length < minCommunitySize) {
            communities[owner].members.push(msg.sender);
            communities[owner].approved[msg.sender] = true;
        } else {
            bool approved = true;
            for (uint i = 0; i < communities[owner].members.length; i++) {
                address member = communities[owner].members[i];
                if (!communities[owner].approved[member]) {
                    approved = false;
                    break;
                }
            }
            require(approved, "You can't join the community yet");
            communities[owner].members.push(msg.sender);
            communities[owner].approved[msg.sender] = false;
        }
    }

    function approveGame(address _gameAddress) public {
        require(communities[owner].approved[msg.sender], "You're not authorized to approve games");
        Game storage game = games[_gameAddress];
        require(!game.approvedBy[msg.sender], "You've already approved this game");
        require(!game.rejectedBy[msg.sender], "You've already rejected this game");
        game.approvals++;
        game.approvedBy[msg.sender] = true;
        if (game.approvals >= approvalThreshold) {
            game.approvals = 0;
            game.rejections = 0;
            game.approvedBy[game.developer] = true;
            emit GameApproved(_gameAddress);
        }
    }

    function rejectGame(address _gameAddress) public {
        require(communities[owner].approved[msg.sender], "You're not authorized to reject games");
        Game storage game = games[_gameAddress];
        require(!game.approvedBy[msg.sender], "You've already approved this game");
        require(!game.rejectedBy[msg.sender], "You've already rejected this game");
        game.rejections++;
        game.rejectedBy[msg.sender] = true;
        if (game.rejections >= (communities[owner].members.length - approvalThreshold + 1)) {
            game.approvals = 0;
            game.rejections = 0;
            delete games[_gameAddress];
            emit GameRejected(_gameAddress);
        }
    }
    function reviewGame(address _gameAddress, uint _rating, string memory _review) public {
        Game storage game = games[_gameAddress];
        require(bytes(_review).length > 0 && _rating > 0 && _rating <= 5, "Invalid review");
        require(!game.hasReviewed[msg.sender], "You've already reviewed this game");
        game.hasReviewed[msg.sender] = true;
        game.ratings[msg.sender] = _rating;
        game.reviews[msg.sender] = _review;
        emit GameReviewed(_gameAddress, msg.sender);
    }

    function getApprovedGames() public view returns (address[] memory) {
        address[] memory approvedGameAddresses = new address[](approvalThreshold);
        uint count = 0;
        for (uint i = 0; i < approvalThreshold; i++) {
            for (uint j = 0; j < communities[owner].members.length; j++) {
                address member = communities[owner].members[j];
                if (communities[owner].approved[member] || games[approvedGameAddresses[i]].approvedBy[member]) {
                    count++;
                }
                if (count >= approvalThreshold) {
                    approvedGameAddresses[i] = address(games[approvedGameAddresses[i]]);
                    break;
                }
            }
            count = 0;
        }
        return approvedGameAddresses;
    }

    function getGameDetails(address _gameAddress) public view returns (address, string memory, string memory, string memory, uint, uint) {
        Game memory game = games[_gameAddress];
        return (game.developer, game.title, game.description, game.gameFileHash, game.approvals, game.rejections);
    }

    function getGameReview(address _gameAddress, address _reviewer) public view returns (uint, string memory) {
        Game memory game = games[_gameAddress];
        return (game.ratings[_reviewer], game.reviews[_reviewer]);
    }

}
