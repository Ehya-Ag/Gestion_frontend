# Gestion de Recettes

## Description

Ce projet est une application de gestion de recettes de cuisine, développée en Vue.js 3 en utilisant la Composition API. L'application permet aux utilisateurs de gérer leurs recettes de manière simple et intuitive. Elle utilise également Axios pour effectuer des appels API afin de gérer les données des recettes et des catégories.



## Technologies Utilisées

- **Vue.js** : Framework JavaScript pour construire l'interface utilisateur.
- **Axios** : Bibliothèque utilisée pour effectuer des appels API HTTP.


Vous aurez également besoin d'un accès à une API pour gérer les recettes et les catégories, ou vous pouvez configurer une API locale en suivant les instructions fournies avec le projet.



## Fonctionnalités

- **Gestion des recettes** : Les utilisateurs peuvent ajouter, modifier, et supprimer recettes.

- **Gestion des Catégories** : Les utilisateurs peuvent ajouter, modifier, et supprimer des catégories de recettes.

- **Appels API avec Axios** : L'application utilise Axios pour interagir avec une API afin de récupérer, créer, modifier et supprimer des recettes et des catégories.


## Installation

1. **Cloner le projet**

   ```bash
   git clone https://github.com/Ehya-Ag/Gestion_frontend.git
   ```
   ```
   cd Gestion_frontend
   ```
   

2. **Installer les dépendances**

    ```bash
    npm install


3. **Lancer l'application en mode dévéloppement**

    ```bash
    npm run dev
    ```

## Routes API

- `GET /recettes` : Récupérer toutes les recettes
- `POST /recettes` : Ajouter une nouvelle recette
- `PUT /recettes/:id` : Modifier une recette existante
- `DELETE /recettes/:id` : Supprimer une recette


## Auteur

- [Ehya-Ag](https://github.com/Ehya-Ag) 
