// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./PERC20.sol";

contract Swistar is PERC20 {

    constructor() PERC20("Swistar", "SWTR") {

    }


    function mint() public {
        _mint(msg.sender, 100*10**18);
    }

    function balanceOf(address _account) public view override returns (uint256) {
        require(msg.sender == _account, "Swistar: msg.sender != _account");
        return _balances[_account];
    }

    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        require(msg.sender == spender, "Swistar: msg.sender != account");
        return _allowances[owner][spender];
    }

    receive() external payable {
        _mint(_msgSender(), msg.value);
    }
}