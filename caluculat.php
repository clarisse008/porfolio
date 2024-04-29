<?php
// Vérifier si les données du formulaire ont été soumises
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les valeurs saisies dans le formulaire
    $nombre1 = $_POST["nombre1"];
    $nombre2 = $_POST["nombre2"];
    $operation = $_POST["operation"];
    
    // Vérifier l'opération sélectionnée et effectuer le calcul approprié
    switch ($operation) {
        case "addition":
            $resultat = $nombre1 + $nombre2;
            break;
        case "soustraction":
            $resultat = $nombre1 - $nombre2;
            break;
        case "multiplication":
            $resultat = $nombre1 * $nombre2;
            break;
        case "division":
            // Vérifier si le deuxième nombre est différent de zéro pour éviter la division par zéro
            if ($nombre2 != 0) {
                $resultat = $nombre1 / $nombre2;
            } else {
                $resultat = "Impossible de diviser par zéro";
            }
            break;
        default:
            $resultat = "Opération non valide";
    }
    
    // Afficher le résultat
    echo "<h2>Résultat de l'opération:</h2>";
    echo "<p>$nombre1 $operation $nombre2 = $resultat</p>";
}
?>
