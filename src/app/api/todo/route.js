import dbconnect from "@/dbconnect";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        dbconnect();
        const todoData = await req.json;
        const todo = new Todo(todoData);
        await todo.save();
        return NextResponse.json("Data posted!")
    } catch (error) {
        console.log(error)
        return NextResponse.json("error in posting data")
    }
}

export async function GET() {
    try {
        dbconnect(); 
        const todos = await Todo.find(); 
        return NextResponse.json(todos);
    } catch (error) {
        console.log(error);
        return NextResponse.json("Error in fetching data");
    }
}

