import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import BootStrapModal from '../../components/Modal/BootStrapModal.jsx';
import './BorrowerList.scss';
import * as borrwerActions from '../../actions/borrowerAction';

// with es6
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css';

class BorrowerList extends React.Component {

  componentWillMount() {
    this.props.GetLenderList();
  }

  applyLoan = (cell, row) => {
    this.props.UpdateCurrentLender(row);
    this.props.SetTrue('showLoanModal');
  };

  applyLoanForm = (event) => {
    event.preventDefault();
    alert('Loan applied');
  };

  updateInput = (event) => {
    this.props.UpdateInput(event);
  };

  buttonFormatter = (cell, row) => {
    return <button className="btn btn-sm btn-primary"
      onClick={() => this.applyLoan(cell, row)}>Invest</button>;
  };

  render() {
    let loanForm = (
      <form onSubmit={this.applyLoanForm}>
        <div className="form-group">
          <label>Lender Name:</label>
          <input value={this.props.borrowerReducer.lenderName}
            onChange={this.updateInput} name="lenderName"
            type="text" className="form-control" id="lender_name" />
        </div>
        <div className="form-group">
          <label>Amount:</label>
          <input value={this.props.borrowerReducer.lenderAmount}
            onChange={this.updateInput} name="lenderAmount"
            type="number" className="form-control" id="amount" />
        </div>
      </form>
    );

    return (
      <section className='container-fluid' id='BorrowerSection'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>Borrowers list</h1>
            <BootstrapTable
              data={this.props.borrowerReducer.lenders}
              ordered={true}
              pagination>
              <TableHeaderColumn dataField='id' isKey>
                Wallet address
              </TableHeaderColumn>
              
              <TableHeaderColumn dataField='price'>
                Proposal Amount
              </TableHeaderColumn>
              
              <TableHeaderColumn dataField='name'>
                Tenure
              </TableHeaderColumn>
              
              <TableHeaderColumn dataField='roi'>
                Rate of Interest
              </TableHeaderColumn>
              
              <TableHeaderColumn dataField='name'>
                Expire Date
              </TableHeaderColumn>
              
              <TableHeaderColumn dataField='name'>
                Funding Achieved
              </TableHeaderColumn>
              
              <TableHeaderColumn dataField="button"
                dataFormat={this.buttonFormatter}>Invest</TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>

        {/* Display Modal */}
        <BootStrapModal
          handleClose={() => this.props.SetFalse('showLoanModal')} heading="Login Form"
          body={loanForm}
          submit={this.applyLoanForm}
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
  };
};

const mapDispatchToProps = (_dispatch) => {
  let dispatch = _dispatch;
  return bindActionCreators(borrwerActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BorrowerList);
