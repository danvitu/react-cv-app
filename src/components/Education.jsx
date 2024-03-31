export default function Education({ formData, handleInputChange }) {
  return (
    <div className="section">
      <h2>Education</h2>
      <label>
        Study school:
        <input
          name="studySchool"
          type="text"
          value={formData.studySchool}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Study title
        <input
          name="studyTitle"
          type="text"
          value={formData.studyTitle}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Study date
        <input
          name="studyDate"
          type="date"
          value={formData.studyDate}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}
