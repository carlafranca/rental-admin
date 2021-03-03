import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Jumbotron>
        <h1 className="display-4">Rental Admin!</h1>
        <hr className="my-4"></hr>
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        {/* <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a> */}
      </Jumbotron>
    </Container>
  );
}

export default Home;
