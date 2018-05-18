import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavigationBar from '../../components/NavigationBar/NavigationBar.jsx';
import * as loginActions from '../../actions/loginActions.jsx';
import BootStrapModal from '../../components/Modal/BootStrapModal.jsx';
import './App.scss';
import Home from '../../components/Home/Home';

class App extends React.Component {
  onLogin() {
    let credentials = { address: this.props.loginReducer.walletAddress,
      key: this.props.loginReducer.loginPassword, };
    this.props.checkLogin(credentials);
  }

  render() {
    let loginForm = (
        <form>
                <div className="form-group">
                    <label>Wallet address:</label>
                    <input value={this.props.loginReducer.walletAddress}
                    onChange={(event) => this.props.LoginUpdateInput(event)} name="walletAddress"
                    type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input value={this.props.loginReducer.loginPassword}
                    onChange={(event) => this.props.LoginUpdateInput(event)} name="loginPassword"
                    type="password" className="form-control" />
                </div>
            </form>
    );
    return (
        <section className='container-fluid no-padding h100 w100' id='AppSection'>
                <div className='row no-margin h100 w100'>
                    <div className='col-md-12 no-padding h100 w100'>
                        <div className='row-no-margin' id='headerSection'>
                            <NavigationBar
                            showLoginModal={(modalName) => this.props.LoginSetTrue(modalName)} />
                        </div>
                        <div className='row no-margin' id='bodySection'>
                            <Home />
                        </div>
                    </div>
                </div>

                {/* Display Login Modal */}

                <BootStrapModal
                handleClose={() => this.props.LoginSetFalse('showLoginModal')}
                heading="Login Form"
                body={loginForm}
                submit={() => this.onLogin()}
                show={this.props.loginReducer.showLoginModal}
            />
            </section>
    );
  };
};

const mapStateToProps = (_state) => {
    let state = _state;
    return {
        loginReducer: state.loginReducer,
      };
  };

const mapDispatchToProps = (_dispatch) => {
    let dispatch = _dispatch;
    return bindActionCreators(loginActions, dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
