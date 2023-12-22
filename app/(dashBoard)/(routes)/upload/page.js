"use client";

import React, { useState } from "react";
import UploadForm from "./_components/UploadForm";
import { app } from "@/firebaseConfig";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import SuccessMsg from "../../_components/SuccessMsg";

function Upload({ uploadBtnclick }) {
  const [progress, setProgress] = useState();
  const storage = getStorage(app);
  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };
    const storageRef = ref(storage, "File-Upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, file.type);
    uploadTask.on("state_changed", (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      setProgress(progress);
      progress == 100 &&
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
    });
  };
  return (
    <div className="p-5 px-8 md:px-28">
      {progress == 100 && <SuccessMsg />}
      <h2 className="text-[20px] m-5 text-center">
        Start <span className="text-primary">Uplaoding</span> file And{" "}
        <span className="text-primary">Share</span> It.
      </h2>
      <UploadForm uploadBtnclick={(file) => uploadFile(file)} progress={progress} />
    </div>
  );
}

export default Upload;
