import React from 'react';
import { Heading ,TodoItems,CompletedItems} from './app';

export default class Additem extends React.Component{
    constructor(){
        super();
        this.state ={
            newToDoItem:'',
            todoItems :[],
            completedItems:[]
        }
    }
    onAddButtonClick(e){
        console.log("on add button click ", e, this.state.newToDoItem);
        const todoItemsArray = this.state.todoItems;
        const newItem = {
            item:this.state.newToDoItem,
            isDisabled : true,
            isChecked: false,
            isCompleted:false
        }
        todoItemsArray.push(newItem);
        console.log("state::", this.state);
        this.setState({newToDoItem:'',todoItems:todoItemsArray});
    }
    onCheckClick(e){
        console.log("onCheckClick:",e.target);
        let todos = this.state.todoItems;
        
        let remainToDoItems = todos.filter((item) => item.item != e.target.value);
        let completedItem = todos.filter((item)=>item.item == e.target.value);
        completedItem[0].isChecked= true;
        completedItem[0].isCompleted=true;
        console.log("list:", todos,remainToDoItems,completedItem,this.state.completedItems)
        this.setState({todoItems:remainToDoItems,completedItems:[...this.state.completedItems,completedItem[0]]})
        console.log("state:", this.state);
    }
    onInputChange(e){
        console.log("onInputChange++", e.target.value);
        this.setState({newToDoItem:e.target.value});
    }
    onDeleteClickTodo(e){
        console.log("delete todo :", e);
        let todos = this.state.todoItems;
        let newTodos = todos.filter(item => item.item != e.target.name);
        console.log("newTodos:", newTodos);
        this.setState({todoItems : newTodos});
    }
    onEditClickTodo(e){
        console.log("edit Click ToDo:", e.target,this.state.todoItems);
        const todos = this.state.todoItems;
        todos.map((item, index)=>{
            if(item.item === e.target.name){
                item.isDisabled = !item.isDisabled;
            }
        });
        console.log("currentToDoList =",todos);
        this.setState({todoItems:todos});
    }
    onDeleteClickCom(e){
        console.log("delete todo :", e);
        let todos = this.state.completedItems;
        let newTodos = todos.filter(item => item.item != e.target.name);
        console.log("newTodos:", newTodos);
        this.setState({completedItems : newTodos});
    }
    onChangeTodoValue(e){
        console.log("event :", e.target.value);
        let todos = this.state.todoItems;
        let newValue = e.target.value;
        todos.map((item)=>{
            if(item.item=== e.target.id){
                item.item = newValue;
            }
        });
        console.log("todos:", todos);
        this.setState({todoItems:todos});
    }
    onEditClickCom(e){
        console.log("edit Click ToDo:", e.target,this.state.completedItems);
        const todos = this.state.completedItems;
        todos.map((item, index)=>{
            if(item.item === e.target.name){
                item.isDisabled = !item.isDisabled;
            }
        });
        console.log("currentToDoList =",todos);
        this.setState({completedItems:todos});
    }
    onChangeComTodoValue(e){
        console.log("event :", e.target.value);
        let todos = this.state.completedItems;
        let newValue = e.target.value;
        todos.map((item)=>{
            if(item.item=== e.target.id){
                item.item = newValue;
            }
        });
        console.log("todos:", todos);
        this.setState({completedItems:todos});
    }
    render(){
      
        return(
            <div>
                <Heading sectionTitle="ADD ITEM"/>
                <input type="text" id="addItem" name="addItem"
                value = {this.state.newToDoItem}
                onChange= {(e)=>{this.onInputChange(e)}}
                />
                <button id="addToDoItem" className = "button" onClick = {(e)=>{this.onAddButtonClick(e)}}>Add</button>
                <Heading sectionTitle="TO DO"/>
                <TodoItems todoitems={this.state.todoItems} onCheckClick={this.onCheckClick.bind(this)}
                onChangeTodoValue={(e)=>{this.onChangeTodoValue(e)}}
                onDeleteClickTodo={this.onDeleteClickTodo.bind(this)} 
                onEditClickTodo= {this.onEditClickTodo.bind(this)}
                />
                <Heading sectionTitle="COMPLETED"/>
                <CompletedItems completeditems={this.state.completedItems} 
                onCheckClick={this.onCheckClick.bind(this)}
                onEditClickCom={(e)=>{this.onEditClickCom(e)}}
                onChangeComTodoValue={(e)=>{this.onChangeComTodoValue(e)}}
                onDeleteClickCom = {(e)=>{this.onDeleteClickCom(e)}}/>
            </div>
        );
    }
}