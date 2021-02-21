import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import "./styles.css";

export default function TextEditor({ value, onChange, placeholder }) {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ header: [1, 2, false] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
    ],
  };

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "header",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <ReactQuill
      className="flex-grow"
      theme="snow"
      value={value}
      onChange={onChange}
      formats={formats}
      modules={modules}
      placeholder={placeholder}
    >
      {/* <div className="my"></div> */}
    </ReactQuill>
  );
}
