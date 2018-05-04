import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.scss';

class App extends React.Component {
  render() {
    return (
            <section className='container-fluid no-padding bg' id='AppSection'>
                    <div className='row no-margin'>
                        <div className='col-md-12 no-padding'>
                            <h1>Sathwik</h1>
                        </div>
                    </div>
            </section>
        );
  };
};

// const mapStateToProps = (_state) => {
//     let state = _state;
//     return {
//         reducerName: state.reducerName,
//       };
//   };

// const mapDispatchToProps = (_dispatch) => {
//     let dispatch = _dispatch;
//     return bindActionCreators({ actionName }, dispatch);
//   };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
