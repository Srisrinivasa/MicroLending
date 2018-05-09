import React from 'react';
import './Home.scss';
import BorrowerList from '../../container/Borrower/BorrowerList.jsx';
import { GetStarted } from '../GetStarted/GetStarted.jsx';
import { UserHelp } from '../UserHelp/UserHelp.jsx';

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

            <div className="row no-margin">
                <div className="col-md-12">
                    <BorrowerList />
                </div>
            </div>

            <div className="row no-margin">
                    <UserHelp />
            </div>
            
            <div className="row no-margin">
                    <GetStarted />
            </div>

        </section>
    );
  };

export default Home;
