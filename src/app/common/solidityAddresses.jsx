// jscs:disable

import Web3 from 'web3';

//Addresses

export const CollectFundAddress = '0x6fe3261be5101bd1b5d964de809ca9d4abf6f433';
export const PayInstallmentsAddress = '0x8132d624d6a869d8a516ac8b0db8c80abc9d9891';

//ABIs

export const CollectFundAbi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"AllProposalIDs","outputs":[{"name":"proposalID","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"EtherTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_proposalOwner","type":"address"},{"indexed":false,"name":"_proposalID","type":"bytes32"},{"indexed":false,"name":"_fundingGoal","type":"uint256"}],"name":"GoalReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_proposalOwner","type":"address"},{"indexed":false,"name":"_proposalID","type":"bytes32"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"GetFundAfterGoalReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_lender","type":"address"},{"indexed":false,"name":"_proposalID","type":"bytes32"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"WithdrawFundWhenGoalNotReached","type":"event"},{"constant":false,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_fundingGoal","type":"uint256"},{"name":"_interestRate","type":"uint8"},{"name":"_tenureInMonths","type":"uint8"},{"name":"_borrower","type":"address"},{"name":"_ts","type":"uint256"},{"name":"_expirationTS","type":"uint256"}],"name":"submitProposal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_amount","type":"uint256"},{"name":"_lender","type":"address"},{"name":"_ts","type":"uint256"}],"name":"lendMoneyToProposal","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_ts","type":"uint256"},{"name":"_nextTS","type":"uint256"}],"name":"proposalGoalReached","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"getFundCollectStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"getProposalDetailsByProposalID","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"uint256"},{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"getProposalDueDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_borrower","type":"address"}],"name":"getBorrowerSuccessfulProposals","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_ts","type":"uint256"}],"name":"getDaysRemainingInInstallmentDue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_ts","type":"uint256"}],"name":"getMoneyAsBorrowerAfterDeadline","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"checkProposalFunding","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"getProposalExpiration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"getProposalOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"getProposalLendersWithDetails","outputs":[{"name":"","type":"address[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint8[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_lender","type":"address"}],"name":"getLenderDetails","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_borrower","type":"address"}],"name":"getBorrrowerSpecificProposals","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAllProposalsForBorrowerList","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_lender","type":"address"}],"name":"getLenderSuccessfulProposals","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"getInstallmentStartTS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_user","type":"address"}],"name":"checkIfLender","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_ts","type":"uint256"},{"name":"_lender","type":"address"}],"name":"revertLendersAmountForUnsuccessfulProposal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

export const PayInstallmentsAbi = [{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_lender","type":"address"}],"name":"getLenderDetails","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_amount","type":"uint256"},{"name":"_lender","type":"address"},{"name":"_ts","type":"uint256"}],"name":"lendMoneyToProposal","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_fundingGoal","type":"uint256"},{"name":"_interestRate","type":"uint8"},{"name":"_tenureInMonths","type":"uint8"},{"name":"_borrower","type":"address"},{"name":"_ts","type":"uint256"},{"name":"_expirationTS","type":"uint256"}],"name":"submitProposal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"getProposalExpiration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"getProposalDetailsByProposalID","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"uint256"},{"name":"","type":"bool"},{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"getProposalOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_ts","type":"uint256"},{"name":"_lender","type":"address"}],"name":"revertLendersAmountForUnsuccessfulProposal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_borrower","type":"address"}],"name":"getBorrrowerSpecificProposals","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"AllProposalIDs","outputs":[{"name":"proposalID","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getAllProposalsForBorrowerList","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_ts","type":"uint256"},{"name":"_nextTS","type":"uint256"}],"name":"proposalGoalReached","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_user","type":"address"}],"name":"checkIfLender","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_lender","type":"address"}],"name":"getLenderSuccessfulProposals","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"getInstallmentStartTS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"getProposalLendersWithDetails","outputs":[{"name":"","type":"address[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint8[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"getProposalDueDate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_ts","type":"uint256"}],"name":"getMoneyAsBorrowerAfterDeadline","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"checkProposalFunding","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_borrower","type":"address"}],"name":"getBorrowerSuccessfulProposals","outputs":[{"name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"getFundCollectStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_ts","type":"uint256"}],"name":"getDaysRemainingInInstallmentDue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_proposalID","type":"bytes32"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_to","type":"address"}],"name":"InstallmentTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_from","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"EtherTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_proposalOwner","type":"address"},{"indexed":false,"name":"_proposalID","type":"bytes32"},{"indexed":false,"name":"_fundingGoal","type":"uint256"}],"name":"GoalReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_proposalOwner","type":"address"},{"indexed":false,"name":"_proposalID","type":"bytes32"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"GetFundAfterGoalReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_lender","type":"address"},{"indexed":false,"name":"_proposalID","type":"bytes32"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"WithdrawFundWhenGoalNotReached","type":"event"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"}],"name":"setLateInstallmentFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"bytes32"}],"name":"calculateInstallment","outputs":[{"name":"_installmentAmount","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_ts","type":"uint256"}],"name":"getDueInstallment","outputs":[{"name":"_installment","type":"uint256"},{"name":"_nextDueDate","type":"uint256"},{"name":"_remainingTenure","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_proposalID","type":"bytes32"},{"name":"_ts","type":"uint256"},{"name":"_nextTS","type":"uint256"}],"name":"payInstallment","outputs":[],"payable":true,"stateMutability":"payable","type":"function"}];

export const web3 = new Web3(new Web3.providers.HttpProvider('http://cil-blockchain1.uksouth.cloudapp.azure.com/api'));

//contracts

export const CollectFundCon = web3.eth.contract(CollectFundAbi).at(CollectFundAddress);
export const PayInstallmentsCon = web3.eth.contract(PayInstallmentsAbi).at(PayInstallmentsAddress);
