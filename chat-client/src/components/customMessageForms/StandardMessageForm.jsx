import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const StandardMessageForm = () => {
  const [message, setMessage] = useState("");
  const [attachments, setAttachments] = useState("");
  const [preview, setPreview] = useState("");

  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            src={preview}
            onLoad={() => URL.revokeObjectURL(preview)}
            alt="Preview"
            className="message-form-preview"
          />
          <XMarkIcon
            className="message-form-icon-x"
            onClick={() => {
              setPreview("");
              setAttachments("");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default StandardMessageForm;
