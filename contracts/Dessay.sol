//SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./DessayToken.sol";

contract Dessay is DessayToken {
    DessayToken public ourToken;

    event WritingEntered(
        string header,
        string ipfsaddr,
        address publisher,
        Topics[] topics,
        uint tstamp,
        uint index,
        uint id
    );

    event PersonFollowed(
        address follower,
        address followed,
        uint targetFollowerCount,
        uint tstamp
    );

    event Upvoted(
        address voter,
        address receiver,
        uint amount,
        uint writingID,
        uint tstamp
    );

    event UpdatedName(address user, string name, uint tstamp);
    event UpdatedBio(address user, string bio, uint tstamp);
    event UpdatedPp(address user, string data, uint tstamp);

    event ReplyAdded(uint id, address publisher, string content);

    constructor(address _ourToken) {
        ourToken = DessayToken(_ourToken);
    }

    enum Topics {
        Felsefe,
        BilimKurgu,
        Teknoloji,
        Bilim,
        Sanat,
        Muzik,
        Programlama,
        Biyoloji,
        Fizik,
        Kimya,
        Matematik,
        Evrim,
        Havacilik,
        Cografya,
        FilmIncelemesi,
        BilgisayarBilimleri,
        Kripto
    }

    enum NotifType {
        Follow,
        Upvote,
        Reply,
        Warn,
        BadgeBuy,
        BadgeOffer,
        WritingAdded
    }

    enum WarnType {
        UygunsuzBaslik,
        UygunsuzIcerik,
        HateSpeech,
        UygunsuzResim,
        Spam,
        Other
    }


    struct Collection {
        address creator;
        uint collectionID;
        uint count;
        uint kalan;
        string collectionName;
        string collectionDesc;
        string collectionPp;
        address[] owners;
    }

    struct Notif {
        NotifType notifType;
        address sender;
        uint id;
    }

    struct Warning {
        address sender;
        WarnType reason;
        uint writingID;
        string description;
    }

    struct Profile {
        string Pp;
        string Name;
        string Biography;
        uint Followers;
        uint Followed;
        uint Writings;
    }

    struct Upvote {
        address publisher;
        uint amount;
        uint percentage;
        uint writingId;
        uint before;

    }

    struct Writing {
        string header;
        string ipfsaddress;
        Topics[] topics;
        address publisher;
        uint comments;
        uint tstamp;
        uint index;
        uint id;
        uint upvoteAmount;
        uint upvoteCount;
        uint replyCount;
        uint warnCount;
        uint badgeThreshold;
    }

    struct Object {
        address publisher;
        uint index;
    }


    struct Comment {
        address publisher;
        string content;
    }

    uint writingCount = 0;
    mapping(uint => Warning[]) idToWarnings;
    mapping(address => Writing[]) addrToWriting;
    mapping(address => address[]) addrToFollowed;
    mapping(address => address[]) addrToFollowers;
    mapping(uint => Object) idToObject;
    mapping(address => Object[]) addrToFeed;
    mapping(address => Notif[]) addrToNotifs;
    mapping(uint => Comment[]) idToComments;
    mapping(address => Profile) addrToProfile;
    mapping(Topics => Writing[]) topicToWritings;
    mapping(address => uint[]) addrToOwnedBadges;
    mapping(address=>uint[]) addrToCategories;
    mapping(address=>Upvote[]) addrToUpvotes;
    mapping(uint=>Collection) idToCollection;

    function enterWriting(
        string memory _header,
        string memory _ipfsaddress,
        Topics[] memory _topicsInput,
        uint _badgeThreshold,
        uint count,
        string memory collectionName,
        string memory collectionDesc,
        string memory collectionPp
    ) public {
        addrToWriting[msg.sender].push(
            Writing(
                _header,
                _ipfsaddress,
                _topicsInput,
                msg.sender,
                0,
                block.timestamp,
                addrToWriting[msg.sender].length,
                writingCount,
                0,
                0,
                0,
                0,
                _badgeThreshold
            )
        );
        idToCollection[writingCount] = Collection(msg.sender, writingCount, count,count, collectionName, collectionDesc, collectionPp,  new address[](count));
        idToObject[writingCount] = Object(
            msg.sender,
            addrToWriting[msg.sender].length - 1
        );
        writingCount++;
        addrToProfile[msg.sender].Writings++;
        for (uint i = 0; i < _topicsInput.length; i++) {
            topicToWritings[_topicsInput[i]].push(
                addrToWriting[msg.sender][addrToWriting[msg.sender].length - 1]
            );
        }
        for (uint i = 0; i < addrToFollowers[msg.sender].length; i++) {
            addrToFeed[addrToFollowers[msg.sender][i]].push(
                Object(msg.sender, addrToWriting[msg.sender].length - 1)
            );
            sendNotif(
                uint8(NotifType.WritingAdded),
                addrToFollowers[msg.sender][i],
                writingCount - 1
            );
        }

        emit WritingEntered(
            _header,
            _ipfsaddress,
            msg.sender,
            _topicsInput,
            block.timestamp,
            addrToWriting[msg.sender].length - 1,
            writingCount - 1
        );
    }

    function getWrites(address user)
        public
        view
        returns (Writing[] memory hisWriting)
    {
        return addrToWriting[user];
    }

    function getWritingForIndex(address _addr, uint index)
        public
        view
        returns (Writing memory writing)
    {
        return addrToWriting[_addr][index];
    }

    function getWritingForID(uint _id)
        public
        view
        returns (Writing memory writing)
    {
        return
            addrToWriting[idToObject[_id].publisher][idToObject[_id].index];
    }

    function follow(address _addr) public {
        addrToFollowed[msg.sender].push(_addr);
        addrToProfile[_addr].Followers++;
        sendNotif(uint8(NotifType.Follow), _addr, 0);
        emit PersonFollowed(
            msg.sender,
            _addr,
            addrToProfile[_addr].Followers,
            block.timestamp
        );
    }

     function getTopicsForAddress(address _addr)
        public
        view
        returns (uint[] memory topics)
    {
        return addrToCategories[_addr];

    }

    function setTopicsForAddress(uint[] memory hisTopics ) public {
        addrToCategories[msg.sender] = hisTopics;
    }


    function reply(
        address _publisher,
        string memory content,
        uint _id
    ) public {
        idToComments[_id].push(Comment(_publisher, content));
        addrToWriting[idToObject[_id].publisher][idToObject[_id].index].replyCount++;
        sendNotif(uint8(NotifType.Reply), _publisher, _id);
        emit ReplyAdded(_id, _publisher, content);
    }

    function warnWriting(
        address publisher,
        uint index,
        uint warnType,
        string memory desc
    ) public {
        addrToWriting[publisher][index].warnCount++;
        idToWarnings[addrToWriting[publisher][index].id].push(
            Warning(
                msg.sender,
                WarnType(warnType),
                addrToWriting[publisher][index].id,
                desc
            )
        );
    }

    function upvote(uint256 amount, uint256 writingId, uint percentage) public {
        require(userPowers[idToObject[writingId].publisher] <= amount,"Not enough power");
        require(percentage <= 100,"Percentage cannot be more than 100");
        userPowers[idToObject[writingId].publisher] -= amount;
        addrToUpvotes[msg.sender].push(Upvote(msg.sender,amount,percentage,writingId,addrToWriting[idToObject[writingId].publisher][idToObject[writingId].index].upvoteAmount));
        addrToWriting[idToObject[writingId].publisher][
            idToObject[writingId].index
        ].upvoteCount++;
        addrToWriting[idToObject[writingId].publisher][
            idToObject[writingId].index
        ].upvoteAmount += amount;
        Writing memory ourWriting=addrToWriting[idToObject[writingId].publisher][idToObject[writingId].index];
        if(ourWriting.badgeThreshold < amount){
            addrToOwnedBadges[msg.sender].push(writingId);
            idToCollection[writingId].owners.push(msg.sender);
            idToCollection[writingId].kalan--;
        }
        sendNotif(uint8(NotifType.Upvote), idToObject[writingId].publisher, 0);
        emit Upvoted(
            msg.sender,
            idToObject[writingId].publisher,
            amount,
            writingId,
            block.timestamp
        );
    }

    function updateName(string memory _name) public {
        addrToProfile[msg.sender].Name = _name;
        emit UpdatedName(msg.sender, _name, block.timestamp);
    }

    function updateBio(string memory _bio) public {
        addrToProfile[msg.sender].Biography = _bio;
        emit UpdatedBio(msg.sender, _bio, block.timestamp);
    }

    function updatePp(string memory _pp) public {
        addrToProfile[msg.sender].Pp = _pp;
        emit UpdatedPp(msg.sender, _pp, block.timestamp);
    }

    function getComments(uint _id)
        public
        view
        returns (Comment[] memory comments)
    {
        return idToComments[_id];
    }

    function getProfile(address _addr)
        public
        view
        returns (Profile memory profile)
    {
        return addrToProfile[_addr];
    }

    

    function calcRewards() public view returns(uint userRewards, uint writerRewards) {
        for (uint256 index = 0; index < addrToUpvotes[msg.sender].length; index++) {
            if (addrToUpvotes[msg.sender][index].publisher == msg.sender) {
                userRewards +=  ( sqrt(addrToUpvotes[msg.sender][index].amount) * (  ( sqrt(addrToWriting[addrToUpvotes[msg.sender][index].publisher][addrToUpvotes[msg.sender][index].writingId].upvoteAmount)) - sqrt(addrToUpvotes[msg.sender][index].before)   )    )/2;
            } else {
                writerRewards += sqrt(stakedBalances[msg.sender]) * sqrt(addrToUpvotes[msg.sender][index].percentage);
            }
        }

        return (userRewards, writerRewards);
    }

    function claimRewards() public payable {
        (uint userRewards, uint writerRewards) = calcRewards();
        stakedBalances[msg.sender] += (userRewards + writerRewards) * 3 / 4;
        (bool success,) = msg.sender.call{value: (userRewards + writerRewards)/4}("");
        require(success, "Transfer failed.");
    }

    function sqrt(uint x) private pure returns (uint y) {
    uint z = (x + 1) / 2;
    y = x;
    while (z < y) {
        y = z;
        z = (x / z + z) / 2;
    }
}

    function getFeed()
        public
        view
        returns (Writing[] memory cards)
    {
        cards = new Writing[](addrToFeed[msg.sender].length);
        for (uint i = 0; i < addrToFeed[msg.sender].length ; i++) {
            
                cards[i] = addrToWriting[
                addrToFeed[msg.sender][i].publisher
                ][addrToFeed[msg.sender][i].index];
            
            
        }
    }

    function getWritingsForTopic(
        Topics _topic
        
    ) public view returns (Writing[] memory writings) {
        Writing[] memory output = new Writing[](topicToWritings[_topic].length);
        for (uint i = 0; i < topicToWritings[_topic].length; i++) {
            
            output[i] = topicToWritings[_topic][i];
            
        }
        return output;
    }

    function sendNotif(
        uint8 notifType,
        address receiver,
        uint id
    ) public {
        require(notifType < 3, "Notif type must be 0, 1 or 2");
        addrToNotifs[receiver].push(
            Notif(NotifType(notifType), msg.sender, id)
        );
    }

    function getOwnedBadges() public view returns (Collection[] memory ) {
         Collection[] memory ourBadges = new Collection[](addrToOwnedBadges[msg.sender].length);
        
        for (uint256 index = 0; index < addrToOwnedBadges[msg.sender].length; index++) {
            ourBadges[index] = idToCollection[addrToOwnedBadges[msg.sender][index]];
        }
        return ourBadges;
        

    }
    
    function getBadgeExplore() public view returns (Collection[] memory ) {
        
        Collection[] memory ourBadges = new Collection[](writingCount);
        for (uint256 index = 0; index < writingCount; index++) {
            ourBadges[index] = idToCollection[index];
           
        }

        return ourBadges;
    }

    function getFeedFromInfura() public view returns (Writing[] memory cards) {
        cards = new Writing[](writingCount);
        for (uint i = 0; i < writingCount ; i++) {
            
                cards[i] = addrToWriting[idToObject[i].publisher][idToObject[i].index];
            
            
        }
        return cards;

    }


    function Init() public {
        Topics[] memory TopicInput = new Topics[](2);
        TopicInput[0] = Topics.BilgisayarBilimleri;
        TopicInput[1] = Topics.Sanat;
        enterWriting("Dessay", "IPFSaddr",TopicInput ,15, 50, "As", "Sa dedik", "Yok valla");
        enterWriting("ASFAS", "sdsfsfsfsfa",TopicInput ,126, 30, "asdfasfasf", "Ssdfsdf", "Ysdfsdffsd");
        enterWriting("sdgasgasgsdg", "SASFASFFASFfa",TopicInput ,137, 70, "asdDGFDFGf", "SsdfFGFdf", "YsdfsFd");
        enterWriting("ASFAS", "sdsfsfsfsfa",TopicInput ,126, 30, "asdfasfasf", "Ssdfsdf", "Ysdfsdffsd");
   
    }

    function getNotif() public view returns (Notif[] memory notifs) {
        return addrToNotifs[msg.sender];
    }

    function getBadgeFromId(uint _id) public view returns (Collection memory badge) {
        return idToCollection[_id];
    }

}
