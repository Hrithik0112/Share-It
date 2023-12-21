"use client";

import React from "react";
import UploadForm from "./_components/UploadForm";
import { app } from "@/firebaseConfig";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

function Upload({ uploadBtnclick }) {
  const storage = getStorage(app);
  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };
    const storageRef = ref(storage, "File-Upload/" + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on("state_changed", (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
    });
  };
  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[20px] m-5 text-center">
        Start <span className="text-primary">Uplaoding</span> file And{" "}
        <span className="text-primary">Share</span> It.
      </h2>
      <UploadForm uploadBtnclick={(file) => uploadFile(file)} />
    </div>
  );
}

export default Upload;
