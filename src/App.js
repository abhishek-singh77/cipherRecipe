import { useState, useEffect } from "react";
import PostList from "./Components/PostList";
import RecipeList from "./Components/RecipeList";
import Header from "./Components/Header";
import uniqid from "uniqid";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const jsonPosts = JSON.stringify(posts);
    localStorage.setItem("posts", jsonPosts);
  }, [posts]);

  function getPosts() {
    const jsonPosts = JSON.parse(localStorage.getItem("posts"));
    if (Array.isArray(jsonPosts)) return jsonPosts;
    return samplePosts();
  }

  function samplePosts() {
    const posts = [
      {
        name: "Fast Food",
        id: uniqid(),
        active: false,
        recipes: [
          {
            name: "burger",
            description:
              "<p>Heat the olive oil in a skillet over low heat, and cook the onion and garlic for about 5 minutes, until tender. Mix in the carrots, squash, and zucchini. Continue to cook and stir for 2 minutes. Remove pan from heat, and mix in oats, cheese, and egg. Stir in soy sauce, transfer the mixture to a bowl, and refrigerate 1 hour.</p> <br> Preheat the grill for high heat. <br> <p>Spread the burger patties in a 9-inch round-topped skillet. Top with the cheese, and cook until the cheese is melted, about 3 minutes. Remove from the heat, and top with the tomato sauce. Cover, and grill until the cheese is melted and the patties are cooked through, about 5 minutes. Remove from the grill, and serve with the remaining ingredients.</p>",
            date: new Date().toLocaleDateString(),
          },
          {
            name: "Pizza",
            description: "<p>Cook the pizza in a large skillet over medium heat. Cook until the cheese is melted, about 3 minutes. Remove from the heat, and top with the tomato sauce. Cover, and grill until the cheese is melted and the patties are cooked through, about 5 minutes. Remove from the grill, and serve with the remaining ingredients.</p>",
            date: new Date().toLocaleDateString(),
          },
          {
            name:"Pasta",
            description: "<p>Cook the pasta in a large skillet over medium heat. Cook until the cheese is melted, about 3 minutes. Remove from the heat, and top with the tomato sauce. Cover, and grill until the cheese is melted and the patties are cooked through, about 5 minutes. Remove from the grill, and serve with the remaining ingredients.</p>",
            date: new Date().toLocaleDateString(),
          },
        ],
      },
      {
        name: "Chicken",
        id: uniqid(),
        active: false,
        recipes: [
          {
            name: "Chicken",
            description: "<p>Heat the olive oil in a skillet over low heat, and cook the onion and garlic for about 5 minutes, until tender. Mix in the carrots, squash, and zucchini. Continue to cook and stir for 2 minutes. Remove pan from heat, and mix in oats, cheese, and egg. Stir in soy sauce, transfer the mixture to a bowl, and refrigerate 1 hour.</p> <br> Preheat the grill for high heat. <br> <p>Spread the burger patties in a 9-inch round-topped skillet. Top with the cheese, and cook until the cheese is melted, about 3 minutes. Remove from the heat, and top with the tomato sauce. Cover, and grill until the cheese is melted and the patties are cooked through, about 5 minutes. Remove from the grill, and serve with the remaining ingredients.</p>",
            date: new Date().toLocaleDateString(),
          },
        ],
      },
    ];
    return posts;
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <PostList posts={posts} setPosts={setPosts} />
        <RecipeList posts={posts} setPosts={setPosts} />
      </main>
    </div>
  );
}

export default App;
