// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

error DeCertify__OnlyIssuerRequired();
error DeCertify__OnlyUser();
error DeCertify_Invalid_User();
error DeCertify__AlreadyExists();

contract DeCertify {
    struct Detail {
        string userName;
        string email;
        bool prover;
        bool isIssuer;
    }

    mapping(address => Detail) public s_details;
    mapping(string => string[]) public s_userData;

    event UserSignIn(address indexed _userAddress, string _userName);

    function addDetails(
        address _userAddress,
        string memory _userName,
        string memory _email,
        bool _prover,
        bool _ofIssuer
    ) external IsNotExisting(_userAddress) {
        Detail memory userDetail = Detail({
            userName: _userName,
            email: _email,
            prover: _prover,
            isIssuer: _ofIssuer
        });

        s_details[_userAddress] = userDetail;
        emit UserSignIn(_userAddress, _userName);
    }

    // Fetch Details of any particular address
    function fetchDetail(
        address userAddress
    ) external view returns (Detail memory) {
        if (!checkDetail(userAddress)) revert DeCertify_Invalid_User();
        return s_details[userAddress];
    }

    // Fetch User's Data/Certifications
    function fetchUserData(
        string memory _email
    ) external view returns (string[] memory) {
        return s_userData[_email];
    }

    function checkDetail(address userAddress) public view returns (bool) {
        bytes memory userNameBytes = bytes(s_details[userAddress].userName);
        return (userNameBytes.length > 0);
    }

    modifier IsNotExisting(address userAddress) {
        if (bytes(s_details[userAddress].userName).length > 0) {
            revert DeCertify__AlreadyExists();
        } else {
            _;
        }
    }

    function addUserData(string memory _email, string memory _data) external {
        if (!s_details[msg.sender].isIssuer)
            revert DeCertify__OnlyIssuerRequired();
        s_userData[_email].push(_data);
    }

    function updateDetailsByUser(
        string memory _changeUserName,
        string memory _changeEmail
    ) external {
        s_details[msg.sender].userName = _changeUserName;
        s_details[msg.sender].email = _changeEmail;
    }
}