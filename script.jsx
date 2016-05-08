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
        {
          this.props.posts.map(post => {
            //post={post} this build the post object
            //key = {post.id} this build a key from the post.id
            return <li className="list-group-item" post={post} key={post.id}> {post.name} </li>

            //can't do this, must be in one line like above when returning!  
            // <li className="list-group-item" post={post} key={post.id}>
            //   {post.name}
            // </li>
          })
        }
      </ul>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
