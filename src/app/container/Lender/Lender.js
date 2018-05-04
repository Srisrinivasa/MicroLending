import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Lender.scss';

class Lender extends React.Component {
  render() {
    return (
        <section className='container-fluid' id='LenderSection'>
                <div className='row'>
                    <div className='col-md-12'>
                        RenderList goes here
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
