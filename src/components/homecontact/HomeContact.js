import React from 'react'
import ContactForm from '../commons/ContactForm'

export const HomeContact = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className='text-center'>
                    <h2>
                        Bize Ulaşın
                    </h2>
                </div>
                <div className="col-md-4 col-sm-12 mt-4">
                    <img src='/images/form-image.jpg' style={{
                        display: "block",
                        height: "auto",
                        width: "100%"
                    }} />
                </div>
                <div className="col-md-8 col-sm-12 homepage-contact mt-4">
                    <ContactForm />
                </div>
            </div>

        </div>
    )
}
