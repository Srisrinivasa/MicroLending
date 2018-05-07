import React from 'react';
import './Home.scss';
import Lender from '../../container/Lender/Lender';

const Home = () => {
    return (
        <div>
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
                <br/>
        </div>
        <div className="row no-margin">
                    <div className="col-md-12">
                    <Lender />                
                </div>
            </div>
      </div>
    );
  };

export default Home;
