import history from '../history';
import base from '../apis/base';


export const createtask=(formValues)=>async (dispatch)=>{
   const response= await base.post('/tasks',formValues);
   dispatch({type:"DELETE_ALL_TASK",payload:response.data})
      
   history.push('/')
};


export const fetchTasks=()=> async(dispatch)=>{
    const response= await base.get('/tasks');
    dispatch({type:'FETCH_TASKS',payload:response.data})
 };

 export const fetchsingletask =(id)=> async (dispatch)=>{
     const response=await base.get('/tasks/'+id);
    //  console.log(response.data)
     dispatch({type:"FETCH_SINGLE_TASK",payload:response.data})
   history.push('/task')
 }

 
 export const gotocreatetask=()=>async (dispatch)=>{
   history.push('/task/new/')
 };

 export const gotoedit=()=>async (dispatch)=>{
   history.push('/task/edit/')
 };
 export const edittask=(id,formValues)=>async (dispatch)=>{
     const response=await base.patch('/tasks/'+id,formValues);
     dispatch({type:"EDIT_TASK",payload:response.data})
     dispatch({type:"DELETE_ALL_TASK",payload:response.data})
      
   history.push('/')
 };


 export const deletetask=(id)=>async (dispatch)=>{
    const response=await base.delete('/tasks/'+id);
    dispatch({type:"DELETE_ALL_TASK",payload:response.data})
     history.push('/')
 };
 