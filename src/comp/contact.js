import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Contact() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="primary" className="m-5">
        <Alert.Heading>My Alert</Alert.Heading>
        <h1>I Am Contact</h1>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default Contact;
