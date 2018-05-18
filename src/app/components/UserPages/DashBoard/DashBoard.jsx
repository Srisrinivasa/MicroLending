import React from 'react';
import './DashBoard.scss';
import UserNavigationBar from '../UserNavigationBar/UserNavigationBar.jsx';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class DashBoard extends React.Component {
  render() {
    return (
        <section className='container-fluid no-padding h100 w100' id='DashBoardSection'>
                <div className='row no-margin h100 w100'>

                    {
                    (this.props.walletAddress) ?
                        (
                            <div className='col-md-12 no-padding h100 w100'>
                                    <div className='row-no-margin'>
                                        <UserNavigationBar />
                                    </div>
                                    <div className='row no-margin'>
                                        {this.props.children}
                                    </div>
                                </div>
                        )
                        :
                        (
                            <div className='col-md-6 col-md-offset-4'>
                                    <h1>
                                        Oops! Couldn't find wallet address
                                    </h1>
                                    <h5 className="col-md-offset-3">
                                        <Link to="/">Click here</Link> to Login again
                                    </h5>
                                </div>
                        )
                }


                </div>
            </section>
    );
  };
};

const mapStateToProps = (_state) => {
    let state = _state;
    return {
        walletAddress: state.loginReducer.walletAddress,
      };
  };

export default connect(mapStateToProps)(DashBoard);

