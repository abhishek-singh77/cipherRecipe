import _ from 'loadsh';

function PostForm({ posts,setPosts }) {
  return (
    <form className="post-form" onSubmit={handlePostForm}>
      <label htmlFor="post-name">
        <input
          type="text"
          name="post-name"
          id="post-name"
          required
          maxLength="20"
          minLength="2"
          placeholder="Post Name"
        />
      </label>
      <button type="submit" className="button post-button">
        Add Post
      </button>
    </form>
  );

  function handlePostForm(e) {
    e.preventDefault();
    const form = e.target;
    const post={};
    post.name=form['post-name'].value;
    post.recipes=[];

    const postsCopy=_.cloneDeep(posts);
    postsCopy.push(post);
    setPosts(postsCopy);
    form.reset();
  }
}

export default PostForm;
