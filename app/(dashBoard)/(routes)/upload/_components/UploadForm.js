import AlertMsg from "@/app/(dashBoard)/_components/AlertMsg";
import FilePreview from "@/app/(dashBoard)/_components/FilePreview";
import React, { useState } from "react";

function UploadForm() {
  const [file, setFile] = useState();
  const [errMsg, setErrMsg] = useState();

  const onFileSelect = (file) => {
    console.log(file);
    if (file && file.size > 2000000) {
      console.log("Size Is Greater Than 2MB");
      setErrMsg("Max File Uploading Size Is 2MB");
      return;
    }
    setErrMsg(null);
    setFile(file);
  };
  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer 
          bg-blue-50-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-12 h-12 mb-4 text-blue-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or
              <strong className="text-primary">drag</strong> and
              <strong className="text-primary">drop</strong>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX SIZE : 2Mb)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(event) => onFileSelect(event.target.files[0])}
          />
        </label>
      </div>
      {errMsg ? <AlertMsg msg={errMsg} /> : null}
      {file ? <FilePreview file={file} removefile={() => setFile(null)} /> : null}
      <button
        disabled={!file}
        className="p-2 bg-primary text-white rounded-full w-[30%] mt-5 disabled:bg-gray-500"
      >
        Upload
      </button>
    </div>
  );
}

export default UploadForm;
