import React from 'react';
import './DashBoard.scss';
import UserNavigationBar from '../UserNavigationBar/UserNavigationBar.jsx';

class DashBoard extends React.Component {
  render() {
    return (
        <section className='container-fluid no-padding h100 w100' id='DashBoardSection'>
                <div className='row no-margin h100 w100'>
                    <div className='col-md-12 no-padding h100 w100'>
                    <div className='row-no-margin'>
                        <UserNavigationBar />
                    </div>
                    <div className='row no-margin'>
                        {/*{this.props.children}   */}
                    </div>
                    </div>
                </div>
            </section>
    );
  };
};

export default DashBoard;
