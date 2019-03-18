import React from 'react';
import ReactDOM from 'react-dom';
import Additem from './additem';
import {Heading} from './app';

export default class  App  extends React.Component{
    
    render(){
        return (
            <div>
                <h3>Simple ToDo App</h3>
                <div>
                   <Additem/>
                </div>
            </div>
               
        );
    }
    
}

ReactDOM.render(
    <App/>, document.querySelector("#root")
);
