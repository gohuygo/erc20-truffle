pragma solidity ^0.4.24;

import { Safemath } from "./Safemath.sol";

library ERC20Transfer {
  using Safemath for uint;

  struct UserBalance{
    mapping(address => uint256) balance;
  }

  function isContract(address _addr) private view returns (bool) {
    uint32 size;

    assembly {
      size := extcodesize(_addr)
    }

    return (size > 0);
  }

  function transferTokens(UserBalance storage self, address _from, address _to, uint _amount) public returns(bool) {
    require(self.balance[_from] >= _amount);
    require(!isContract(_to));

    self.balance[_from] = self.balance[_from].subtract(_amount);
    self.balance[_to]   = self.balance[_to].add(_amount);

    return true;
  }
}
