import React from 'react';
import uuidv1 from 'uuid/v1';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      newTodo: '',
      filter: 'All',
      data:[
        {
          status: false,
          text: "1",
          id: uuidv1()
        },
        {
          status: false,
          text: "2",
          id: uuidv1()
        },
        {
          status: false,
          text: "3",
          id: uuidv1()
        },
      ]
    }
  }
  handleChange = (v) => {
    this.setState({
      newTodo: v.target.value
    });
  }
  addTodo = ()=> {
    this.setState({
      data: [...this.state.data, {
        status: false,
        text: this.state.newTodo,
        id: uuidv1()
      }]
    })
  }
  deleteTodo = (t) => {
    this.setState({
      data: this.state.data.filter(v => v.id != t)
    })
  }
  changeTodo = (t) => {
    this.setState({
      data: this.state.data.map(v => {
        if (v.id == t)
          return {
            text: v.text,
            status: !v.status,
            id: v.id
          }

        return v;
      })
    })
    
  }
  filterTodo = (f) => {
    this.setState({filter: f})
  }
  render() {
    return ( 
      <div>
        <h1>TODOs</h1>
        <div>{
            ['All', 'Done', 'Undone'].map(v => {
              return <button onClick={() => this.filterTodo(v)}>{v}</button>
            })
          }</div>
        <ul>
          {
            this.state.data.filter(v => {
              return this.state.filter == 'All' || (this.state.filter == 'Done' && v.status == 1) || (this.state.filter == 'Undone' && v.status == 0)
            }).map(v => <li key={v.id}> <i>{v.status ? 'done' : 'undone'}</i> <input checked={v.status ? 'checked' : ''} onChange={() => this.changeTodo(v.id)} type="checkbox"></input> {v.text} <button onClick={() => this.deleteTodo(v.id)}>X</button></li>)
          }
        </ul>
        <br />
        <input onChange={this.handleChange} type="text" value={this.state.newTodo} />
        <button onClick={this.addTodo}>ADD</button>
      </div>
    );
  }
}


export default App;
