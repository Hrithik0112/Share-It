import React from "react";
import UploadForm from "./_components/UploadForm";

function Upload() {
  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[20px] m-5 text-center">
        Start <span className="text-primary">Uplaoding</span> file And{" "}
        <span className="text-primary">Share</span> It.
      </h2>
      <UploadForm />
    </div>
  );
}

export default Upload;
