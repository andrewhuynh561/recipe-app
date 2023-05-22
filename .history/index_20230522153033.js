const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeListEl = document.getElementById("recipe-list");


function display(){
    let html=``;
    fetch( `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        if(data.recipes){
            data.recipes.forEach(recipe => {
             html +=`
              <li class="recipe-item">
                <img
                    src="${recipe.image}"
                    alt="Recipe 1"
                />
                <h2>${recipe.title}</h2>
                <p>
                <strong>Ingredients:</strong> ${recipe.extendedIngredients
                    .map((ingredient) => ingredient.original)
                    .join(", ")}

                </p>
                <a href="${recipe.sourceUrl}">View Recipe</a>
             </li>`
                
            });
        }else{
            alert("Sorry we are loading....")
        }
        recipeListEl.innerHTML=html;
        console.log(data.recipes);
        
    });
}

display();




