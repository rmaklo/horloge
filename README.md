# 🕒 Exercice JavaScript — Adapter l’affichage en fonction de l’heure

## 🎯 Objectif

Compléter une fonction JavaScript pour :

- Afficher un message "Bonjour" ou "Bonsoir" selon l'heure actuelle
- Appliquer une classe CSS différente en fonction de la tranche horaire

---

## 📁 Fichiers fournis

- `index.html` : structure HTML
- `style.css` : styles CSS prédéfinis (`aurore`, `matin`, `apres-midi`, `soiree`, `nuit`)
- `script.js` : fichier JavaScript **à compléter**

---

## ✅ Étapes à compléter dans `script.js`

Suivre les numéros d'étapes et les commentaires présents dans le fichier pour compléter le code.

### 🧩 Étape 1 : Obtenir l’heure actuelle

Créer une variable qui stocke l’heure courante (un nombre entre 0 et 23).

---

### 🧩 Étape 2 : Cibler l’élément du message

Créer une variable qui pointe vers l’élément HTML avec l’attribut `id="say-hi"`.

---

### 🧩 Étape 3 : Afficher "Bonjour" ou "Bonsoir"

Créer une condition :

- Si l’heure est comprise entre 5h et 18h → afficher "Bonjour !"
- Sinon → afficher "Bonsoir !"

Afficher ce message dans l’élément ciblé à l’étape précédente.

---

### 🧩 Étape 4 : Cibler l’élément à styliser

Créer une variable qui cible l’élément HTML avec l’attribut `id="time-based-style"`.

---

### 🧩 Étape 5 : Réinitialiser les classes CSS

Supprimer toutes les classes CSS suivantes de l’élément ciblé :

- `aurore`
- `matin`
- `apres-midi`
- `soiree`
- `nuit`

---

## 🌟 Bonus facultatif

### 🎨 Changer la couleur du texte selon l'heure

Modifiez vos classes CSS pour changer aussi la **couleur du texte** (`color`) selon la période de la journée.

Exemples :

- Texte sombre sur fond clair le matin
- Texte clair sur fond foncé le soir

Cela permet d’avoir un meilleur contraste et un affichage plus agréable.

---

### 🧩 Étape 6 : Appliquer la bonne classe CSS selon l’heure

Créer une série de conditions pour appliquer **la classe CSS appropriée** selon la tranche horaire.

| Tranche horaire     | Classe CSS à appliquer |
|---------------------|------------------------|
| 05h à 08h           | `aurore`              |
| 08h à 12h           | `matin`               |
| 12h à 18h           | `apres-midi`          |
| 18h à 22h           | `soiree`              |
| 22h à 05h           | `nuit`                |

Ajouter uniquement **une** classe selon la valeur de l’heure actuelle.

---

## 🔁 Fonction de mise à jour automatique

La fonction `updateClock()` :

- Affiche l’heure dans l’élément `#time-display`
- Met à jour le style en appelant `changeStyleBasedOnTime()`
- Est exécutée automatiquement chaque seconde

**Vous n’avez rien à modifier ici.**

---

## 🧪 Tests recommandés

Pour tester vos conditions plus facilement :

- Vous pouvez temporairement remplacer l'heure réelle par une valeur fixe (ex. `7`, `13`, `23`) pour vérifier vos conditions.

---

## ✅ Résultat attendu (à tester)

| Heure simulée | Message attendu  | Classe CSS attendue |
|---------------|------------------|---------------------|
| 07h00         | Bonjour          | aurore              |
| 09h30         | Bonjour          | matin               |
| 13h00         | Bonjour          | apres-midi          |
| 19h45         | Bonsoir          | soiree              |
| 03h15         | Bonsoir          | nuit                |

---

## 💡 Conseils

- Utilisez des structures conditionnelles `if`, `else if`, `else`.
- Faites attention aux heures limites : certaines plages incluent ou excluent les bornes.
- Pour la "nuit", pensez à combiner deux conditions (avant 5h OU après 22h).
