import React from "react";
import { useForm, ValidationError } from '@formspree/react';

function onClickButton(event) {
  event.preventDefault();
}

function Contact() {
  const [state, handleSubmit] = useForm("Contact");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center text-white">Contact Us</h1>
      </div>
      <div className="container contact-div text-white">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Enter Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter Your Name"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="form-group pt-3">
                <label htmlFor="number">Contact Number</label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  className="form-control"
                  placeholder="+506-"
                />
                <ValidationError 
                  prefix="Number" 
                  field="number"
                  errors={state.errors}
                />
              </div>
              <div className="form-group pt-3">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email" 
                  name="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="form-group pt-3">
                <label htmlFor="message">
                  Type your Message Here
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                  />
              </div>

              <div className="col-12 pt-3">
                <button
                  type="submit"
                  disabled={state.submitting}
                  onClick={onClickButton}
                  className="btn btn-outline-light"
                >
                  Submit form
                </button>
              </div>
              <br></br>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
