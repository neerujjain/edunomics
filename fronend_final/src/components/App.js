import React from'react';
import { Router,Route,Switch } from 'react-router-dom';
import TaskCreate from './tasks/TaskCreate';
import TaskEdit from './tasks/TaskEdit';
import TaskShow from './tasks/TaskShow';
import TasksList from './tasks/TaskList';
import Header from './Header';
import History from '../history';

const App =()=>{
    return( 
        <div className="ui container">
           
            <Router history={History}>
            <div>
            <Header />
            <Switch>
            <Route path="/" exact component={TasksList} />
            <Route path="/task/new" exact component={TaskCreate} />
            <Route path="/task/edit/" exact component={TaskEdit} />
            <Route path="/task" exact component={TaskShow} />
            </Switch>
            </div>
            </Router>
        </div>
    )
}
export default App;