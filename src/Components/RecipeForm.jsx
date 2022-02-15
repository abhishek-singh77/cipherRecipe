import _ from "loadsh";

function RecipeForm({
  activePost,
  formActive,
  setFormActive,
  posts,
  setPosts,
}) {
  if (activePost && formActive) {
    return <Form />;
  } else return null;

  function Form() {
    return (
      <form className="recipe-form" onSubmit={handlerecipeForm}>
        <label htmlFor="recipe-name">
          {" "}
          Recipe Name
          <input
            type="text"
            name="recipe-name"
            id="recipe-name"
            required
            maxLength="20"
            minLength="2"
            placeholder="Recipe Name"
          />
        </label>
        <label htmlFor="recipe-description">
          {" "}
          Recipe Description
          <input
            type="text"
            name="recipe-description"
            id="recipe-description"
            maxLength="400"
            minLength="5"
            placeholder="Recipe Description"
          />
        </label>
        <button type="submit" className="button recipe-button">
          Submit
        </button>
        <button
          className="button recipe-button"
          onClick={() => {
            setFormActive(false);
          }}
        >
          Close
        </button>
      </form>
    );
  }
  function handlerecipeForm(e) {
    e.preventDefault();
    setFormActive(false);
    const form = e.target;
    const recipe = {
      name: form["recipe-name"].value,
      description: form["recipe-description"].value,
      date: new Date().toLocaleDateString(),
    };
    addRecipe(activePost, recipe);
    form.reset();
  }
  function addRecipe(targetPost, recipe) {
    const postsCopy = _.cloneDeep(posts);
    const index = posts.indexOf(targetPost);
    postsCopy[index].recipes.push(recipe);
    setPosts(postsCopy);
  }
}

export default RecipeForm;
