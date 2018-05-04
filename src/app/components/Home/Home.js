import React from 'react';
import './Home.scss';
import Lender from '../../container/Lender/Lender';

const Home = () => {
    return (
        <div>
            <div className='container-fluid' id="landing-home">
                <div className="row no-margin">
                    <div className="col-md-12 text-center bgColor lending-img">
                        <h3 className="lending-heading">Lending Platform</h3>
                        <p className="lending-paragraph">
                            In this application Borrowers can find Lenders and vice-versa. 
                            This is peer to peer connected architecture using BlockChain. 
                        </p>
                    </div>
                </div>
                <br/>
        </div>
        <div className="row no-margin">
                    <div className="col-md-12 bgColor">
                    <Lender />                
                </div>
            </div>
      </div>
    );
  };

export default Home;
