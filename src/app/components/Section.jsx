"use client";
import React, { useState } from "react";
import "./index.css";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";

// Dynamically import React Quill to avoid SSR issues
import ReactQuill from 'react-quill';


function Section() {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  return (
    <section className="section">
      <div className="sec1main">
        <div className="sec1bar">
          <button className="sec1add">
            <div className="sec1icon">
              <Image
                src="/Add.png"
                alt="Add Button"
                width={20}
                height={20}
              />
            </div>
            <div className="sec1text">TODO</div>
          </button>
          <button className="sec1search">
            <Image
              src="/Search.png"
              alt="Search Button"
              width={56}
              height={48}
            />
          </button>
        </div>
        <div className="sec1todo">
          {/* Your card component or element can go here */}
        </div>
      </div>
      <div className="sec2">
        <input type="text" id="topic" placeholder="New Additions" />
        <ReactQuill
          value={description}
          onChange={handleDescriptionChange}
          placeholder="To stay representative of framework & new example apps."
        />
      </div>
    </section>
  );
}

export default Section;
