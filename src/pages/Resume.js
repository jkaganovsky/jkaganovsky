import { Document, Page } from "react-pdf"
import Nav from "../components/Nav";
import ResumePDF from "../documents/ResumePDF.pdf";

function Resume() {
  return (
    <>
      <Nav />
      <div>
        <Document
        file={ResumePDF}
        options={{ workerSrc: "/pdf.worker.js" }}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
    </>
  );
}

export default Resume;