import React from 'react';
import './UserHelp.scss';
import 'font-awesome/css/font-awesome.css';

export const UserHelp = (props) => {

    let UserHelpSection = (
        <section className='container-fluid no-padding' id='UserHelpSection'>
            <div className="row no-margin text-center">
                <h3>How Peer To Peer Lending Can Help You?</h3>
                <p className='text-muted col-md-6 col-md-offset-3'>
                    A peer to peer lending platform connects credit seeking individuals with
                    lenders willing to multiply their surplus wealth. MicroLending Platform has
                    been trusted by doctors, engineers, businessmen and many more for their
                    investing and financing needs.
            </p>
            </div>
            <div className='row no-margin' id='userHelpBody'>
                <div className="col-md-6 border-right">
                    <div className='text-center'>
                        <img
                            src={require('../../images/want-to-invest-icon.png')}
                            alt="LenderLogo" />
                        <h3>Want to invest</h3>
                    </div>
                    <br />
                    <div className="row no-margin">
                        <ul className="col-md-offset-1">
                            <li>
                                <i className='fa fa-star' />&nbsp;
                                Earn higher interest returns on your investments as much as 36%
                            </li>
                            <li>
                                <i className='fa fa-star' />&nbsp;
                                Invest as low as Rs. 1,000 in multiple verified & creditworthy borrowers
                            </li>
                            <li>
                                <i className='fa fa-star' />&nbsp;
                                Earn monthly returns and without any hidden charges
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='text-center'>
                        <img
                            src={require('../../images/need-a-loan-icon.png')}
                            alt="BorrowerLogo" />
                        <h3>Need a loan</h3>
                    </div>
                    <br />
                    <div className="row no-margin">
                        <ul className="col-md-offset-1">
                            <li>
                                <i className='fa fa-star' />&nbsp;
                                Save more with low interest rates as low as 12%
                            </li>
                            <li>
                                <i className='fa fa-star' />&nbsp;
                                Hassle free borrowing process, interact with lenders directly
                            </li>
                            <li>
                                <i className='fa fa-star' />&nbsp;
                                Avail small loans without any hidden charges
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );

    return UserHelpSection;
};
