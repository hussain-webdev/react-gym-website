import React from "react";

const Input = () => {
  return (
    <div id="contact" className="input">
      <div className="in-holder">
        <div className="in-heading">
          <h1>Contact</h1>
        </div>
        <div className="forms">
          <p>
            We would love to hear from you! If you have any questions, comments
            or feedback, please let us know.
          </p>
          <form action="">
            <div className="upperin">
              <input required type="text" placeholder="Your Name" />
              <input required type="email" placeholder="Your Email" />
            </div>
            <div className="lowerin">
              <textarea
                required
                name=""
                placeholder="Your message"
                id=""
              ></textarea>
            </div>
            <button type="submit" onClick={(e) => e.preventDefault()}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Input;
