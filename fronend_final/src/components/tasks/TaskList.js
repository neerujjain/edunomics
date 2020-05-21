import React from 'react';
import {connect} from 'react-redux';
import {fetchTasks,fetchsingletask,gotocreatetask} from '../../actions'
class TaskList extends React.Component{
    
    componentDidMount(){
        this.props.fetchTasks();
    }
    renderAdmin(task){
        return(<div>hello</div>)
    }
    renderList(){
            return (
                    <div className="content">
                        hello      </div>
                        
          
            )
    
    }

    renderCreate=()=>{
            return (
            <div style={{ textAlign:'right' }}>
                    create tasks
            </div>
            )
    }
    create_new_note()
    {
        this.props.gotocreatetask();

    }
    clickTask(id)
    {
        this.props.fetchsingletask(id);
    }
    render(){
        let to_do=this.props.tasks.map((task,index)=>{
        
            if(task.status==="to do")
            {
                
                return (<div><button className="ui red button mini"  key={index} onClick={() => this.clickTask(task._id)}>{task.title}</button> <hr /></div>)
            }
            else 
            {
                return null;
            }
            
        })
        let doing=this.props.tasks.map((task)=>{
        
            if(task.status==="doing")
            {
                return (<div><button className="ui yellow button mini"  key={task._id} onClick={() => this.clickTask(task._id)}>{task.title}</button><hr /></div>)
                    
            }
            else 
            {
                return null;
            }
            
        })
        let done=this.props.tasks.map((task)=>{
        
            if(task.status==="done")
            {
                return (<div><button className="ui green button mini"  key={task._id} onClick={() => this.clickTask(task._id)}>{task.title}</button><hr /></div>)
                   
            }
            else 
            {
                return null;
            }
            
        })
        return(
            <div className="convo ui container">
        
<div className="container">
  <div className="leftpane">
  <div className=" ui segment ">
   <h1>to do</h1>
   {to_do}
   <button className="ui button blue" onClick={()=>{this.create_new_note()}}>create new</button>
   
</div>
</div>
 
  
<div className="middlepane" ><div className=" ui segment ">
   <h1>doing</h1>
   {doing}
</div>

</div>
 
  <div className="rightpane">
  <div className=" ui segment ">
    <h1>done</h1>
    {done}
    </div>
    </div>
</div>
        
    </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        tasks: Object.values(state.tasks),
        
         to_do:[],
         doing:[],
         done:[]
    };
}
export default connect(mapStateToProps,{fetchTasks,fetchsingletask,gotocreatetask})(TaskList);