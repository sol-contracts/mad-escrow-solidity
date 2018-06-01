/** const VeoEscrow = artifacts.require('VeoEscrow.sol');

contract('VeoEscrow', function(accounts) {
  let instance, amount, instance2, init, fnl, init2, fnl2, buyer, seller, buyer2, seller2;

  
  beforeEach(async function() {
    amount = 3;
    instance = await VeoEscrow.new();
    await instance.Initiate(accounts[1], amount, 'true', { from: accounts[0] });
    instance2 = await VeoEscrow.new();
    await instance2.Initiate(accounts[0], amount, 'false', { from: accounts[1] });
    const buyer = await instance.partyA.call();
      const seller = await instance.partyB.call();
      const buyer2 = await instance2.partyA.call();
      const seller2 = await instance2.partyB.call();
    

  });
  describe('Initiate contract first as buyer then repeat as seller', function() {
    it('should initiate the contract with buyer as initiator', async () => {
      // await instance.Initiate(accounts[1], amount, 'true', { from: accounts[0] });
      const init = await instance.initiated.call();
      const fnl = await instance.finalized.call();
      assert.equal(init, true);
      assert.equal(fnl, false);
      console.log(`Initialized?: ${init}`);
    });
    it('should assign the parties invovled and each should be different addresses', async () => {
      // await instance.Initiate(accounts[1], amount, 'true', { from: accounts[0] });
      const buyer = await instance.partyA.call();
      const seller = await instance.partyB.call();
      assert.equal(buyer, accounts[0]);
      assert.equal(seller, accounts[1]);
      assert.notEqual(buyer,seller);
      console.log(`Buyer: ${buyer}`);
      console.log(`Seller: ${seller}`);
    });
    it('should set required escrow amounts', async () => {
      // await instance.Initiate(accounts[1], amount, 'true', { from: accounts[0] });
      const buyer = await instance.partyA.call();
      const seller = await instance.partyB.call();
      const mutualAMT = await instance.mutualEscrowAmount.call();
      const buyerRequiredAMT = await instance.requiredFunding.call(buyer);
      const sellerRequiredAMT = await instance.requiredFunding.call(seller);
      console.log(`Buyer Required Escrow: ${buyerRequiredAMT} || Seller Required Escrow: ${sellerRequiredAMT}`);
      console.log(`Total: ${mutualAMT}`);
      console.log(`Buyer: ${buyerRequiredAMT}`);
      console.log(`Seller: ${sellerRequiredAMT}`);
      assert.equal(sellerRequiredAMT.valueOf(), amount);
      const num = amount.valueOf() * 2;
      assert.equal(buyerRequiredAMT.valueOf(), num);
    });
      it('reset then should initiate the contract as the seller', async () => {
        // await instance.Initiate(accounts[0], amount, 'false', { from: accounts[1] });
        const init2 = await instance2.initiated.call();
        const fnl2 = await instance2.finalized.call();
        assert.equal(init2, true);
        assert.equal(fnl2, false);
        console.log(`Initialized?: ${init2}`);
      });
      it('should assign the parties with the same assignments', async () => {
        // await instance.Initiate(accounts[0], amount, 'false', { from: accounts[1] });
        const buyer2 = await instance2.partyA.call();
        const seller2 = await instance2.partyB.call();
        assert.equal(buyer2, accounts[1]);
        assert.equal(seller2, accounts[0]);
        assert.notEqual(buyer2, seller2);
        console.log(`Buyer: ${buyer2}`);
        console.log(`Seller: ${seller2}`);
      });
      it('should set required escrow amounts for seller initiated iteration', async () => {
        // await instance.Initiate(accounts[0], amount, 'false', { from: accounts[1] });
        const buyer2 = await instance2.partyA.call();
        const seller2 = await instance2.partyB.call();
        const mutualAMT2 = await instance2.mutualEscrowAmount.call();
        const buyerRequiredAMT2 = await instance2.requiredFunding.call(buyer2);
        const sellerRequiredAMT2 = await instance2.requiredFunding.call(seller2);
        console.log(`Buyer Required Escrow: ${buyerRequiredAMT2} || Seller Required Escrow: ${sellerRequiredAMT2}`);
        console.log(`Total: ${mutualAMT2}`);
        console.log(`Buyer: ${buyerRequiredAMT2}`);
        console.log(`Seller: ${sellerRequiredAMT2}`);
        assert.equal(sellerRequiredAMT2.valueOf(), amount);
        const num = amount.valueOf() * 2;
        assert.equal(buyerRequiredAMT2.valueOf(), num);
      });
  });
});



/**
        it('require the buyer and seller be different', async function() {
        });
        it('set the required escrow amounts', async function() {
        });
    });
        initiate as seller
         let instance2 = await VeoEscrow.new();
            await instance2.Initiate(accounts[0], amount, 'false', {from: accounts[1]});

        it('should add the member', async function() {
        });
        it('should add the member', async function() {
        });
        it('should add the member', async function() {
        });


    it('Not initialized or finalized upon deployment', async () => {

    });

    it('Initialized by the buyer', async() => {

    });

    it('Buyer and Seller not the same', async() => {
        assert.notEqual(partyA,partyB);
        const buyerFundedAMT = await instance.fundedAmount.call(buyer);
        const sellerFundedAMT = await instance.fundedAmount.call(seller);


    })

    it('test', async() => {
        const initiated = await instance.initiated.call();
        const escrowFunded = await instance.escrowFullyFunded.call();// public constant returns(bool);
        const buyerFinalized = await instance.partyAfinalized.call();// public constant returns(bool);
        const sellerFinalized = await instance.partyBfinalized.call();// public constant returns(bool);
   });
    );
});
/**
        let buyer = await instance.partyA.call();
        let seller = await instance.partyA.call();
        const secretkey = await swap.checkSecretKey(swapID_swap, {from: accounts[0]});

        let fee = 1 * 10**18;

        await manager.setFeeForMethod(method, fee);
        assert.equal(await manager.feeForMethod.call(method), fee);
    });

    it('should return expected collector', async () => {
        assert.equal(await manager.collector.call(), accounts[1]);
    });
});

function partyA() public constant returns(address);
  function partyB() public constant returns(address);
  function purchaseAmountTotal() public constant returns(uint256);
  function initiated() public constant returns(bool);
  function finalized() public constant returns(bool);
  function createdBlock() public constant returns(uint);
  function mutualEscrowAmount() public constant returns(uint256);
  function requiredFunding() public constant returns(uint256);
  function fundedAmount() public constant returns(uint256);
  function escrowFullyFunded() public constant returns(bool);
  function partyAfinalized() public constant returns(bool);
  function partyBfinalized() public constant returns(bool);
  function Initiate(
    address _counterParty,
    uint256 _purchaseAmount,
    bool _initiaterIsBuyer  public;
  function fundContract() public payable returns (bool);
  function simulatefundContract(address _sender, uint _amount) public returns (bool fullyFunded);
  function completeTrade() public;

contract('2nd MetaCoin test', async (accounts) => {

  it("should put 10000 MetaCoin in the first account", async () => {
     let instance = await MetaCoin.deployed();
     let balance = await instance.getBalance.call(accounts[0]);
     assert.equal(balance.valueOf(), 10000);
  })

  it("should call a function that depends on a linked library", async () => {
    let meta = await MetaCoin.deployed();
    let outCoinBalance = await meta.getBalance.call(accounts[0]);
    let metaCoinBalance = outCoinBalance.toNumber();
    let outCoinBalanceEth = await meta.getBalanceInEth.call(accounts[0]);
    let metaCoinEthBalance = outCoinBalanceEth.toNumber();
    assert.equal(metaCoinEthBalance, 2 * metaCoinBalance);

  });

  it("should send coin correctly", async () => {

    // Get initial balances of first and second account.
    let account_one = accounts[0];
    let account_two = accounts[1];

    let amount = 10;


    let instance = await MetaCoin.deployed();
    let meta = instance;

    let balance = await meta.getBalance.call(account_one);
    let account_one_starting_balance = balance.toNumber();

    balance = await meta.getBalance.call(account_two);
    let account_two_starting_balance = balance.toNumber();
    await meta.sendCoin(account_two, amount, {from: account_one});

    balance = await meta.getBalance.call(account_one);
    let account_one_ending_balance = balance.toNumber();

    balance = await meta.getBalance.call(account_two);
    let account_two_ending_balance = balance.toNumber();

    assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
    assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
  });

})
*/
