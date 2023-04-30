import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <div className="mt-5">
        <h2>Terms and Conditions</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa velit
          laboriosam illum temporibus animi dolore, qui blanditiis consequatur
          necessitatibus ex ratione eius eaque optio ipsum omnis saepe tenetur
          nesciunt! Nam amet voluptatem omnis numquam similique iste ad
          repellendus molestiae mollitia distinctio, quibusdam minima doloribus
          sed officiis ab facere deleniti incidunt.
        </p>
        <p>
          Go back to <Link to="/register">Register</Link>
        </p>
      </div>
    </Container>
  );
};

export default Terms;
