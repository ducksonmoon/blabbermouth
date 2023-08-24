import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import file from "./blabbermouth.md";
import image from "../../assets/image-blabber.jpg";

export default function BraveryContent() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1"></div>
      <div className="col-span-2">
        <article className="prose max-w-none">
          <img src={image} alt="blabber" />

          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
