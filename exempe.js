// Récupérez les éléments HTML pour les images et les boutons
const images = document.querySelectorAll("#slider img");
const precedentBtn = document.getElementById("precedent");
const suivantBtn = document.getElementById("suivant");

// Initialisez l'index de l'image actuelle
let imageIndex = 0;

// Fonction pour afficher l'image correspondant à l'index donné
function afficherImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.display = "block"; // Affiche l'image
    } else {
      image.style.display = "none"; // Cache les autres images
    }
  });
}

// Changez d'image toutes les 4 secondes
function defilerAutomatiquement() {
  imageIndex = (imageIndex + 1) % images.length;
  afficherImage(imageIndex);
}

// Écoutez les clics sur le bouton "Précédent"
precedentBtn.addEventListener("click", () => {
  imageIndex = (imageIndex - 1 + images.length) % images.length;
  afficherImage(imageIndex);
});

// Écoutez les clics sur le bouton "Suivant"
suivantBtn.addEventListener("click", () => {
  imageIndex = (imageIndex + 1) % images.length;
  afficherImage(imageIndex);
});

// Affichez la première image au chargement de la page
afficherImage(imageIndex);

// Défilement automatique toutes les 4 secondes
setInterval(defilerAutomatiquement, 4000);

