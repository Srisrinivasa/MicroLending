import React from 'react';
import './Home.scss';

const Home = () => {
    return (
        <div className='container-fluid no-padding' id="landing-home">
            <div className="row">
                <div className="col-md-6">
                    Table
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
