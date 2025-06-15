import '/src/styles/BaseInfo.css';

export default function BaseInfo() {
  return (
    <div className="personal-details-container">
      <h2>Personal Details</h2>

      <div className="input-group">
        <label htmlFor="fullName">
          <span className="label-text">Full name</span>
        </label>
        <input id="fullName" type="text" placeholder="Name Surname" />
      </div>

      <div className="input-group">
        <label htmlFor="proTitle">
          <span className="label-text">Proffesion Title</span>
        </label>
        <input id="proTitle" type="text" placeholder="Full-stack web developer" />
      </div>

      <div className="input-group">
        <label htmlFor="address">
          <span className="label-text">Address</span>
        </label>
        <input id="address" type="text" placeholder="Ukraine, Kiev " />
      </div>

      <div className="input-group">
        <label htmlFor="phoneNumber">
          <span className="label-text">Phone number</span>
          <span className="label-recommended">recommended</span>
        </label>
        <input id="phoneNumber" type="text" placeholder="000 00 000 00 00" />
      </div>

      <div className="input-group">
        <label htmlFor="email">
          <span className="label-text">Email</span>
          <span className="label-recommended">recommended</span>
        </label>
        <input id="email" type="text" placeholder="mail@gmail.com" />
      </div>

      <div className="input-group">
        <label htmlFor="summary">
          <span className="label-text">Summary</span>
        </label>
        <textarea
          id="summary"
          placeholder="My skills are... My exp is... My achievement are... I could do..."
        />
      </div>
    </div>
  );
}
