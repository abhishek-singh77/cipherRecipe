import PostForm from "./PostForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrashAlt as deleteIcon} from "@fortawesome/free-solid-svg-icons";

import _ from "loadsh";

function PostList({ posts, setPosts }) {
  return (
    <section className="post-section">
      <div className="posts-heading">
        Posts
      </div>
      <ul className="post-list">
        {posts.map((post, index) => {
          return <Post post={post} key={index} />;
        })}
      </ul>
      <PostForm posts={posts} setPosts={setPosts} />
    </section>
  );

  function Post({ post }) {
    return (
      <li
        className={"post-item " + (post.active ? "active" : "")}
        onClick={() => {
          makePostActive(post);
        }}
      >
        <div>{post.name}</div>
        <DeleteIcon post={post} />
      </li>
    );

    function DeleteIcon({ post }) {
      return (
        <div
          className="delete-icon"
          onClick={(e) => {
            e.stopPropagation();
            deletePost(post);
          }}
        >
          <FontAwesomeIcon icon={deleteIcon} />
        </div>
      );
    }
  }

  function deletePost(post) {
    const postsCopy = _.cloneDeep(posts);
    const index = posts.indexOf(post);
    postsCopy.splice(index, 1);
    setPosts(postsCopy);
  }

  function makePostActive(post) {
    const postsCopy = _.cloneDeep(posts);
    const index = posts.indexOf(post);
    postsCopy.forEach((p) => (p.active = false));
    postsCopy[index].active = true;
    setPosts(postsCopy);
  }
}

export default PostList;
