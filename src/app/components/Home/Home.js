import React from 'react';
import './Home.scss';
import Lender from '../../container/Lender/Lender';
import { GetStarted } from '../GetStarted/GetStarted.jsx';

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
                    <Lender />
                </div>
            </div>

            
            <div className="row no-margin">
                <div className="col-md-12">
                    <GetStarted />
                </div>
            </div>

            <div className="row no-margin">
                <div className="col-md-12">

                </div>
            </div>
        </section>
    );
  };

export default Home;
