// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {FamilySharedWallet} from "../src/Morph.sol";

contract MorphScript is Script {
    FamilySharedWallet public familySharedWallet;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        familySharedWallet = new FamilySharedWallet();

        vm.stopBroadcast();
    }
}
