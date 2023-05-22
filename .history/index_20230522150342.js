const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeListEl = document.getElementById("recipe-list");

recipeListEl.addEventListener("click",getRecipes);
function display(){
    fetch( `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        if(data.recipes){
            console.log(data.recipes);
        }
        
    });
}

function getRecipes(){

}





