import React from 'react';
import './Home.scss';
import Lender from '../../container/Lender/Lender';

const Home = () => {
    return (
        <div className='container-fluid no-padding' id="landing-home">
            <div className="row">
                <div className="col-md-6">
                    <Lender />
                </div>
                <div className="col-md-6">
                    <h3>Lending Platform</h3>
                    <p>
                        In this application Borrowers can find Lenders and vice-versa. 
                        This is peer to peer connected architecture using BlockChain. 
                    </p>
                </div>
            </div>
        </div>
    );
  };

export default Home;
