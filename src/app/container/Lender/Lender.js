import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Lender.scss';

// with es6
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/css/react-bootstrap-table.css';

var products = [{
    id: 1,
    name: 'Abhijit',
    price: 10000,
    roi: 8.5,
  },
  {
    id: 2,
    name: 'Sathwik',
    price: 5000,
    roi: 8,
  },
  {
    id: 3,
    name: 'Kaushik',
    price: 1000,
    roi: 5,
  },
];

class Lender extends React.Component {
  render() {
    return (
        <section className='container-fluid' id='LenderSection'>
                <div className='row'>
                    <div className='col-md-12'>
                       <h3>Lenders list</h3>
                        <BootstrapTable
                            data={ products }
                            pagination>
                            <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                            <TableHeaderColumn dataField='roi'>Roi</TableHeaderColumn>
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
    return bindActionCreators({  }, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(Lender);
