import React from 'react'
import { useState } from 'react'

export const AddTodo = (props) => {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = () => {
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className='container'>

            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} class="form-control" id="title"/>
                </div>
                <div class="form-group">
                    <label for="description">Desciption</label>
                    <input type="text" class="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value);}} id="description" />
                </div>
               
                <button type="submit" class="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
} 
