import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import "./contact.scss"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  for = "";
  header = "";

  constructor(props) {
    super(props);
    if (props.location.state) {
      this.for = props.location.state.for
      this.header = props.location.state.header
    }
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout backgroundColor="#FFFF00">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <fieldset>
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>

            <legend>
              Contact {this.header}
            </legend>

            <div className="container">
              <label htmlFor="name">Your Full Name*: </label>
              <br />
              <input
                type="text"
                name="name"
                id="name"
                maxLength={50}
                required
                onChange={this.handleChange}
              />
              <br />
              <span id="contactus_name_errorloc" className="error"></span>
            </div>
            <div className="container">
              <label htmlFor="email">Email Address*:</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                maxLength={50}
                required
                onChange={this.handleChange}
              />
              <br />
              <span id="contactus_email_errorloc" className="error"></span>
            </div>
            <div className="container">
              <label htmlFor="phone">Phone Number if you want a reply:</label>
              <br />
              <input
                type="text"
                name="phone"
                id="phone"
                maxLength={15}
                onChange={this.handleChange}
              />
              <br />
              <span id="contactus_phone_errorloc" className="error"></span>
            </div>
            <div className="container">
              <label htmlFor="message">Message</label>
              <br />
              <span id="contactus_message_errorloc" className="error"></span>
              <textarea
                rows={10}
                cols={50}
                name="message"
                id="message"
                required
                maxLength={2048}
                onChange={this.handleChange}
              ></textarea>
            </div>

            <div className="container">
              <input type="submit" name="Submit" value="Submit" />
            </div>
          </fieldset>
        </form>
      </Layout>
    );
  }
}
