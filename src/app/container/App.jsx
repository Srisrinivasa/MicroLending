import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavigationBar from '../components/NavigationBar/NavigationBar.jsx';
import './App.scss';

class App extends React.Component {
  render() {
    return (
        <section className='container-fluid no-padding bg h100 w100' id='AppSection'>
                <div className='row no-margin h100 w100'>
                    <div className='col-md-12 no-padding h100 w100'>
                    <div className='row-no-margin' id='headerSection'>
                        <NavigationBar />
                    </div>
                    <div className='row no-margin' id='bodySection'>
                        {this.props.children}   
                    </div>
                    </div>
                </div>
            </section>
    );
  };
};

export default App;
