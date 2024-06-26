import { Container } from "react-bootstrap";

const MapLocation = () => {
  return (
    <Container>
      <div className="py-7">
        <h4 style={{ fontFamily: "Alegreya SC" }}>Our Location</h4>
        <div className="maplocation">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=P.O%20BOX%20192,%20Isinya+(Fred's%20Ranch%20&amp;%20Resort)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
      </div>
    </Container>
  );
};

export default MapLocation;
