import React from 'react';
import {connect} from 'react-redux';
import {fetchsingletask,gotoedit,deletetask} from'../../actions';

class TaskShow extends React.Component
{
    edittask=()=>{
        this.props.gotoedit(this.props.task._id)
    }
    deletetask=()=>{
        this.props.deletetask(this.props.task._id)
    }
    render()
    {
        if(!this.props.task)
        {
            return <div>loading...</div>
        }
        const {title,description,status} =this.props.task;

        return (
        <div>
        <div className="ui card ">
  <div className="content">
    <div className="header">{title}</div>
  </div>
  <div className="content">
    <h4 className="ui sub header">{status}</h4>
    <div className="ui small feed event content summary">
          <p>{description}</p>
    </div>
  </div>
  <div className="extra content">
        <button className="ui button blue mini" onClick={() => this.edittask()}>edit</button>
        <button className="ui button red mini" onClick={() => this.deletetask()}>delete</button>
  </div>
</div></div>

        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    return {task:state.currenttask.currenttask};
};

export default connect(
    mapStateToProps,
    {fetchsingletask,gotoedit,deletetask}
)(TaskShow);





// const NodeMediaServer = require('node-media-server');