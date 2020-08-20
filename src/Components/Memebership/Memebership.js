import React from "react";
import "./Membership.scss";

import logo from "../../../src/Assets/image/cewa.png";
import { Container } from "react-bootstrap";
const Membership = () => {
  return (
    <Container className="Membership">
      
      <form
        name="membership"
        netlify
        data-netlify-honeypot="bot-field"
        method="POST"
        className="memForm"
      >
        <input type="hidden" name="form-name" value="membership" />
        <div className="Logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="title">
          <h2>Membership Form</h2>
        </div>
        <div className="pair">
          <div className="Mem">
            <label>Name of Applicant</label><br />
            <input
              type="text"
              name="name"
              size="25"
            />
          </div>
          <div className="Mem">
            <label>Age</label><br />
            <input type="text" name="age" size="25"/>
          </div>
        </div>

        <div className="pair">
          <div className="Mem">
          <label>Sex</label><br />
            <select name="sex">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="Mem">
          <label>Phone</label><br />
            <input
              type="text"
              size="25"
              name="phone"
            />
          </div>
          <div className="Mem">
          <label>Email</label><br />
            <input type="email" name="email" size="25"/>
          </div>
        </div>
        <div className="pair">
          <div className="Mem">
            <label>Occupation</label><br />
            <input
              type="text"
              name="occupation"
              size="25"
            />
          </div>
          <div className="Mem">
          <label>Current Address</label><br />
            <input
              type="text"
              name="Current Address"
              size="25"
            />
          </div>
        </div>
        <div className="pair">
          <div className="Mem">
          <label>Mailing Address</label><br />
            <input
              type="text"
              size="25"
              name="mailingAddress"
            />
          </div>
          
        </div>
        <div className="pair">
          <div className="Mem">
            <label>Describe the reason for wanting to be a memeber?</label><br />
            <textarea
              rows="6"
              cols="28"
              size="25"
              name="description"
            />
          </div>
        </div>
        <div className="formBottom">
          <input type="checkbox"></input>
          <p>
            By filling up this form and verify Captcha, you have accepted to be
            a member of Children’s Endorse Welfare Association and will have to
            actively participate in all the events conducted by the association.
          </p>
        </div>
        <div className="logo">
          <div data-netlify-recaptcha="true"></div>
        </div>
        <div className="submit">
          <button>Submit</button>
        </div>
      </form>
    </Container>
  );
};
export default Membership;
