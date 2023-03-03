import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    }
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Incorrect email format");
      return;
    }
    setName("");
    setEmail("");
    setMessage("");
    alert(`Thank you for reaching out, ${name}.`);
  };
  return (
    <div>
    <form className="form mb-3">
    <input
        value={name}
        name="name"
        onChange={handleInputChange}
        type="text"
        placeholder="full name"
      />
      <input
        value={email}
        name="email"
        onChange={handleInputChange}
        type="email"
        placeholder="Enter email"
      />
        <input
        value={message}
        name="message"
        onChange={handleInputChange}
        type="text"
        placeholder="Enter your message"
      />
      <button variant="primary" type="button" onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
    {errorMessage && (
      <div>
        <p className="error-text">{errorMessage}</p>
      </div>
    )}
  </div>
  )
}
