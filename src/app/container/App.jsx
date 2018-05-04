import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  NavigationBar from '../components/NavigationBar/NavigationBar';
import './App.scss';

class App extends React.Component {
  render() {
    return (
            <section className='container-fluid no-padding' id='AppSection'>
                <NavigationBar />
                    <div className='row no-margin'>
                        <div className='col-md-12 no-padding'>
                            {this.props.children}
                        </div>
                    </div>
            </section>
        );
  };
};

export default App;
