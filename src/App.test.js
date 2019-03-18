import React from 'react';
import ReactDOM from 'react-dom';
import{Heading,TodoItems,CompletedItems} from './app';


it('renders Heading  todo Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Heading  sectionTitle="TO DO"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Heading Completed Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Heading  sectionTitle="COMPTETED"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders Heading Add Item Component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Heading  sectionTitle="ADD ITEM"/>, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders TodoItems Item Component', () => {
    const div = document.createElement('div');
    let todos = ["Task1", "Task2"];
    ReactDOM.render(<TodoItems  
        todoitems={todos} onCheckClick={()=>{}}
        onChangeTodoValue={(e)=>{(e)}}
        onDeleteClickTodo={(e)=>{(e)} }
        onEditClickTodo= {(e)=>{(e)}}
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders CompletedItems Item Component', () => {
  const div = document.createElement('div');
  let todos = ["Task1", "Task2"];
  ReactDOM.render(<CompletedItems  
    completeditems={todos}  onCheckClick={(e)=>{e}}
    onEditClickCom={(e)=>{e}}
    onChangeComTodoValue={(e)=>{e}}
    onDeleteClickCom = {(e)=>{e}}
  />, div);
ReactDOM.unmountComponentAtNode(div);
});