import "../styles/Display.css";
import { format } from "date-fns";

export default function Display({ formData, handleEditClick }) {
  return (
    <div className="display">
      <div>
        <h2>General</h2>
        <p>
          {formData.firstName} {formData.lastName}
        </p>
        <p>{formData.email}</p>
        <p>{formData.phone}</p>
      </div>
      <div>
        <h2>Education</h2>
        <p>
          {format(formData.studyDate, "MMM yyyy")}
          {" | "}
          Studied {formData.studyTitle} in {formData.studySchool}
        </p>
      </div>
      <div>
        <h2>Work</h2>
        <p>
          {format(formData.workDateFrom, "MMM yyyy")} to {' '}
          {format(formData.workDateUntil, "MMM yyyy")} {' '}
          worked {formData.workPosition} in {formData.workCompany}
        </p>
      </div>
      <button type="button" onClick={handleEditClick}>
        Edit
      </button>
    </div>
  );
}
