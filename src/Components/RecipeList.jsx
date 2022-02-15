import { useState } from "react";
import RecipeForm from "./RecipeForm";
import _ from "loadsh";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt as deleteIcon } from "@fortawesome/free-solid-svg-icons";

function RecipeList({ posts, setPosts }) {
  const [formActive, setFormActive] = useState(false);
  const activePost = posts.find((p) => p.active);
  if (activePost) {
    return (
      <div className="recipes-section">
        <div className="recipes-heading">Recipes</div>
        <List />
        <AddRecipeButton formActive={formActive} />
        <RecipeForm
          formActive={formActive}
          setFormActive={setFormActive}
          activePost={activePost}
          posts={posts}
          setPosts={setPosts}
        />
      </div>
    );
  } else {
    return null;
  }

  function List() {
    return (
      <ul className="recipes-list">
        {activePost.recipes.map((recipe, index) => {
          return (
            <li key={index} className="recipe">
              <div className="inof">
                  <h4>{recipe.name}</h4>
              <h4>{recipe.date}</h4>
              </div>
            
              <p className="recipe-description">{recipe.description}</p>
              <DeleteButton recipe={recipe} />
            </li>
          );
        })}
      </ul>
    );

    function DeleteButton({ recipe }) {
      return (
        <span
          className="recipe-delete-icon"
          onClick={() => {
            deleteRecipe(activePost, recipe);
          }}
        >
          <FontAwesomeIcon icon={deleteIcon} />
        </span>
      );
    }
  }

  function AddRecipeButton({ formActive }) {
    if (!formActive) {
      return (
        <button
          className="button recipe-button"
          onClick={() => {
            setFormActive(true);
          }}
        >
          Add Recipe
        </button>
      );
    } else return null;
  }
  function deleteRecipe(targetPost, targetRecipe) {
    const postsCopy = _.cloneDeep(posts);
    const index = posts.indexOf(targetPost);
    const recipeIndex = postsCopy[index].recipes.indexOf(targetRecipe);
    postsCopy[index].recipes.splice(recipeIndex, 1);
    setPosts(postsCopy);
  }
}

export default RecipeList;
