(async () => {
  const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");

  const mealsResponseData = await mealsResponse.json();

  const root = document.getElementById("root");
  root.textContent = "";

  const createNodeElement = (tag, text, attributes, parentElement) => {
    const element = document.createElement(tag);
    element.textContent = text;

    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }

    parentElement.appendChild(element);
  };

  mealsResponseData.meals.map((meal) => {
    const articleElement = document.createElement("article");

    createNodeElement("p", meal.strMeal, { class: "title-meal" }, articleElement);

    createNodeElement("p", meal.strInstructions, { class: "instructions-meal" }, articleElement);
    createNodeElement("img", null, { class: "img-meal", src: meal.strMealThumb }, articleElement);
    createNodeElement("i", meal.strCategory, { class: "cat-meal" }, articleElement);

    root.appendChild(articleElement);
  });
})();
