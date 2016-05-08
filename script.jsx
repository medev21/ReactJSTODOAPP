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
        <PostForm addPost={this.handleAddPost}/>
        <PostList posts={this.state.posts}/>
      </div>
    )
  },

  handleAddPost: function(text){
    // console.log('text was sent', text);

    //add text to the post list
    var newPost = {
      id: this.state.posts.length + 1, //get length of the todos object and one for new id
      name: text
    }//create new post object

    //send newPost to state(initial)
    this.setState({posts: this.state.posts.concat(newPost)});
  }
});

var PostForm = React.createClass({
  render: function(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Post Title</label>
            <input type="text" ref="text" className="form-control" onChange={this.onChange}/>
          </div>
        </form>
      </div>
    )
  },

  onSubmit: function(e){
    e.preventDefault(); //prevents the page from refreshing
    // console.log(this.refs.text.value);
    var text = this.refs.text.value.trim(); //this grabs the ref="text" from the input

    //alert user if they are trying to submit w/out entring a text
    if(!text){
      alert('please enter a post');
      return; //stops from continuing
    }

    this.props.addPost(text); //this send the text to property in the app PostForm
    this.refs.text.value = '' //set the input empty after submitting
  },

  onChange: function(){
    console.log('the text is changing!')
  }
});

var PostList = React.createClass({
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
