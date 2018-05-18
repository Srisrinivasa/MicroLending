import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import './AllProposals.scss';
import * as proposalActions from '../../../actions/ProposalActions.jsx';
import BootStrapModal from '../../../components/Modal/BootStrapModal.jsx';
import classNames from 'classnames';
import Countdown from 'react-countdown-now';

// with es6
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import { Badge } from 'react-bootstrap';

class AllProposals extends React.Component {
  componentDidMount() {
    this.props.getMyProposals(this.props.walletAddress);
  };

  collectAmountHandler = () => {
    let { selectedCollectAmtRow, userPassword } = this.props.proposalsReducer;
    if (this.props.proposalsReducer.userPassword) {
      this.props.collectAmount(selectedCollectAmtRow, this.props.walletAddress, userPassword);
    } else {
      alert('Enter password');
    }
  };

  showCredentialManager(selectedRow) {
    debugger;
    this.props.ProposalSetValue({ setFor: 'selectedCollectAmtRow', setVal: selectedRow },
    this.props.ProposalSetTrue('ShowCredentialManager'));
  };

  statusFormatter = (status, selectedRow) => {
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          return <button
                className='btn btn-xs'
                onClick={() => this.showCredentialManager(selectedRow)}>
                  Collect Amount
              </button>;
        } else {
          return <Badge className='greenColor'>Collect in {hours}:{minutes}:{seconds}</Badge>;
        }
      };

    return <div>
      {
        (status === 'SUCCESS') ?
        (
          (selectedRow.ClaimStatus) ?
            (
              <Badge className='greenColor'>Claimed</Badge>
            )
            :
            (
              <Countdown date={selectedRow.ExpireDate} renderer={renderer} />
            )
        )
        :
        (
          <Badge
            className={classNames({
              'yellowColor': status === 'PENDING',
              'redColor': status === 'FAILED',
            })}>
            {status}</Badge>
        )
      }
    </div>;
  };

  dateFormatter = (date) => {
      debugger;
      return (new Date(date).toLocaleString());
    };

  render() {
    let credentialForm = (
      <form>
        <div className="form-group">
          <label>Wallet Address:</label>
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
      <section className='container-fluid' id='AllProposalsSection'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>All Proposals</h1>
            <BootstrapTable
              data={this.props.proposalsReducer.myProposals}
              ordered={true}
              pagination>
              <TableHeaderColumn dataField='ID' isKey>
                Proposal ID
              </TableHeaderColumn>

              <TableHeaderColumn dataField='Amt'>
                Proposal Amount
              </TableHeaderColumn>

              <TableHeaderColumn dataField='Tenure'>
                Tenure(in months)
              </TableHeaderColumn>

              <TableHeaderColumn dataField='ROI'>
                Rate of Interest(%)
              </TableHeaderColumn>

              <TableHeaderColumn dataField='SubDate'>
                Submitted date
              </TableHeaderColumn>

              <TableHeaderColumn dataField='ExpireDate'
                dataFormat={this.dateFormatter}  >
                Expire date
              </TableHeaderColumn>

              <TableHeaderColumn dataField='Fund'>
                Funding Achieved
              </TableHeaderColumn>

              <TableHeaderColumn dataField='Status'
                dataFormat={this.statusFormatter} >
                Status
              </TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
        <BootStrapModal
          handleClose={() => this.props.ProposalSetFalse('ShowCredentialManager')}
          heading="Credential Manager"
          body={credentialForm}
          submit={() => this.collectAmountHandler()}
          show={this.props.proposalsReducer.ShowCredentialManager}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllProposals);
