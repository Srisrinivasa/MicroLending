import React from 'react';
import './GetStarted.scss';

export const GetStarted = (props) => {

    let GetStartedSection = (
        <section className='container-fluid' id='GetStartedSection'>
            <div className="row no-margin">
                <div className='col-md-6 leftPane'>
                    <div className='col-md-offset-1'>
                        <h3>Start using today</h3>
                        <p className='text-muted'>
                            <em>
                                The standard chunk of Lorem Ipsum used since the 1500s
                            is reproduced below for those interested.
                            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                            by Cicero are also reproduced in their exact original form,
                            accompanied by English versions from the 1914 translation by H. Rackham.
                        </em>
                        </p>
                        <strong className='text-muted'>
                            No middleman, cash out whenever you want
                        </strong>
                    </div>
                    <br />
                    <div className="row">
                        <button className='col-md-3 col-md-offset-1 btn'>
                            Get Free account
                        </button>
                    </div>
                </div>
                <div className='col-md-6 rightPane'>
                    <div className='col-md-offset-2'>
                        <div className="row no-margin boxStyle">
                            <div className="col-md-2">
                                <h1>1</h1>
                            </div>
                            <div className="col-md-10">
                                <h5>Start using today</h5>
                                <p className='text-muted'>
                                    The standard chunk of Lorem Ipsum used since the 1500s
                                is reproduced below for those interested.
                        </p>
                            </div>
                        </div>

                        <br />
                        <br />
                        <div className="row no-margin boxStyle">
                            <div className="col-md-2">
                                <h1>2</h1>
                            </div>
                            <div className="col-md-10">
                                <h5>Start using today</h5>
                                <p className='text-muted'>
                                    The standard chunk of Lorem Ipsum used since the 1500s
                            is reproduced below for those interested.
                        </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    return GetStartedSection;
  };
