import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import BootStrapModal from '../../components/Modal/BootStrapModal.jsx';
import './Lender.scss';
import * as borrwerActions from '../../actions/borrowerAction';

// with es6
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css';

class Lender extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
    };
  }

  applyLoan = (cell, row) => {
    this.props.ShowLoanModal();
  };

  login(event) {
    event.preventDefault();
    this.setState({
      show: false,
    });
  }

  handleClose = () => {
    this.props.CloseLoanModal();
    browserHistory.push('/about');
  };

  buttonFormatter =  (cell, row) => {
    return <button className="btn btn-sm btn-primary"
    onClick={() => this.applyLoan(cell, row)}>Apply</button>;
  };

  render() {
    let loanForm = (
              <form onSubmit={this.login}>
                <div className="form-group">
                      <label>Lender Name:</label>
                      <input type="text" className="form-control" id="lender_name" />
                  </div>
                  <div className="form-group">
                      <label>Amount:</label>
                      <input type="number" className="form-control" id="amount" />
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
              </form>
          );

    return (
        <section className='container-fluid' id='LenderSection'>
                <div className='row'>
                    <div className='col-md-12'>
                       <h1>Borrowers list</h1>
                        <BootstrapTable
                            data={ this.props.borrowerReducer.lenders }
                            ordered={ true }
                            pagination>
                              <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                              <TableHeaderColumn dataField='name'>Lender Name</TableHeaderColumn>
                              <TableHeaderColumn dataField='price'>Amount</TableHeaderColumn>
                              <TableHeaderColumn dataField='roi'>Roi</TableHeaderColumn>
                              <TableHeaderColumn dataField="button"
                              dataFormat={this.buttonFormatter}>Button</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                </div>

                {/* Display Modal */}
                <BootStrapModal
                  handleClose={this.handleClose} heading="Login Form"
                  body={loanForm}
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

const mapDispatchToProps = dispatch => ({
    ShowLoanModal: () => {
      dispatch(borrwerActions.ShowLoanModal());
    },

    CloseLoanModal: () => {
      dispatch(borrwerActions.CloseLoanModal());
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(Lender);
