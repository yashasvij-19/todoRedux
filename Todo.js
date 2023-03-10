import React, { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import {addTodo,deleteTodo,removeTodo} from "../actions/actionIndex";

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    return(
        <>
         <div className="child-div">
      <figure>
      <figcaption>Add your list here</figcaption>
      </figure>
    </div>
    <div className="add-items">
<input type="text" placeholder="Add items" 
value={inputData}
onChange={(event) =>setInputData(event.target.value)}
/>
<i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData),setInputData(''))}></i>
    </div>
        <div className="show-items">
            {
                list.map((element) => {
                    return (
                    <div className="each-item" key={element.id}>
                    <h3>{element.data}</h3>
                    <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(deleteTodo(element.id),setInputData(''))}></i>
                                </div>
                    )
                })
            }

        </div>

        <button onClick={() => dispatch(removeTodo())}>Checklist</button>
        </>
    )
}

export default Todo;