(async () => {
  // j'utilise fetch pour faire un appel vers une API
  // fetch est asynchrone, donc ne retourne pas directement la réponse du serveur
  // si je veux attendre que le serveur réponde avant de stocker le résultat
  // dans ma variable, j'utilise le mot clé "await" avant le fetch
  const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");

  // j'utilise la fonction json() sur la réponse du serveur
  // pour transformer les données json du serveur en données utilisables
  // en javascript
  // cette fonction est aussi asynchrone, donc pour attendre que la "conversion"
  // soit faite, j'utilise le mot clé await
  const mealsResponseData = await mealsResponse.json();

  // on cible la div qui a l'id root
  const root = document.getElementById("root");
  // on supprime son contenu (le message de chargement)
  root.textContent = "";

  // je fais une boucle sur les recettes récupérées
  mealsResponseData.meals.map((meal) => {
    // je créé un titre avec en text le titre de la recette
    const titleElement = document.createElement("h2");
    titleElement.textContent = meal.strMeal;

    // je créé une balise article
    const articleElement = document.createElement("article");

    // j'insère dans la balise le titre créé
    articleElement.appendChild(titleElement);

    // j'insère dans la div root, l'article
    root.appendChild(articleElement);
  });
})();
