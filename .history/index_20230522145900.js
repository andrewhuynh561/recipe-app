const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeListEl = document.getElementById("recipe-list");

function display(){
    fetch( `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.recipes);
    })
}