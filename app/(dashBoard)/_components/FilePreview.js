import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

function FilePreview({ file, removefile }) {
  return (
    <div className="flex items-center justify-end mt-5 p-2 border border-blue-500 rounded-md">
      <div className="flex items-center p-2">
        <Image src="/file.png" height={50} width={50} alt="logo" />
        <div className="text-left">
          <h2>{file.name}</h2>
          <h2 className="text-[12px] text-gray-400">
            {file?.type} / {(file.size / 1024 / 1024).toFixed(2)} MB
          </h2>
        </div>
      </div>
      <X className="text-red-500 cursor-pointer" onClick={() => removefile()} />
    </div>
  );
}

export default FilePreview;
