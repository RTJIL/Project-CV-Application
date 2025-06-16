import '/src/styles/PersonalInfo.css';

export default function PersonalInfo({ formData, onChange }) {
  return (
    <div className="personal-details-container">
      <h2>Personal Details</h2>

      <div className="input-group">
        <label htmlFor="fullName">
          <span className="label-text">Full name</span>
        </label>
        <input
          id="fullName"
          type="text"
          name="name"
          placeholder="Name Surname"
          value={formData.name}
          onChange={onChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="proTitle">
          <span className="label-text">Proffesion Title</span>
        </label>
        <input
          id="proTitle"
          name="professionTitle"
          type="text"
          placeholder="Full-stack web developer"
          value={formData.professionTitle}
          onChange={onChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="address">
          <span className="label-text">Address</span>
        </label>
        <input
          id="address"
          type="text"
          name="address"
          placeholder="Ukraine, Kiev "
          value={formData.address}
          onChange={onChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="phoneNumber">
          <span className="label-text">Phone number</span>
          <span className="label-recommended">recommended</span>
        </label>
        <input
          id="phoneNumber"
          type="text"
          name="phone"
          placeholder="000 00 000 00 00"
          value={formData.phone}
          onChange={onChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="email">
          <span className="label-text">Email</span>
          <span className="label-recommended">recommended</span>
        </label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="mail@gmail.com"
          value={formData.email}
          onChange={onChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="summary">
          <span className="label-text">Summary</span>
        </label>
        <textarea
          id="summary"
          name="summary"
          placeholder="My skills are... My exp is... My achievement are... I could do..."
          value={formData.summary}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
