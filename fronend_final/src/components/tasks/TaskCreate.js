import React from 'react';
import {connect} from 'react-redux';
import {createtask} from '../../actions';
import TaskForm from './TaskForm'
class  TaskCreate extends React.Component{

        onSubmit =(formValues) =>{
            console.log("yo")
        this.props.createtask(formValues);
    }
    render(){
        
    return (
        <div className="ui form error">
        <div><h3>create a stream</h3>
        <TaskForm onSubmit={this.onSubmit}/>
        </div>
        </div>
    );
    }

};
export default connect(null,{createtask})(TaskCreate)