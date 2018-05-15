import React from 'react';
import './Home.scss';
import BorrowerList from '../../container/Borrower/BorrowerList.jsx';
import { GetStarted } from '../GetStarted/GetStarted.jsx';
import { UserHelp } from '../UserHelp/UserHelp.jsx';
import { Breadcrumb } from 'react-bootstrap';

const Home = () => {
    return (
        <section id='HomeSection'>
            <div className='container-fluid no-padding' id="landing-home">
                <div className="row no-margin">
                    <div className="col-md-12 text-center bg-img">
                        <h1>Lending Platform</h1>
                        <p>
                            In this application Borrowers can find Lenders and vice-versa.
                            This is peer to peer connected architecture using BlockChain.
                        </p>
                    </div>
                </div>
                <br />
            </div>

            <div className="row no-margin" id='borrowerPane'>
                <div className="col-md-12">
                    <BorrowerList />
                </div>
            </div>
            <br />
            <hr className='col-md-10 col-md-offset-1' />
            <br />
            <div className="row no-margin" id='userHelpPane'>
                <UserHelp />
            </div>
            <br />
            <br />
            <hr className='col-md-10 col-md-offset-1' />

            <div className="row no-margin" id='getStartedPane'>
                <GetStarted />
            </div>

        </section>
    );
  };

export default Home;
