import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BorrowerList from '../../../container/Borrower/BorrowerList.jsx';
import * as ULPActions from '../../../actions/ULPActions.jsx';
import BootStrapModal from '../../../components/Modal/BootStrapModal.jsx';
import './UserLanding.scss';
import hashFnv32a from '../../../common/hashFNV32a.jsx';
import { CollectFundCon } from '../../../common/solidityAddresses.jsx';
let regeneratorRuntime = require('regenerator-runtime');

class UserLandingPage extends React.Component {
  onAddProposal = () => {
    let proposalDetails = {
      proposalAmount: this.props.ULPReducer.proposalAmount,
      proposalTenure: this.props.ULPReducer.proposalTenure,
      proposalROI: this.props.ULPReducer.proposalROI,
      walletAddress: this.props.walletAddress,
      password: this.props.ULPReducer.userPassword,
    };
    this.props.AddProposal(proposalDetails);

    // this.submitProposal(proposalDetails);
  };

  // async submitProposal(proposalDetails) {
  //   const { proposalAmount, proposalTenure, proposalROI, walletAddress } = proposalDetails;
  //   const randomNum = (hashFnv32a(Date.now(), false));
  //   const str = randomNum.toString().substring(0, 7);
  //   const ID = 'PROP' + str;
  //   var tx = await CollectFundCon.submitProposal(ID, proposalAmount,
  //   proposalROI, proposalTenure, walletAddress,
  //     { from: walletAddress, gas: 20000000 }
  //   );
  // }
  onShowCredentialManager() {
    const { proposalAmount, proposalTenure, proposalROI } = this.props.ULPReducer;
    if (!proposalAmount || !proposalTenure || !proposalROI) {
      alert('Please fill all the fields');
    } else {
      this.props.ULPSetFalse('showAddProposalModal');
      this.props.ULPSetTrue('showCredentialManager');
    }
  };

  render() {
    let ProposalForm = (
      <form>
        <div className="form-group">
          <label>Amount:</label>
          <input value={this.props.ULPReducer.proposalAmount}
            onChange={(event) => this.props.ULPUpdateInput(event)} name="proposalAmount"
            type="number" className="form-control" />
        </div>
        <div className="form-group">
          <label>Tenure:</label>
          <input value={this.props.ULPReducer.proposalTenure}
            onChange={(event) => this.props.ULPUpdateInput(event)} name="proposalTenure"
            type="number" min='6' className="form-control" />
        </div>
        <div className="form-group">
          <label>Rate of Interest(%):</label>
          <input value={this.props.ULPReducer.proposalROI}
            onChange={(event) => this.props.ULPUpdateInput(event)} name="proposalROI"
            type="number" className="form-control" />
        </div>
      </form>
    );
    let credentialForm = (
      <form>
        <div className="form-group">
          <label>User Wallet Address:</label>
          <input value={this.props.walletAddress}
            disabled name="userWalletAddr"
            type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input value={this.props.ULPReducer.userPassword}
            onChange={this.props.ULPUpdateInput} name="userPassword"
            type="password" className="form-control" />
        </div>
      </form>
    );
    return (
      <section className='container-fluid' id='UserLandingPageSection'>
        <div className="row no-margin">
          <div className="pull-right">
            <button
              onClick={() => this.props.ULPSetTrue('showAddProposalModal')}
              className='btn btn-primary'> + Add Proposal</button>
          </div>
        </div>
        <div className='row no-margin'>
          <div className='col-md-12'>
            <BorrowerList />
          </div>
        </div>

        {/* Display Add Proposal Modal */}
        <BootStrapModal
          handleClose={() => this.props.ULPSetFalse('showAddProposalModal')}
          heading="Add Proposal"
          body={ProposalForm}
          submit={() => this.onShowCredentialManager()}
          show={this.props.ULPReducer.showAddProposalModal}
        />
        <BootStrapModal
          handleClose={() => this.props.ULPSetFalse('showCredentialManager')}
          heading="Enter Credentials"
          body={credentialForm}
          submit={() => this.onAddProposal()}
          show={this.props.ULPReducer.showCredentialManager}
        />
      </section>
    );
  };
};

const mapStateToProps = (_state) => {
  let state = _state;
  return {
    ULPReducer: state.ULPReducer,
    walletAddress: state.loginReducer.walletAddress,
  };
};

const mapDispatchToProps = (_dispatch) => {
  let dispatch = _dispatch;
  return bindActionCreators(ULPActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLandingPage);
