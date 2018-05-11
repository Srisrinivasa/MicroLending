import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import './MyInstallments.scss';
import * as proposalActions from '../../../actions/ProposalActions.jsx';
import classNames from 'classnames';

// with es6
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css';
import { Badge } from 'react-bootstrap';

class MyInstallments extends React.Component {
  statusFormatter(status) {
    return <button className='btn btn-primary'>Pay EMI</button>;
  }

  render() {
    return (
      <section className='container-fluid' id='MyInstallmentsSection'>
        <div className='row'>
          <div className='col-md-12'>
            <h1>My Installments</h1>
            <BootstrapTable
              data={[{
                ID: 1,
                Tenure: 12,
                Amt: 10000,
                ROI: 8.5,
                subDate: (Date.now().toLocaleString()),
                Fund: 8000,
                Status: 'PENDING',
              },
              {
                ID: 2,
                Tenure: 24,
                Amt: 20000,
                ROI: 9.0,
                subDate: (Date.now().toLocaleString()),
                Fund: 20000,
                Status: 'ACHIEVED',
              },
              {
                ID: 1,
                Tenure: 12,
                Amt: 90000,
                ROI: 11,
                subDate: (Date.now().toLocaleString()),
                Fund: 8000,
                Status: 'FAILED',
              },
              ]}
              ordered={true}
              pagination>
              <TableHeaderColumn dataField='ID' isKey>
                ID
              </TableHeaderColumn>

              <TableHeaderColumn dataField='Amt'>
                Proposal Amount
              </TableHeaderColumn>

              <TableHeaderColumn dataField='Tenure'>
                Tenure
              </TableHeaderColumn>

              <TableHeaderColumn dataField='ROI'>
                Rate of Interest
              </TableHeaderColumn>

              <TableHeaderColumn dataField='subDate'>
                Next due date
              </TableHeaderColumn>

              <TableHeaderColumn dataField='Status'
               dataFormat={this.statusFormatter} >
                Pay EMI
              </TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
      </section>
    );
  };
};

const mapStateToProps = (_state) => {
  let state = _state;
  return {
  };
};

const mapDispatchToProps = (_dispatch) => {
  let dispatch = _dispatch;
  return bindActionCreators(proposalActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MyInstallments);
