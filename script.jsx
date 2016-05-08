var App = React.createClass({
  render: function(){
    //call TodoForm and TodoPosts
    return (
      <div>
        <TodoForm />
        <TodoPosts />
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
      <div>Todo posts</div>
    )
  }
});


ReactDOM.render(<App />, document.getElementById('app'));
