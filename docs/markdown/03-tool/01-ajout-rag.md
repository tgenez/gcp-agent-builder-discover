
# Qu'est-ce que le Datastore RAG ?

Le Datastore RAG (Retrieval-Augmented Generation) combine le stockage de données vectorisées avec des modèles de langage avancés.

##==##


# Fonctionnement

* **Vectorisation des documents** : Les documents sont convertis en représentations vectorielles.
* **Stockage efficient** : Ces vecteurs sont stockés dans un datastore optimisé.
* **Recherche contextuelle** : Lors d'une requête, le système recherche les informations pertinentes.
* **Génération augmentée** : Le modèle LLM utilise ces informations pour générer des réponses précises.
<!-- .element: class="list-fragment" -->

##==##

# Grounding

<img class="center" style=" height: 750px" src="./assets/images/grounding_example.PNG" />

##==##

# Avantages

* **Précision accrue** : Fournit des réponses basées sur des données spécifiques.
* **Contextualisation** : Permet aux agents de comprendre et de répondre dans le contexte approprié.
* **Évolutivité** : Gère efficacement de grandes quantités de données.
* **Mise à jour facile** : Les connaissances de l'agent peuvent être mises à jour sans réentraînement complet.

##==##

# Exemple FAQ

Il faut un fichier CSV au format suivant:
````
"question","answer","title","url"
"question ?","ma réponse","question","http://mywebsite.com"
````

Attention, il doit être en UTF-8 et LF(retour ligne)
