import { Document, Page } from "react-pdf"
import Nav from "../components/Nav";
import ResumePDF from "../documents/ResumePDF.pdf";
import { Card, Container } from "react-bootstrap";

function Resume() {
  return (
    <>
      <Nav />
      <Container>
        <Card className="text-center my-5">
          <a className="nav-link h5" href="https://docs.google.com/document/d/1U63ko9pZ3dNeMCcuE7i5g2YfHOdJp4xmGFkPXX4xC2E/edit?usp=sharing">
            <span className="iconify" data-icon="zmdi:collection-pdf" data-inline="false" data-width="40" data-height="40"></span>
            Resume: https://docs.google.com/document/d/1U63ko9pZ3dNeMCcuE7i5g2YfHOdJp4xmGFkPXX4xC2E/edit?usp=sharing
          </a>
        </Card>
      </Container>
      <Container className="container-fluid d-flex justify-content-center">
        <Document
        height={25}
        width={300}
        scale={0.5}
        file={ResumePDF}
        options={{ workerSrc: "/pdf.worker.js" }}
        >

          <Page pageNumber={1} />
          <Page pageNumber={2} />

        </Document>

      </Container>
    </>
  );
}

export default Resume;