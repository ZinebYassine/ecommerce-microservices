# Application E-commerce Basée sur une Architecture de Microservices

## Présentation du Projet
Ce projet propose une application e-commerce modulaire conçue avec une architecture de microservices. Il met en avant la gestion des produits et des commandes en utilisant des technologies modernes telles que Docker pour la conteneurisation, Spring Boot pour le backend, et MySQL pour la gestion des données. Chaque service fonctionne de manière indépendante et communique via une passerelle API dédiée.

## Points Forts

- **Architecture Modulaire** : Services distincts pour les produits, les commandes, et une passerelle API centralisée.
- **Base de Données Unifiée** : Utilisation d'une base MySQL pour centraliser les informations
- **Interface Utilisateur Moderne** : Développée avec React, l'interface inclut une pagination intuitive pour une meilleure expérience utilisateur.
- **Passerelle API Performante** : Gestion du routage et de l'équilibrage de charge avec Spring Cloud Gateway.
- **Effets Visuels Soignés** : Utilisation de transitions CSS pour des interactions fluides.

## Technologies et Outils

### Backend
- **Spring Boot** : Framework principal pour la création des microservices.
- **Spring Data JPA** : Pour les opérations avec la base de données.
- **Spring Cloud Gateway** : Passerelle de communication entre les microservices.
- **MySQL** : Système de gestion de base de données relationnelle.
- **Hibernate** : ORM pour faciliter les interactions avec les entités.

### Frontend
- **React.js** : Développement de l'interface utilisateur réactive.
- **Ant Design** : Composants prêts à l'emploi pour un design cohérent et efficace.

## Structure du Système

- **Microservice Produits** : Gestion des produits (ajout, modification, suppression, affichage).
- **Microservice Commandes** : Gestion des commandes des utilisateurs.
- **API Gateway** : Intermédiaire central pour connecter et router les services.
- **Base MySQL** : Stockage des données des produits et des commandes.

## Conclusion
Ce projet constitue une solution évolutive et moderne pour les plateformes e-commerce, assurant modularité, performance et facilité de maintenance.

