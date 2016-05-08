var App = React.createClass({

  getInitialState: function(){
    return {
      name: '',
      isEdit: 0,
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

    // posts={this.state.posts} this was removed from PostList because you can replace it
    // w/ {...this.state}

    return (
      <div>
        <PostForm
        {...this.state}
        updatePost = {this.handleUpdatePost}
        changeText = {this.handleChangeText}
        addPost={this.handleAddPost}/>

        <PostList
        {...this.state}
        editPost={this.handleEditPost}
        destroyPost={this.handleDestroyPost}/>

      </div>
    )
  },

  handleUpdatePost: function(updateObj){
    var statePosts = this.state.posts;
    for(var i=0; i < statePosts.length; i++){
      if(statePosts[i].id == updateObj.id){
        statePosts.splice(i, 1);
      }
    }

    statePosts.push(updateObj);

    this.setState({
      posts: statePosts
    });

  },

  handleChangeText: function(name){
    this.setState({
      name: name
    });
  },

  handleEditPost: function(post){
    // console.log('handleEditPost', post);
    this.setState({
      name: post.name,
      isEdit: post.id
    });
  },

  handleDestroyPost: function(post){
    // console.log(post);
    var statePosts = this.state.posts;

    for(var i=0; i < statePosts.length; i++){
      //if state post id is equal from the clicked post
      if(statePosts[i].id == post.id){
        statePosts.splice(i, 1); //remove the post from state
      }
    }

    //after splicing, the state posts is gone so need to put it back again
    this.setState({posts: statePosts}); //don't forget to reset it
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
            <input type="text" ref="name" value={this.props.name} className="form-control" onChange={this.onChange}/>
          </div>
        </form>
      </div>
    )
  },
  // value={this.props.name} is related to {...this.state}

  onSubmit: function(e){
    e.preventDefault(); //prevents the page from refreshing
    // console.log(this.refs.name.value);
    var name = this.refs.name.value.trim(); //this grabs the ref="text" from the input

    //alert user if they are trying to submit w/out entring a text
    if(!name){
      alert('please enter a post');
      return; //stops from continuing
    }

    //0 is false, nums above 1 is true
    //find if this an edit, if not add
    if(this.props.isEdit){
      // console.log('an edit');

      //send the edited object
      var updatedPost = {
        id: this.props.isEdit,
        name: name
      }

      this.props.updatePost(updatedPost);
    }
    else{
      this.props.addPost(name); //this send the text to property in the app PostForm
    }

    // this.props.addPost(text); //this send the text to property in the app PostForm
    this.refs.name.value = ''; //set the input empty after submitting
  },

  onChange: function(e){
    // console.log('the text is changing!')
    this.props.changeName(e.target.value);
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
            return <li className="list-group-item" post={post} key={post.id}> {post.name}
            <a onClick={this.deletePost.bind(this, post)} className="btn btn-danger" style={{float: "right"}}>X</a>
            <a onClick={this.editPost.bind(this, post)} className="btn btn-info" style={{float: "right"}}>Edit</a></li>

            //the purpose of bind is to send the post objec from the state

            //can't do this, must be in one line like above when returning!
            // <li className="list-group-item" post={post} key={post.id}>
            //   {post.name}
            // </li>
          })
        }
      </ul>
    )
  },

  editPost: function(post){
    // console.log('edit post', post);

    //send post to App to be edited
    this.props.editPost(post);
  },

  deletePost: function(post){
    // console.log(post);

    // send post to App
    this.props.destroyPost(post);
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
