import "./Locations.css";

const Locations = () => {
  return (
    <div className="locations">
      <h2>Locations</h2>
      <div className="locations-container">
        <div className="location">
          <h3>Downtown</h3>
          <h3>384 West 4th St</h3>
          <h3>Suite 108</h3>
          <h3>Portland, Maine</h3>
        </div>
        <div className="location">
          <h3>East Bayside</h3>
          <h3>3433 Phishermans Avenue</h3>
          <h3>(Northwest Corner)</h3>
          <h3>Portland, Maine</h3>
        </div>
        <div className="location">
          <h3>Oakdale</h3>
          <h3>515 Crescent Avenue</h3>
          <h3>Second Floor</h3>
          <h3>Portland, Maine</h3>
        </div>
      </div>
    </div>
  );
};

export default Locations;
