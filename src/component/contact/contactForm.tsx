import { TextField } from '@mui/material'
import React from 'react'

function ContactForm() {
    return (
        <div  >
            <div className="d-flex justify-content-center">
                <div className="row p-5">
                    <div className="col-12 col-xl-6 mb-3">
                        <TextField id="standard-basic" color="info" label="First Name*" variant="standard" fullWidth/>

                    </div>
                    <div className="col-12 col-xl-6 mb-3">
                        <TextField id="standard-basic" color="info" label="Last Name*" variant="standard" fullWidth/>
                    </div>

                     <div className="col-12 mb-3">
                        <TextField id="standard-basic" color="info" label="Email*" variant="standard" fullWidth/>
                    </div>

                     <div className="col-12 mb-3">
                        <TextField id="standard-basic" color="info" label="Message*" variant="standard" fullWidth/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
