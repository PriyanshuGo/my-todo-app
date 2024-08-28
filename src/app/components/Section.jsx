'use client'
import React, { useState } from "react";
import "./index.css";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";
import ReactQuill from 'react-quill';
import Card from "./Card"; // Import the Card component

function Section() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]); // To manage list of todos

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (value) => {
    setDescription(value);
  };


  const addTodo = () => {
    if (title && description) {
      setTodos([...todos, { title, description }]);
      setTitle(""); 
      setDescription(""); 
    }
  };

  const deleteTodo = () => {
    // Add your delete logic here
  };

  return (
    <section className="section">
      <div className="sec1main">
        <div className="sec1bar">
          <button className="sec1add" onClick={addTodo}>
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
          {todos.map((todo, index) => (
            <Card key={index} title={todo.title} description={todo.description}  />
          ))}
        </div>
      </div>
      <div className="sec2">
        <div className="input">
          <input
            type="text"
            id="topic"
            placeholder="Add tittle"
            value={title}
            onChange={handleTitleChange}
          />
          <button className="delete" onClick={deleteTodo}>
            <Image
              src="/delete.png"
              alt="delete Button"
              width={24}
              height={24}
            />
          </button>
        </div>
        <ReactQuill
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Write your description here."
        />
      </div>
    </section>
  );
}

export default Section;
