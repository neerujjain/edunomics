import React from 'react';
import {Field,reduxForm} from 'redux-form';

class  TaskForm extends React.Component{

    renderError({error,touched}){
        if(touched&&error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput=({input,label,meta})=>{
        return (
        <div className="field ">
            <label>{label}</label>
            <input {...input} autoComplete="off"  />
            {this.renderError(meta)}
        </div>
        );
    }
    formSubmit =(formValues) =>{
        this.props.onSubmit(formValues);
    }
    render(){
        
    return (
        <div className="ui form error">
            
        <form onSubmit={this.props.handleSubmit(this.formSubmit)}>
            <Field name="title" component={this.renderInput} label="enter title" />
            <Field name="description" component={this.renderInput} label="enter description"/>
            <Field name="status" component={this.renderInput} label="enter status"/>
            <button className="ui button primary">submit</button>
        </form>
        </div>
    );
    }

};

const validate=(formValues)=>{
    const errors={};
    if(!formValues.title)
    {
        errors.title='you must enter a title';
    }
    if(!formValues.description)
    {
        errors.description='you must enter a description';
    }
    if(!(formValues.status=="to do"||formValues.status=="doing"||formValues.status=="doing"))
    {
        errors.description='enter description as to do,doing  or done';
    }
    return errors;
}
export default reduxForm({
    form:'streamForm',
    validate
})(TaskForm);
