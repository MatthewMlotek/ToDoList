import React, { Component } from 'react';
import './styles.css';
import Result from './Result';

class App extends Component {
 
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  state = {
    todos: [],
    newTask: "",
    stage: "all"
  }
  handleChange = (id) => {
   let arr = [...this.state.todos];
   let num = id;
    
  
    arr[[num]-1].checked = !arr[[num]-1].checked;
  
    this.setState({
      todos: arr
    })

  }
  handleInsertTask = (e) => {
    this.setState({
      newTask: e.target.value
    })
  }
  handleAddTask = () => {
    let arr = this.state.todos
    if ((this.state.newTask).trim() !== "") {
      arr.push({id: arr.length +1, content: this.state.newTask, checked: false})
    }

    this.setState({
      newTask: "",
      todos: arr,
    })
  }
  render() { 
    return (
      
      <div className='app'>
        <h1>THINGS TO DO</h1>
        <input type="text" placeholder='Add New' value={this.state.newTask} onChange={this.handleInsertTask}/>
        <div className='list'>
          <ul>
           

            <Result name={this.state.todos} stage={this.state.stage} action={this.handleChange.bind(this)}/>
            
          </ul>
        </div>
        <button onClick={this.handleAddTask}>&#43;</button>
       <input type="button" value="ALL" onClick={() => this.setState({stage: "all"})}/>
       <input type="button" value="COMPLETED" onClick={() => this.setState({stage: "completed"})} />
       <input type="button" value="ACTIVE" onClick={() => this.setState({stage: "active"})}/>
      </div>
      
    )
  }
}
 


export default App ;