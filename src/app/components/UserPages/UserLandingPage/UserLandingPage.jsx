import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BorrowerList from '../../../container/Borrower/BorrowerList.jsx';
import * as ULPActions from '../../../actions/ULPActions.jsx';
import BootStrapModal from '../../../components/Modal/BootStrapModal.jsx';
import './UserLanding.scss';

class UserLandingPage extends React.Component {
  render() {
    let ProposalForm = (
      <form onSubmit={this.applyLoanForm}>
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
          submit={this.applyLoanForm}
          show={this.props.ULPReducer.showAddProposalModal}
        />
      </section>
    );
  };
};

const mapStateToProps = (_state) => {
  let state = _state;
  return {
    ULPReducer: state.ULPReducer,
  };
};

const mapDispatchToProps = (_dispatch) => {
  let dispatch = _dispatch;
  return bindActionCreators(ULPActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLandingPage);
