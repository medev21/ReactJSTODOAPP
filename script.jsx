var App = React.createClass({

  getInitialState: function(){
    return {
      text: '',
      posts: [
        {
          id: 1,
          name: "meeting at work"
        },

        {
          id: 2,
          name: "attend conference"
        },

        {
          id: 3,
          name: "visit parents"
        }
      ]
    }
  },

  render: function(){
    //call TodoForm and TodoPosts
    return (
      <div>
        <TodoForm />
        <TodoPosts posts={this.state.posts}/>
      </div>
    )
  }
});

var TodoForm = React.createClass({
  render: function(){
    return (
      <div>Todo form </div>
    )
  }
});

var TodoPosts = React.createClass({
  render: function(){
    return (
      <ul className="list-group">
        <li>one</li>
        <li>one</li>
        
      </ul>
    )
  }
});


ReactDOM.render(<App />, document.getElementById('app'));
