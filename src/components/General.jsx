
export default function General({ formData, handleInputChange }) {
  return (
    <div className='section'>
      <h2>General</h2>
      <label>
        First name*
        <input
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleInputChange}
          required={true}
        />
      </label>
      <label>
        Last name*
        <input
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleInputChange}
          required={true}
        />
      </label>
      <label>
        Email*
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required={true}
        />
      </label>
      <label>
        Phone*
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          required={true}
        />
      </label>
    </div>
  );
}