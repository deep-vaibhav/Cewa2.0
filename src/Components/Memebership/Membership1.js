import React from "react";
import "./Membership.scss";
import logo from "../../Assets/image/cewa.png";
import { Redirect } from "react-router-dom";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Membership extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      sex: "",
      phone: "",
      occupation: "",
      mailingAddress: "",
      currentAddress: "",
      email: "",
      description: "",
    };
  }
  handleSaveToPC = (jsonData) => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "filename.json";
    link.href = url;
    link.click();
  };
  onClickHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmitHandle = (e) => {
    fetch("./success", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "membership", ...this.state }),
    })
      .then(() => alert("Success! "))
      .then(this.handleSaveToPC(this.state))
      .then(() => Redirect("../"))
      .catch((err) => alert(err));
  };
  render() {
    return (
      <div className="Membership">
        
        <form
          name="membership"
          onSubmit={this.onSubmitHandle}
          onChange={this.onClickHandle}
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
              <input type="text" name="age" size="25" />
            </div>
          </div>

          <div className="pair">
            <div className="Mem">
              <label>Sex</label><br />
              <select name="sex" placeholder="Sex">
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
                name="currentAddress"
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
            <div className="Mem">
              <label>Email</label><br />
              <input
                type="email"
                name="email"
                required
                size="25"
              />
            </div>
          </div>
          <div className="pair">
            <div className="Mem">
              <label>A brief about why you want to join us</label><br />
              <textarea
                rows="6"
                cols="28"
                size="25"
                name="description"
              />
            </div>
          </div>
          <div className="para">
            <input type="checkbox" required></input>
            <p>
              By filling up this form and verify Captcha, you have accepted to
              be a member of Children’s Endorse Welfare Association and will
              have to actively participate in all the events conducted by the
              association.
            </p>
          </div>
          <div className="submit">
            <button type="submit"> Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Membership;
