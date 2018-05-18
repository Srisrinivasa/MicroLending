import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import './MyInstallments.scss';
import * as proposalActions from '../../../actions/ProposalActions.jsx';
import classNames from 'classnames';
import BootStrapModal from '../../../components/Modal/BootStrapModal.jsx';

// with es6
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import { Badge } from 'react-bootstrap';

class MyInstallments extends React.Component {
  statusFormatter(status) {
    return <button className='btn btn-primary'>Pay EMI</button>;
  };

  componentDidMount() {
    this.props.getMyInstallments(this.props.walletAddress);
  };

  onShowCredentialModal = (cell, row) => {
    this.props.ProposalSetValue({ setFor: 'selectedEMI', setVal: row });
    this.props.ProposalSetTrue('showCredentialModal');
  };

  buttonFormatter = (cell, row) => {
    return <button className="btn btn-sm btn-primary"
      onClick={() => this.onShowCredentialModal(cell, row)}>Pay EMI</button>;
  };

  render() {
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
          <input value={this.props.proposalsReducer.userPassword}
            onChange={this.props.ProposalUpdateInput} name="userPassword"
            type="password" className="form-control" />
        </div>
      </form>
    );

    return (
      <section className='container-fluid' id='MyInstallmentsSection'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>My Installments</h1>
            <BootstrapTable
              data={this.props.proposalsReducer.myInstallments}
              ordered={true}
              pagination>
              <TableHeaderColumn dataField='installmentAmt' isKey>
                Installment Amount
              </TableHeaderColumn>

              <TableHeaderColumn dataField='dueDate'>
                EMI Due Date
              </TableHeaderColumn>

              <TableHeaderColumn dataField='remainingTenure'>
                Remaining Tenure(in months)
              </TableHeaderColumn>
              <TableHeaderColumn dataField="button"
                dataFormat={this.buttonFormatter}>Pay EMI</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>

        {/* Display EMI Modal */}
        <BootStrapModal
          handleClose={() => this.props.ProposalSetFalse('showCredentialModal')}
          heading="Credentials Manager"
          body={credentialForm}
          submit={() => this.onPayEMI()}
          show={this.props.proposalsReducer.showCredentialModal}
        />

      </section>
    );
  };
};

const mapStateToProps = (_state) => {
  let state = _state;
  return {
    proposalsReducer: state.proposalsReducer,
    walletAddress: state.loginReducer.walletAddress,
  };
};

const mapDispatchToProps = (_dispatch) => {
  let dispatch = _dispatch;
  return bindActionCreators(proposalActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyInstallments);
