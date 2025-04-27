# 📋 Todo REST API (TypeScript, Node.js, Express, MongoDB)

**GitHub Repository**: [https://github.com/jordankamto/todo-rest-api-ts](https://github.com/jordankamto/todo-rest-api-ts)

## Description

Ce projet est une API REST pour la gestion de Todo Lists, développée en **TypeScript** afin de mettre en avant mes compétences récentes dans ce langage.  
Elle offre les fonctionnalités suivantes :

- **POST** `/todos` : Créer une nouvelle todo
- **GET** `/todos` : Récupérer toutes les todos existantes
- **GET** `/todos/:id` : Récupérer un todo spécifique
- **PATCH** `/todos/:id` : Modifier le contenu texte d'une todo spécifique
- **PUT** `/todos/:id` : Modifier le statut `completed` (boolean) d'une todo spécifique
- **DELETE** `/todos/:id` : Supprimer une todo

Les données sont stockées localement sur une instance **MongoDB**.

## Technologies utilisées

- **TypeScript** – Typage statique et meilleure organisation du code
- **Node.js** – Environnement d'exécution JavaScript côté serveur
- **Express** – Framework web minimaliste pour Node.js
- **Body-Parser** – Middleware pour parser les corps de requêtes HTTP
- **Express-Validator** – Middleware pour la validation des entrées utilisateur
- **Mongoose** – ODM (Object Data Modeling) pour MongoDB

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/jordankamto/Todo-Rest-api-ts.git

# Se déplacer dans le dossier du projet
cd todo-rest-api-ts

# Installer les dépendances
npm install
npm start