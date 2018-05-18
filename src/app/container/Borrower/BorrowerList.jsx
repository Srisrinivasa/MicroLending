import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import BootStrapModal from '../../components/Modal/BootStrapModal.jsx';
import './BorrowerList.scss';
import * as borrwerActions from '../../actions/borrowerAction';
import classNames from 'classnames';

// with es6
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import { CollectFundCon } from '../../common/solidityAddresses.jsx';
import { web3 } from '../../common/solidityAddresses.jsx';

class BorrowerList extends React.Component {
  componentDidMount() {
    this.props.GetBorrowerList();
  };

  componentWillUnmount() {
    this.props.SetFalse('showLoanModal');
  };

  applyLoan = (cell, row) => {
    this.props.BorrowerSetValue({ setFor: 'selectedBorrower', setVal: row });
    this.props.SetTrue('showLoanModal');
  };

  buttonFormatter = (cell, row) => {
    let isSameOwner = (this.props.walletAddress === row.walletAddress);
    return <button className="btn btn-sm btn-primary"
      disabled={isSameOwner}
      title={(isSameOwner) ? 'Can\'t invest on your request' : 'Click to invest'}
      onClick={() => this.applyLoan(cell, row)}>Invest</button>;
  };

  onInvest = () => {
    let investData = {
      lenderWalletAddr: this.props.borrowerReducer.lenderWalletAddr,
      lendingAmt: this.props.borrowerReducer.lendingAmt,
      proposalID: this.props.borrowerReducer.selectedBorrower.proposalID,
      lenderPassword: this.props.borrowerReducer.lenderPassword,
      lenderWalletAddr: this.props.walletAddress ?
        (this.props.walletAddress)
        :
        (this.props.borrowerReducer.lenderWalletAddr),
    };

    this.props.InvestAmount(investData);
  };

  render() {
    let loanForm = (
      <form>
        <div className="form-group">
          <label>Lender Wallet Address:</label>
          <input value={(this.props.walletAddress) ?
                        (this.props.walletAddress) : (this.props.borrowerReducer.lenderWalletAddr)}
            disabled={this.props.walletAddress}
            onChange={this.props.UpdateInput} name="lenderWalletAddr"
            type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input value={this.props.borrowerReducer.lendingAmt}
            onChange={this.props.UpdateInput} name="lendingAmt"
            type="number" className="form-control" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input value={this.props.borrowerReducer.lenderPassword}
            onChange={this.props.UpdateInput} name="lenderPassword"
            type="password" className="form-control" />
        </div>
      </form>
    );

    return (
      <section className='container-fluid' id='BorrowerSection'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>Borrowers list</h1>
            <BootstrapTable
              data={this.props.borrowerReducer.borrowerList}
              ordered={true}
              pagination>
              <TableHeaderColumn dataField='walletAddress' isKey>
                Wallet address
              </TableHeaderColumn>

              <TableHeaderColumn dataField='proposalGoal'>
                Proposal Amount
              </TableHeaderColumn>

              <TableHeaderColumn dataField='proposalTenure'>
                Tenure
              </TableHeaderColumn>

              <TableHeaderColumn dataField='proposalROI'>
                Rate of Interest
              </TableHeaderColumn>

              <TableHeaderColumn dataField='proposalExpiration'>
                Expire Date
              </TableHeaderColumn>

              <TableHeaderColumn dataField='proposalAchieved'>
                Funding Achieved
              </TableHeaderColumn>

              <TableHeaderColumn dataField="button"
                dataFormat={this.buttonFormatter}>Invest</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>

        {/* Display Modal */}
        <BootStrapModal
          handleClose={() => this.props.SetFalse('showLoanModal')} heading="Lend Form"
          body={loanForm}
          submit={() => this.onInvest()}
          show={this.props.borrowerReducer.showLoanModal}
        />
        
      </section>
    );
  };
};

const mapStateToProps = (_state) => {
  let state = _state;
  return {
    borrowerReducer: state.borrowerReducer,
    walletAddress: state.loginReducer.walletAddress,
  };
};

const mapDispatchToProps = (_dispatch) => {
  let dispatch = _dispatch;
  return bindActionCreators(borrwerActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BorrowerList);
