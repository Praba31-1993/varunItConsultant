import React from 'react'

function FoterSection() {
    return (
        <div className='row px-3'>
            <div className="col-6 col-md-3 mb-3">
                <h5 className='mb-3'>Section</h5>
                <div className="d-flex flex-column gap-3">
                    <p className="m-0">Home</p>
                    <p className="m-0">Features</p>
                    <p className="m-0">Pricing</p>
                    <p className="m-0">FAQ</p>
                    <p className="m-0">About</p>
                </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
                <h5 className='mb-3'>Section</h5>
                <div className="d-flex flex-column gap-3">
                    <p className="m-0">Home</p>
                    <p className="m-0">Features</p>
                    <p className="m-0">Pricing</p>
                    <p className="m-0">FAQ</p>
                    <p className="m-0">About</p>
                </div>
            </div>
            <div className="col-6 col-md-3 mb-3">
                <h5 className='mb-3'>Section</h5>
                <div className="d-flex flex-column gap-3">
                    <p className="m-0">Home</p>
                    <p className="m-0">Features</p>
                    <p className="m-0">Pricing</p>
                    <p className="m-0">FAQ</p>
                    <p className="m-0">About</p>
                </div>
            </div>

            <div className="col-6 col-md-3 mb-3">
                <h5 className='mb-3'>Subscribe to our Newsletter</h5>
                <p className='mb-3'>Monthly digest of whats new and exciting from us.</p>
                <div className="d-flex gap-2 align-items-center">
                    <input className="form-control " list="datalistOptions" id="exampleDataList" placeholder="Enter your Email"></input>

                    <button type="submit" className="btn btn-primary ">Subscribe</button>
                </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <p>© 2021 Company, Inc. All rights reserved.</p>
                <div className='d-flex gap-3 px-3'>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-whatsapp"></i>


                </div>
            </div>
        </div>
    )
}

export default FoterSection
