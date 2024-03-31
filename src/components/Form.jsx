import "../styles/Form.css";
import Education from "./Education";
import General from "./General";
import Work from "./Work";

export default function Form({
  handleFormSubmit,
  formData,
  handleInputChange,
  loadExample,
  clearForm,
}) {
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <General formData={formData} handleInputChange={handleInputChange} />
        <Education formData={formData} handleInputChange={handleInputChange} />
        <Work formData={formData} handleInputChange={handleInputChange} />
        <div className="form-buttons">
          <button>Generate CV</button>
          <button type="button" onClick={loadExample}>
            Load example
          </button>
          <button type='button' onClick={clearForm}>Clear form</button>
        </div>
      </form>
    </>
  );
}
