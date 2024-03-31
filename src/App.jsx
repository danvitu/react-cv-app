import { useState } from "react";
import Display from "./components/Display";
import Form from "./components/Form";

import { formObject, exampleForm } from "./components/formObject";

import "./styles/App.css";

function App() {
  const [formStatus, setFormStatus] = useState(true);
  const [formData, setFormData] = useState(formObject);

  function clearForm() {
    setFormData(formObject);
  }

  function loadExample() {
    setFormData(exampleForm);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setFormStatus(false);
  }

  function handleEditClick() {
    setFormStatus(true);
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <h1>CV App</h1>
      {formStatus ? (
        <Form
          handleFormSubmit={handleFormSubmit}
          formData={formData}
          handleInputChange={handleInputChange}
          loadExample={loadExample}
          clearForm={clearForm}
        />
      ) : (
        <Display handleEditClick={handleEditClick} formData={formData} />
      )}
    </>
  );
}

export default App;
