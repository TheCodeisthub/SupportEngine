import React from "react"
import { navigateTo } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <div>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          className="contact_form"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          <div className="input-c">
            <p>
              <label>
                Your name:
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  autoComplete
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <p>
              <label>
                Your email:
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@mail.com"
                  required
                  autoComplete
                  onChange={this.handleChange}
                />
              </label>
            </p>
          </div>

          <p>
            <label>
              Message:
              <br />
              <textarea
                name="message"
                placeholder="Tell us about your business..."
                required
                onChange={this.handleChange}
              />
            </label>
          </p>

          <h4 title="Important">
            GDPR Agreement <i style={{ color: "red" }}>*</i>
          </h4>
          <label style={{ fontWeight: "400" }} class="r-sidebar--label">
            I consent to having Support Engine store my submitted information
            and contacting me with it.
            <input type="checkbox" required />
            <span class="checkmark" />
          </label>

          <p
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <button className="btn_submit" type="submit">
              Send
            </button>
          </p>
        </form>
      </div>
    )
  }
}
