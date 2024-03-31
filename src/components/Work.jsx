export default function Work({ formData, handleInputChange }) {
  return (
    <div className="section">
      <h2>Work</h2>
      <label>
        Work
        <input
          name="workCompany"
          type="text"
          value={formData.workCompany}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Work position
        <input
          name="workPosition"
          type="text"
          value={formData.workPosition}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Work from
        <input
          name="workDateFrom"
          type="date"
          value={formData.workDateFrom}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Work until
        <input
          name="workDateUntil"
          type="date"
          value={formData.workDateUntil}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}
