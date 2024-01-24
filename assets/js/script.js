// Variables for Meal Cards & Connecting them to buttons
const breakfastButton = document.getElementById("breakfastButton");
const lunchButton = document.getElementById("lunchButton");
const dinnerButton = document.getElementById("dinnerButton");
const mealCardsContainer = document.querySelector(".cards-container");

// Variable for which Meal time the user has selected
var whichMeal = "none"

// Array of objects for breakfast meals
const breakfastMeals = [
    { 
    name: "Overnight Oats", 
    image: "assets/images/breakfast_oats.jpg",
    ingredients: ["oats", "water", "milk", "peanut butter"],
    recipe: "In a container add oats with soy milk and peanut butter. Leave refrigerated overnight. Add yogurt and blueberries in the morning and take to go!",
    prepTime: "10 minutes", 
    isVeggie: true ,
    macros: {
        protein: 16, 
        carbs: 57, 
        fat: 15, 
        calories: 412 
      }
    },

    {
      name: "Bacon and Eggs",
      image: "assets/images/breakfast_baconeggs.jpg",
      ingredients: ["bacon", "eggs", "butter", "salt", "pepper"],
      recipe: "In a frying pan, cook bacon to desired crispiness. Remove bacon and in the same frying pan, fry eggs in the bacon grease, adding butter if needed. Season with salt and pepper to taste.",
      prepTime: "15 minutes",
      isVeggie: false,
      macros: {
        protein: 25,
        carbs: 1,
        fat: 20,
        calories: 300
      }
    },
    
    { name: "Egg Breakfast Burrito", 
      image: "assets/images/breakfast_burrito.jpeg",
      ingredients: ["eggs", "oil", "spinach", "tomato"], 
      recipe: "Oil a frying pan and scramble the eggs. Chop Tomatoes. Fill a tortilla with spinach, tomato, salsa and scrambled eggs. Wrap up and enjoy! ",
      prepTime: "15 minutes", 
      isVeggie: true,
      macros: {
         protein: 18, 
         carbs: 28, 
         fat: 28, 
         calories: 429
      } 
    },

    {
      name: "Sausage, Potato and Veg Hash",
      image: "assets/images/breakfast_sausagepotatoveghash.jpg",
      ingredients: ["chicken sausage", "potatoes", "bell peppers", "onion", "olive oil", "garlic"],
      recipe: "Dice potatoes, bell peppers, and onion. In a frying pan, heat olive oil and cook chicken sausages until browned. Add vegetables and garlic, cooking until tender.",
      prepTime: "20 minutes",
      isVeggie: false,
      macros: {
        protein: 17,
        carbs: 35,
        fat: 15,
        calories: 350
      }
    },
    
    { name: "Peanut Butter and Jelly Toast", 
      image: "assets/images/breakfast_pjtoast.jpeg",
      ingredients: ["white bread", "raspberry jam", "peanut butter"], 
      recipe: "Toast the bread until lightly toasted. Spread over the peanut butter and jam. ",
      prepTime: "10 minutes", 
      isVeggie: true,
      macros: {
         protein: 10, 
         carbs: 31, 
         fat: 18, 
         calories: 401
      } 
    },

    {
      name: "Smoked Salmon Bagel",
      image: "assets/images/breakfast_salmonbagel.jpg",
      ingredients: ["bagel", "cream cheese", "smoked salmon", "capers", "red onion"],
      recipe: "Toast a bagel and spread cream cheese evenly. Top with smoked salmon, capers, and thinly sliced red onion.",
      prepTime: "10 minutes",
      isVeggie: false,
      macros: {
        protein: 18,
        carbs: 48,
        fat: 12,
        calories: 400
      }
    },
    
    { name: "French Toast", 
      image: "assets/images/breakfast_frenchtoast.jpeg",
      ingredients: ["protein powder", "fruit selection", "milk", "egg", "white bread", "granulated sugar"], 
      recipe: "To a large bowl, whisk together the egg, milk, sugar and protein powder until a smooth batter is formed. Add the bread to egg mix and leave for 5 minutes. Heat a pan over medium heat and transfer the egg mix, lightly cook for two minutes on each side, remove from the heat and serve with the strawberries.",
      prepTime: "20 minutes", 
      isVeggie: true,
      macros: {
         protein: 44, 
         carbs: 32, 
         fat: 14, 
         calories: 425
      } 
    },

    {
      name: "Ham and Cheese Omelette",
      image: "assets/images/breakfast_hamcheeseomelette.jpg",
      ingredients: ["eggs", "cooked ham", "cheddar cheese", "vine tomatoes", "milk", "butter", "salt", "pepper"],
      recipe: "Whisk eggs with milk, salt, and pepper. In a frying pan, fry your tomatoes then set aside. In the same pan, melt butter and pour in the egg mixture. Add diced ham and shredded cheddar cheese. Cook until the eggs are set and fold the omelette in half. Reheat the tomatoes if neccessary and enjoy",
      prepTime: "15 minutes",
      isVeggie: false,
      macros: {
        protein: 22,
        carbs: 2,
        fat: 20,
        calories: 290
      }
    },
];

// Array of objects for lunch meals
const lunchMeals = [
    { 
    name: "Kale Salad", 
    image: "assets/images/lunch_kale.jpeg",
    ingredients: ["kale", "cannellini beans", "sundried tomatoes", "oil", "garlic", "walnuts"],
    recipe: "In a pan add oil and garlic and saute. Then add kale and cook until kale is wilted and softer. Then take kale and add to a bowl topping with white kidney beans, sun dried tomatoes and walnuts.",
    prepTime: "20 minutes", 
    isVeggie: true ,
    macros: {
        protein: 15, 
        carbs: 27, 
        fat: 46, 
        calories: 533 
      }
    },

    { name: "Mushroom Cheese Sandwich", 
      image: "assets/images/lunch_mushroom.jpeg",
      ingredients: ["portobello mushroom", "white bread", "mozzarella cheese", "oil", "onion"], 
      recipe: "In a pan add oil with chopped onion. Cook Portobello mushroom to soften. Take bread slices, place cheese on slice. Add cooked Portobello mushroom & onions to bread.",
      prepTime: "20 minutes", 
      isVeggie: true,
      macros: {
         protein: 30, 
         carbs: 42, 
         fat: 30, 
         calories: 525
      } 
    },

    { name: "Classic BLT", 
      image: "assets/images/lunch_blt.jpeg",
      ingredients: ["mayonaise", "bacon", "white bread, buttered", "mixed leaves", "tomatoe", "spinach"], 
      recipe: "Preheat the grill to a medium heat and grill the bacon until cooked and crispy. Spread the mayonnaise over the bread and slice the tomatoes. Layer the tomatoes, lettuce and bacon over the bread, cut in two and serve.",
      prepTime: "15 minutes", 
      isVeggie: false,
      macros: {
         protein: 30, 
         carbs: 32, 
         fat: 33, 
         calories: 556
      } 
    },

    { name: "Couscous Salad", 
      image: "assets/images/lunch_couscous.jpg",
      ingredients: ["couscous", "spring onion", "red pepper", "cucumber", "navy beans", "feta cheese", "balsamic vinaigrette"], 
      recipe: "Cook couscous per package instructions. Slice onion, pepper and cucumber. Combine cooked couscous with vegetables and feta. Drizzle balsamic dressing on salad.",
      prepTime: "30 minutes", 
      isVeggie: false,
      macros: {
         protein: 25, 
         carbs: 75, 
         fat: 16, 
         calories: 548
      } 
    },

    {
      name: "Vegetable Stir Fry with Tofu", 
      image: "assets/images/lunch_vegstirfry.jpg",
      ingredients: ["tofu", "broccoli", "carrot", "bell pepper", "soy sauce", "ginger", "garlic", "sesame oil"],
      recipe: "Press and cube tofu. In a pan, heat sesame oil and add garlic and ginger. Add tofu and vegetables. Stir fry until veggies are tender-crisp. Add soy sauce and stir to coat.",
      prepTime: "25 minutes", 
      isVeggie: true,
      macros: {
        protein: 18,
        carbs: 35,
        fat: 20,
        calories: 400
      }
    },

    {
      name: "Grilled Chicken Caesar Salad", 
      image: "assets/images/lunch_chickensalad.jpg",
      ingredients: ["chicken breast", "romaine lettuce", "parmesan cheese", "croutons", "caesar dressing"],
      recipe: "Grill chicken breast until cooked. Chop romaine lettuce and combine in a bowl with parmesan cheese and croutons. Slice chicken and add to the salad. Drizzle with caesar dressing.",
      prepTime: "25 minutes", 
      isVeggie: false,
      macros: {
        protein: 30,
        carbs: 12,
        fat: 15,
        calories: 350
      }
    },

    {
      name: "Caprese Sandwich", 
      image: "assets/images/lunch_capresesandwich.jpg",
      ingredients: ["ciabatta bread", "mozzarella cheese", "tomato", "basil", "balsamic glaze", "olive oil"],
      recipe: "Slice ciabatta bread and drizzle olive oil on each side. Layer sliced mozzarella, tomato, and basil leaves. Drizzle with balsamic glaze. Grill sandwich until cheese melts.",
      prepTime: "20 minutes", 
      isVeggie: true,
      macros: {
        protein: 20,
        carbs: 45,
        fat: 25,
        calories: 500
      }
    },
    
    {
      name: "Spicy Shrimp Tacos", 
      image: "assets/images/lunch_shrimptacos.jpg",
      ingredients: ["shrimp", "taco seasoning", "corn tortillas", "avocado", "coleslaw", "lime", "cilantro"],
      recipe: "Season shrimp with taco seasoning and cook in a pan until pink. Warm tortillas. Assemble tacos with shrimp, avocado slices, coleslaw. Top with lime juice and cilantro.",
      prepTime: "20 minutes", 
      isVeggie: false,
      macros: {
        protein: 25,
        carbs: 30,
        fat: 18,
        calories: 400
      }
    }, 
];

// Array of objects for dinner meals
const dinnerMeals = [
    { 
    name: "Creamy Chicken & Tomato Pasta", 
    image: "assets/images/dinner_chicken_pasta.jpeg",
    ingredients: ["chicken breast", "spinach", "sundried tomatos", "greek yoghurt"],
    recipe: "Cook pasta as per packet instructions. Meanwhile in a pan over a medium heat, add your oil and fry onions for 2-3 minutes until golden brown. Add garlic and cook for another 1-2 minutes. Then add in your tinned tomatoes and spinach and cook for 10 minutes on a low-medium heat, stirring often. While everything is cooking, chop your sundried tomatoes and chicken into chunks. Take the pan off the heat and stir in your Greek yogurt to create a creamy consistency. Drain your pasta and in a bowl combine your chicken, pasta, sun dried tomatoes and creamy sauce, mixing well. Sprinkle on your parmesan and enjoy",
    prepTime: "60 minutes", 
    isVeggie: false ,
    macros: {
        protein: 46, 
        carbs: 54, 
        fat: 25, 
        calories: 598 
      }
    },

    {
      name: "Chickpea Curry with Rice",
      image: "assets/images/dinner_chickpeacurry.jpg",
      ingredients: ["chickpeas", "coconut milk", "curry powder", "tomato paste", "onion", "garlic", "rice"],
      recipe: "Sauté onion and garlic in a pan. Add curry powder and tomato paste, stirring for a minute. Pour in coconut milk and chickpeas, simmering until thick. Serve over cooked rice.",
      prepTime: "40 minutes",
      isVeggie: true,
      macros: {
        protein: 15,
        carbs: 85,
        fat: 18,
        calories: 540
      }
    },

    {
      name: "Honey Glazed Salmon with Veg & Rice",
      image: "assets/images/dinner_salmonveggierice.jpg",
      ingredients: ["salmon fillets", "honey", "soy sauce", "garlic", "lemon juice", "olive oil", "broccoli", "carrots", "white or brown rice"],
      recipe: "In a bowl, mix honey, soy sauce, lemon juice, and minced garlic to create a glaze. Brush the glaze over the salmon fillets. In a pan, heat olive oil and cook the salmon until golden and cooked through. For the vegetables, steam broccoli and carrots until tender. Cook rice according to package instructions. Serve the glazed salmon over a bed of rice with steamed vegetables on the side.",
      prepTime: "40 minutes",
      isVeggie: false,
      macros: {
        protein: 28,
        carbs: 45,
        fat: 15,
        calories: 450
      }
    },
    
    { name: "One Pan Spanish Beans", 
      image: "assets/images/dinner_spanish_beans.jpeg",
      ingredients: ["butter beans", "oil", "onion", "garlic", "canned tomatoes", "spinach", "brown rice"], 
      recipe: "Add tomatoes, beans and spinach to pan and cook for a few minutes. Add hot water and rice. Cook until soft. Serve and top with salt, pepper and chilli flakes if desired.",
      prepTime: "35 minutes", 
      isVeggie: true,
      macros: {
         protein: 19, 
         carbs: 80, 
         fat: 24, 
         calories: 592
      } 
    },

    { name: "Beef Stew with Vegetables", 
    image: "assets/images/dinner_beef_stew.jpeg",
    ingredients: ["ground beef", "canned tomatoes", "frozen mixed vegetables", "large potatoe", "cornstarch"], 
    recipe: "Preheat oven to 190C/375F. Wrap potatoe in foil wrapper and bake until soft. Shred the beef with a fork and transfer to sauce pan. Add tomatoes, vegetables, salt and pepper. Mix cornstarch with water until smooth; stir in with beef. Continue stirring until mixture begins to thicken. Serve & Enjoy",
    prepTime: "35 minutes", 
    isVeggie: false,
    macros: {
       protein: 30, 
       carbs: 69, 
       fat: 20, 
       calories: 557
    } 
  },

     { name: "One Pot Spinach & Tomato Pasta", 
      image: "assets/images/dinner_spinach_pasta.jpeg",
      ingredients: ["spaghetti", "canned tomatoes", "spinach", "butter beans", "mixed herbs", "oil"], 
      recipe: "Cook spaghetti per package instructions. Add to a pan oil, mixed herbs, spinach leaves, canned tomatoes and butter beans. Cook thoroughly and serve together.",
      prepTime: "30 minutes", 
      isVeggie: true,
      macros: {
         protein: 21, 
         carbs: 92, 
         fat: 16, 
         calories: 603
      } 
    },

    {
      name: "Roasted Veggie Lasagna",
      image: "assets/images/dinner_veggielasagna.jpg",
      ingredients: ["lasagna noodles", "courgette", "bell peppers", "ricotta cheese", "mozzarella cheese", "marinara sauce", "olive oil", "garlic"],
      recipe: "Slice courgette and bell peppers, and roast them in the oven with olive oil and garlic until tender. Layer cooked lasagna noodles with marinara sauce, roasted vegetables, ricotta, and mozzarella cheese. Bake until the cheese is bubbly and golden.",
      prepTime: "60 minutes",
      isVeggie: true,
      macros: {
        protein: 18,
        carbs: 58,
        fat: 20,
        calories: 490
      }
    },

    {
      name: "Lemon Garlic Shrimp and Asparagus",
      image: "assets/images/dinner_shrimpasparagus.jpg",
      ingredients: ["shrimp", "asparagus", "lemon", "garlic", "butter", "olive oil"],
      recipe: "In a pan, sauté asparagus in olive oil until tender. Add shrimp, butter, and garlic, cooking until shrimp is pink. Squeeze lemon juice over the top and serve.",
      prepTime: "30 minutes",
      isVeggie: false,
      macros: {
        protein: 24,
        carbs: 10,
        fat: 15,
        calories: 280
      }
    },
];

// Function to display meals based on which button the user clicked

function displayMeals(mealData) {

    //Clearing existing meal cards
    while (mealCardsContainer.firstChild) {
        mealCardsContainer.removeChild(mealCardsContainer.firstChild);
    }

    // Creating a row element to contain the cards
    const row = document.createElement('div');
    row.className = 'row';

    // Creating the card elements & adding food content
    mealData.forEach(meal => {
        
        const col = document.createElement('div');
        col.className = 'col-12 col-md-3 mb-4';
        
        const card = document.createElement("div");
        card.className = 'card h-100'; 
        card.classList.add("meal-card");

        const imageContainer = document.createElement("div");
        imageContainer.className = 'meal-card-image-container';

        const image = document.createElement("img");
        image.className = 'card-img-top';
        image.alt = meal.name;
        image.src = meal.image;
        image.style.transition= 'transform 0.3s ease';

        // IMAGE EVENT LISTENERS
        // Making images bigger on hover
        image.addEventListener('mouseover', (e) => {
        e.target.style.transform = 'scale(1.15)';
        });

        // Then resetting them back to normal size
        image.addEventListener('mouseout', (e) => {
        e.target.style.transform = 'scale(1)';
        })

        // Opening the meal modal 
        image.addEventListener("click", () => openModal(meal));
        
        const cardBody = document.createElement("div");
        cardBody.className = 'card-body';
        
        const heading = document.createElement("h3");
        heading.className = 'card-title';
        heading.textContent = meal.name;

        // Check if the meal is vegetarian and add an icon if it is
        if (meal.isVeggie) {
        const vegetarianIcon = document.createElement("i");
        vegetarianIcon.classList.add("fa-solid", "fa-leaf");
        vegetarianIcon.style.color = 'green'; 
        vegetarianIcon.style.marginLeft = '5px';
        // Append the veggie icon to the meal heading
        heading.appendChild(vegetarianIcon);
        }

        // For the add to macro tracker button
        const macroButton = document.createElement("button");
        macroButton.classList.add("macro-button");
        macroButton.textContent = "Add to Macro Tracker";
        
        
        // Event Listener for Macro Tracker Button
        macroButton.addEventListener("click", (event) => {
            event.stopPropagation();
            addToMacroTracker(meal);
            });
        
        // For the add to meal plan button
        const plannerButton = document.createElement("button");
        plannerButton.classList.add("planner-button");
        plannerButton.textContent = "Add to Meal Planner";
       
        // Event Listener for Macro Tracker Button
        plannerButton.addEventListener("click", function() {
            addToMealPlanner(meal.name);
          });
    
        //Appending everything to the relevant bits
        imageContainer.appendChild(image); 
        card.appendChild(imageContainer);
        card.appendChild(cardBody);
        cardBody.appendChild(heading);
        cardBody.appendChild(macroButton);
        cardBody.appendChild(plannerButton);

        col.appendChild(card);
        row.appendChild(col);
    });
        mealCardsContainer.appendChild(row);
}

// Adding event listeners and event handling to the meal time buttons
breakfastButton.addEventListener("click", function() {
    displayMeals(breakfastMeals);
    whichMeal = "Breakfast: ";
});

lunchButton.addEventListener("click", function() {
    displayMeals(lunchMeals);
    whichMeal = "lunch: ";
});

dinnerButton.addEventListener("click", function() {
    displayMeals(dinnerMeals);
    whichMeal = "Dinner: ";
});

//MORE MEAL INFO MODAL 
const mealModal = document.getElementById("mealModal");
const modalMealName = document.getElementById("modalMealName");
const modalRecipe = document.getElementById("modalRecipe");
const modalMacros = document.getElementById("modalMacros");
const modalIngredients = document.getElementById("modalIngredients")
const modalCloseButton = document.querySelector("#closeMeal");

// Function for displaying the meal modal
function openModal(meal) {
    modalMealName.textContent = meal.name;
    modalPrepTime.querySelector('span').textContent = " " + meal.prepTime;
    
    modalMacros.innerHTML = `<h3 id="modalMacrosTitle">Macros</h3>
    <p>Protein: ${meal.macros.protein}g, Carbs: ${meal.macros.carbs}g, Fat: ${meal.macros.fat}g, Calories: ${meal.macros.calories}</p>`;
    
    modalIngredients.innerHTML = '<h3 id="modalMacrosTitle">Ingredients</h3><ul>';
    meal.ingredients.forEach(ingredient => {
        modalIngredients.innerHTML += `<li>${ingredient}</li>`;
    });

    const recipeInstructions = meal.recipe.split('.').filter(instruction => instruction.trim() !== '');
    let recipeContent = '<h3 id="modalRecipeTitle">Recipe</h3><ol>';
    recipeInstructions.forEach(instruction => {
        recipeContent += `<li>${instruction.trim()}.</li>`;
    });
    recipeContent += '</ol>';
    modalRecipe.innerHTML = recipeContent;
    modalIngredients.innerHTML += '</ul>';
    
    mealModal.style.display = "block";
}

// Function for closing modals
function closeModal(modal) {
    modal.style.display = "none";
}

// Event listerner for closing the recipe modal
modalCloseButton.addEventListener("click", () => closeModal(mealModal));

window.addEventListener("click", (event) => {
    if (event.target === mealModal) {
        closeModal(mealModal);
    }
});

//Function for adding meal to meal planner

function addToMealPlanner(meal) {
    var selectedDay = prompt('Select a day (Monday to Sunday):');
  
    if (selectedDay) {
      // Converting the input to title case (e.g., monday -> Monday)
      selectedDay = selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1).toLowerCase();
      
      // Checking if the entered day is valid
      if (isValidDay(selectedDay)) {
        
        // Getting the meal for the selected day   
        if (meal !== null) {
          // Updating the corresponding cell in the dayTable
          updateDayTable(selectedDay, whichMeal + meal);
        }
      } else {
        alert('Invalid day. Please enter a valid day of the week.');
      }
    }
  };
  
  function isValidDay(day) {
    var validDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return validDays.includes(day);
  }
  
  function updateDayTable(day, meal) {
    var dayTable = document.getElementById('dayTable');
    var rows = dayTable.getElementsByTagName('tr');
    
  
    for (var i = 1; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName('td');
      if (cells.length >= 2 && cells[0].innerText === day) {
        if (cells[1].innerText !== ""){
        cells[1].innerText = cells[1].innerText + "\n" + meal;
        } else {
            cells[1].innerText = meal;
        }
      }
    }
  }

//MACRO TRACKER MODAL 

let macroTracker = {
  meals: [],
  totalProtein: 0,
  totalCarbs: 0,
  totalFat: 0,
  totalCalories: 0
};

// Function to add a meal to the macro tracker
function addToMacroTracker(meal) {
    if (meal.macros && typeof meal.macros.protein === 'number' && 
        typeof meal.macros.carbs === 'number' && 
        typeof meal.macros.fat === 'number' && 
        typeof meal.macros.calories === 'number') {
        
        macroTracker.meals.push(meal);
        macroTracker.totalProtein += meal.macros.protein;
        macroTracker.totalCarbs += meal.macros.carbs;
        macroTracker.totalFat += meal.macros.fat;
        macroTracker.totalCalories += meal.macros.calories;
    } else {
        console.error("Invalid macros in meal:", meal);
    }
}

// Function to open the macro tracker modal
function openMacroTrackerModal() {
    const mealList = document.getElementById("mealList");
    mealList.innerHTML = ''; 
    
    macroTracker.meals.forEach((meal) => {
        const mealEntry = document.createElement('div');
        mealEntry.classList.add('meal-entry');
        mealEntry.innerHTML = `
            <div class="meal-name">${meal.name}</div>
            <div class="meal-macros">
              Protein: ${meal.macros.protein}g |
              Carbs: ${meal.macros.carbs}g |
              Fat: ${meal.macros.fat}g |
              Calories: ${meal.macros.calories}kcal
            </div>
        `;
        mealList.appendChild(mealEntry);
    });
  
    document.getElementById("totalProtein").textContent = `Total Protein: ${macroTracker.totalProtein}g`;
    document.getElementById("totalCarbs").textContent = `Total Carbs: ${macroTracker.totalCarbs}g`;
    document.getElementById("totalFat").textContent = `Total Fat: ${macroTracker.totalFat}g`;
    document.getElementById("totalCalories").textContent = `Total Calories: ${macroTracker.totalCalories}kcal`;

    // Display the macro tracker modal
    document.getElementById("macroModal").style.display = "block";
}


const macroTrackerButton = document.getElementById("macroTrackerButton");
macroTrackerButton.addEventListener("click", openMacroTrackerModal);

const macroModal = document.getElementById("macroModal");

const closeMacroButton = document.getElementById("closeMacro");

closeMacroButton.addEventListener("click", () => closeModal(macroModal));

// Function to close modals
function closeModal(modal) {
    modal.style.display = "none";
}

//MEAL PLANNER
//slide in screen 
var mealPlanButton = document.getElementById('mealPlanButton');
var closeMenuBtn = document.getElementById('closeMenuBtn');
var slideOutMenu = document.getElementById('slideOutMenu');
var content = document.getElementById('content');

mealPlanButton.addEventListener('click', function() {
  slideOutMenu.style.right = '0';
  content.style.marginRight = '250px'; 
});

closeMenuBtn.addEventListener('click', function() {
  slideOutMenu.style.right = '-500px';
  content.style.marginRight = '0';
});


  