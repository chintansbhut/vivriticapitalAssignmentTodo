import React from 'react';
import  './index.css';

export const Heading = (props) =>{
    return (
        <div>
            <h5>{props.sectionTitle}</h5>
            <hr/>
        </div>
        
    )
}
export const TodoItems = (props) =>{
    
    return (
        props.todoitems.map((item ,index)=>
        <div className = "itemContainer" key = {index}>
             <input type="checkbox" checked={item.isChecked}value={item.item} id={item.item} onChange={props.onCheckClick} name={item.item}/>
                    <input type="text" id = {item.item} className = {item.isDisabled?'itemDefault':''}disabled={item.isDisabled} value={item.item} onChange ={props.onChangeTodoValue}/>
                    <button id = {item.item} className = "button" name= {item.item} onClick={props.onEditClickTodo}>{item.isDisabled?'Edit':'Save'}</button>
                    <button id = {item.item} className = "button" name= {item.item} onClick={props.onDeleteClickTodo}>Delete</button>
                    <br/>
        </div>)
    )
}

export const CompletedItems = (props)=>{
    console.log("this.state.completedItems",props);
    return(
        props.completeditems.map((item ,index)=>
        <div className = "itemContainer" key = {index}>
             <input type="checkbox" checked={item.isChecked} id = {item.item}value={item.item} disabled name={item.item}/>
                    <input type="text" className = {item.isDisabled?"itemDefault completedItem":""}id = {item.item} disabled={item.isDisabled} value={item.item} onChange={props.onChangeComTodoValue}/>
                    <button id = {item.item} className = "button"name= {item.item} onClick={props.onEditClickCom}>Edit</button>
                    <button id = {item.item} className = "button" name= {item.item} onClick={props.onDeleteClickCom}>Delete</button>
                    <br/>
        </div>)
    )
}
