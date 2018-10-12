pragma solidity ^0.4.25;

contract Escrow {
    address buyer;
    address recipient;
    address arbiter;
    
    // 6/ Kontrakt tworzy kupujący wyznaczając arbitra i odbiorcę
    constructor(address _recipient, address _arbiter) public payable {
        require(msg.value > 10);
        recipient = _recipient;
        arbiter = _arbiter;
        buyer = msg.sender;
    }
    
    // Arbiter może anulować kontrakt
    function cancel() external {
        // Wymagamy, aby był to tylko arbiter
        require(msg.sender == arbiter);
        // Obliczamy fee (10%)
        uint fee = address(this).balance / 10;
        // przekazujemy fee
        arbiter.transfer(fee);
        // i zwracamy pieniądze
        buyer.transfer(address(this).balance); // suicide(seller)
    }
    
    /// Lub arbiter może potwierdzić transakcję
    function confirm() external {
        require(msg.sender == arbiter);
        // 2/ wtedy pobiera mniejsze fee (15)
        uint fee = address(this).balance / 100;
        arbiter.transfer(fee);
        // i resztę otrzymuje odbiorca
        recipient.transfer(address(this).balance); // suicide(recipient)
    }
}
