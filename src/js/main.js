// Quiz: Veuillez répondre aux questions ci-dessous. (1 heure) (+20 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. Vous avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE:
// une variable est un conteneur qui va nous permettre de stocker des informations

// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.
const firstName = "Clementine";

// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.
let age = 18;

// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:
// - Balise HTML: <input>
// - Classe(s): "card-input"
// - Attribut(s): type="text"   name="password"
//             placeholder="Créer votre mot de passe"
//             id="password-input"

// // -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE:
// Un ID sera toujours plus fort qu'une classe, il passera au dessus d'une classe. Les deux sont pour selectionner un morceau et de le cibler en le nommant.

// // -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE:
// C'est utilisé pour selectionner un élément du document pour le cibler et le changer /style, contenu) et c'est le premier élément du document qui sera en correspondance

// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
// 7.1 Créez une variable appelée "cardContent".
// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.
const cardContent = document.querySelector("p");

// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
// 8.1 Utilisez la propriété   -> .classList <-   pour ajouter   -> .add("...") <-   la class "highlight" à l'élément HTML.
cardContent.classList.add("highlight");

// -----------------------
// 9. Récupérez la valeur de l'attribut "placeholder"   -> .getAttribute("...") <-   de l'élément HTML <input> (ligne 17 du code HTML).
const placeholderValue = passwordInput.getAttribute("placeholder");

// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE:
// C'est une fonction qui écoute un evenement specifique comme un click.

// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
// 11.2 : Utilisez la méthode   -> .addEventListener("...", function() {...}) <-   sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
// 11.3 : Lorsqu'un.e utilisateurice clique sur le bouton, ajoutez/supprimez (toggle) la class "hide" de l'élément HTML <p> (ligne 29-31 du code HTML).
const toggleBtn = document.querySelector("#card-btn");

toggleBtn.addEventListener("click", function () {
  const toggleText = document.querySelector("#toggle-text");
  console.log(toggleText);
  console.log(toggleText.classList);
  toggleText.classList.add("hide");
});
