import { Document, Page } from "react-pdf"
import Nav from "../components/Nav";
import ResumePDF from "../documents/ResumePDF.pdf";

function Resume() {
  return (
    <>
      <Nav />
      <div className="container-fluid d-flex justify-content-center">

        <Document
        file={ResumePDF}
        options={{ workerSrc: "/pdf.worker.js" }}
        >

          <Page pageNumber={1} />
          <Page pageNumber={2} />
          
        </Document>

      </div>
    </>
  );
}

export default Resume;