// Fonction pour changer la classe CSS en fonction de l'heure
function changeStyleBasedOnTime() {

    //* 1. Ici on veut créer la variable currentHour qui contient l'heure actuelle en direct. On peut l'obtenir grâce à la fonction interne à Javascript : new Date().getHours(). Le résultat est une valeur de type number comprise entre 0 et 23
    let currentHour = new Date().getHours()
    console.log(currentHour)





    //* 2. On crée la variable sayHi qui correspond à la balise ayant l'id 'say-hi'

    let sayHi = document.getElementById('say-hi')
    



    //**! 3. ICI on veut une condition pour afficher Bonjour ou Bonsoir en fonction de l'heure de la journée */
        //* Entre 5h et 18h, on affiche "Bonjour !" en injectant du code dans l'id say-hi
       //* Entre 18h et 5h, on affiche "Bonsoir !" en injectant du code dans l'id say-hi

        if (currentHour >= 5 && currentHour <= 18) {
                sayHi.innerHTML = " Bonjour !"
            } else {
                sayHi.innerHTML = "Bonsoir"
            }

    //* 4. On créé la variable element qui correspond à la balise ayant l'id 'time-based-style'

            let element = document.getElementById('time-based-style')

    //* 5. On réinitialise les classes sur element, c'est-à-dire que l'on .remove toutes les classes potentielles qui ont été ajoutées sur cet élément

            element.classList.remove("aurore", "matin", "apres-midi", "soiree", "nuit")
            console.log(element)





    //**! 6. ICI on veut une condition pour appliquer la classe appropriée en fonction de la variable currentHour (l'heure actuelle) */
    //* On va appliquer la classe aurore, matin, apres-midi, soiree, ou nuit en fonction de l'heure de la journée
    //* Pour faire cela on crée une condition de la variable currentHour (sa valeur est comprise entre 0 et 23)
    //* On ajoute la classe css appropriée en fonction de l'heure avec la code suivant : 


            //* Aurore : 5h-8h
            //* Matin : 8h-12h
            //* Après-midi : 12h-18h
            //* Soirée : 18h-22h
            //* Nuit : 22h-5h

















} // Fin de la fonction

//**! /!\ Ne pas toucher /!\
//**! /!\ DÉBUT /!\
// Fonction pour afficher l'heure en direct
function updateClock() {
    // On créé la variable now qui contient une fonction JS Date()
    // Date() permet d'obtenir l'heure en direct sous forme d'un number
    const now = new Date();

    // On transforme les number récupérés de la fonction Date() pour avoir un affichage des heures, minutes et secondes de type HH:MM:SS 
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    // Interpolation de nos variables précédemment créées
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Dans l'élément qui a l'id "time-display", on injecte le texte d'affichage d'heure "Il est ${variable-contenant-l'heure-en-direct}"
    document.getElementById('time-display').textContent = `Il est ${timeString}`;

    // On appelle la fonction changeStyleBasedOnTime() pour mettre à jour le style en fonction de l'heure
    changeStyleBasedOnTime();
} // fin de la deuxième fonction

// Mise à jour de l'horloge toutes les secondes
setInterval(updateClock, 1000); // 1000 ms = 1 seconde

// Appel de la fonction updateClock
updateClock();
//**! /!\ FIN /!\