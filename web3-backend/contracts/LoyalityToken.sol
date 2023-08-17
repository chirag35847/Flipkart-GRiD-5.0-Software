
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract LoyaltyToken is ERC20Burnable, Ownable {
    constructor() ERC20("FlipkartLoyaltyToken", "FLYT") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount * (10**18));
    }

    function burn(uint256 value) public override {
        _burn(msg.sender, value);
    }
}