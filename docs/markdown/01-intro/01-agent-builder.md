# Vertex AI de GCP

<img class="center" style=" height: 750px" src="./assets/images/gcp-vertex-ai.PNG" />


##==##

# Qu'est ce qu'un agent ?

Orchestrates conversation and transactions and instructs LLM, configured with natural language prompts

##==##

# Avantages d'un agent

* Plus simple : Instructions en langage naturel vs. code
* Plus rapide : Aucun entraînement d'intention ou de machine à états nécessaire
* Gestion robuste des conversations (bavardages, changements de sujet inattendus, etc.) : Amélioration de la qualité
* S'intègre aux applications d'entreprise, via des outils/extensions
* Évolutif en ajoutant des agents spécialisés
* Serverless : PaaS, service managé
* Pay as you go : paiement à l’utilisation
<!-- .element: class="list-fragment" -->

##==##

# Qu'est ce que fait un agent ?

* Préserve le contexte de la conversation
* Se connecter aux outils
* Stocke les vecteurs RAG (magasins de données)
* Intégration possible avec d’autres applications via API
* Résumer et contextualiser les réponses des outils
* Acheminer vers d'autres agents (agents spécialisés)
* Raisons : Boucles de raisonnement
* Prompts complexes : par exemple faire une commande via le chatbot, jusqu’au checkout
<!-- .element: class="list-fragment" -->

##==##

# Schema d'un agent

TODO refaire schema en plusieurs étapes animé

<img class="center" style=" height: 750px" src="./assets/images/schema-agent.PNG" />

##==##

# Quand utiliser ?

* L'agent builder produit est pour le besoin de no code
* Il peut être fait par une personne non dev
* Besoin de connaissance sur les promptes quand mêmes et de l'IA 
