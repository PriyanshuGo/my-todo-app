'use client'
import React, { useEffect, useState } from "react";
import "./index.css";
import Image from "next/image";
import "react-quill/dist/quill.snow.css";
import ReactQuill from 'react-quill';
import Card from "./Card"; 
import axios from "axios";


function Section() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]); 
  const [selectTodo, setSelectTodo] = useState(null); 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const addTodo = async () => {
    if (title && description) {
      if (selectTodo !== null) {
        const updatedTodos = todos.map((todo, index) =>
          index == selectTodo ? { title, description } : todo
        );
        setTodos(updatedTodos);
        setSelectTodo(null); 
      } else {
        setTodos([...todos, { title, description }]);
      }
      setTitle(""); 
      setDescription(""); 
    }
        // const todoData = {title,description}
    // try {
    //   const response =  await axios.post("/api/todo",todoData);
    //   if (response) {
    //     console.log("TOdo created seuccessfuflly",response);
    //     setTitle('');
    //     setDescription('');
    //   }
    // } catch (error) {
    //   console.log(error , "post not created.")
    // }
  };

  const deleteTodo = () => {
    if (selectTodo !== null) {
      setTodos(todos.filter((el,index) => index !== selectTodo));
      setSelectTodo(null); 
      setTitle(""); 
      setDescription(""); 
    }
  };

  const handleCardClick = (index) => {
    const todo = todos[index];
    setSelectTodo(index);
    setTitle(todo.title);
    setDescription(todo.description);
  };

  // useEffect(async function fetchTodos(){
  //   try {
  //     const response =  await axios.get("/api/todo");
  //     if (response) {
  //       console.log(" seuccessfuflly",response);
  //       setTodos(response.data)
  //     }
  //   } catch (error) {
  //     console.log(error , "error ijn fetching.")
  //   }
  // },[])

  return (
    <section className="section">
      <div className="sec1main">
        <div className="sec1bar">
          <button className="sec1add" onClick={addTodo} >
            <div className="sec1icon">
              <Image
                src="/Add.png"
                alt="Add Button"
                width={20}
                height={20}
              />
            </div>
            <div className="sec1text">{selectTodo !== null ? 'Update' : 'TODO'} </div>
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
            <Card
              key={index}
              title={todo.title}
              description={todo.description}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
      {!isMobile &&
      <div className="sec2">
        <div className="input">
          <input
            type="text"
            id="topic"
            placeholder="Add title"
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
        <ReactQuill className="richText"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Write your description here."
        />
      </div>
}
    </section>
  );
}

export default Section;
