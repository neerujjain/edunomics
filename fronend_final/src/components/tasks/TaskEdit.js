import React from 'react';
import {connect } from 'react-redux';
import {edittask} from'../../actions';
import TaskForm from './TaskForm';
class TaskEdit extends React.Component {
    componentDidMount() {
    }
    onSubmit=(formValues)=>{
        this.props.edittask(this.props.task._id,formValues)
    };
    render(){
        console.log(this.props.task);
        if(!this.props.task){
            return <div>loading...</div>
        }
        else {
    return (
        <div>
            <h3>edit a stream</h3>
            <TaskForm initialValues={{title:this.props.task.title,description:this.props.task.description,status:this.props.task.status}} onSubmit={this.onSubmit} />
        </div>
    )
        }
    }

};

const mapStateToProps=(state)=>{    
    return {task:state.currenttask.currenttask};

}
export default connect(mapStateToProps,{edittask})(TaskEdit);