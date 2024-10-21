// main.js

// Fonction pour gérer la transition entre les pages
function transitionToPage(target) {
    const currentPage = document.body;
    currentPage.style.transition = "transform 0.5s ease-in-out";
    currentPage.style.transform = "scale(0.1)";
    setTimeout(() => {
        window.location.href = target; // Redirection après l'animation
    }, 500);
}

// Fonction pour afficher le nombre de visiteurs et de ventes
function displayVisitorStats(visitors, sales) {
    const visitorCount = document.getElementById("visitor-count");
    const salesCount = document.getElementById("sales-count");

    if (visitorCount && salesCount) {
        visitorCount.textContent = visitors;
        salesCount.textContent = sales;
    }
}

// Fonction pour gérer le changement de thème
function changeTheme(theme) {
    const body = document.body;

    if (theme === "dark") {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
    } else {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
    }
}

// Événement pour la navigation avec la flèche
const arrowDown = document.querySelector(".arrow-down");
if (arrowDown) {
    arrowDown.addEventListener("click", () => {
        // Scroll vers le bas ou vers la section suivante
        window.scrollBy({
            top: window.innerHeight, // Scroll d'une hauteur de fenêtre
            behavior: "smooth"
        });
    });
}

// Événement pour le bouton de changement de thème
const themeToggleButton = document.getElementById("theme-toggle");
if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
        const currentTheme = body.classList.contains("dark-theme") ? "light" : "dark";
        changeTheme(currentTheme);
    });
}

// Exemple de mise à jour des statistiques de visiteurs
// À remplacer par des données réelles si disponibles
displayVisitorStats(1000, 150);

// Gérer les liens des boutons pour naviguer vers les pages
const enterButton = document.querySelector(".enter-button");
if (enterButton) {
    enterButton.addEventListener("click", () => {
        transitionToPage("presentation.html"); // Lien vers la page de présentation
    });
}
