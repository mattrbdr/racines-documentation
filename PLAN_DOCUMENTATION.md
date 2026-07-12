# Plan de documentation Racines

## Objectif et principes

Cette documentation accompagne l’usage de Racines, plateforme de circuits courts pour particuliers, producteurs, collectivités et professionnels. Elle ne remplace ni les pages marketing, ni les contenus légaux, ni les notes de version : elle explique comment accomplir une tâche dans le produit.

Principes de séparation :

- **Guides d’usage** : orientés tâches, destinés aux utilisateurs finaux, avec prérequis, étapes, résultat attendu et résolution de problème.
- **Référence** : comportements exhaustifs et stables (rôles, statuts, champs, règles métier, limites), sans tutoriel.
- **Guides d’administration** : réservés aux membres d’organisation et aux administrateurs de plateforme ; aucun mélange avec le parcours acheteur.
- **Développeurs / intégrations** : documentation technique séparée, née des contrats API et non d’écrans de l’interface.
- **Contenus publics** : blog, changelog, newsroom, aide marketing et FAQ restent sur racinesapp.com et sont simplement liés quand nécessaire.

## Arborescence proposée

```text
docs/
├── demarrer/
│   ├── comprendre-racines.md
│   ├── creer-un-compte.md
│   ├── se-connecter-et-gerer-son-profil.md
│   └── choisir-son-espace.md
├── acheter/
│   ├── rechercher-un-producteur-ou-produit.md
│   ├── favoris.md
│   ├── commander.md
│   ├── payer-et-recuperer-sa-commande.md
│   └── mes-commandes.md
├── gerer-une-organisation/
│   ├── creer-et-configurer-une-organisation.md
│   ├── membres-et-droits.md
│   ├── invitations-et-acces-producteur.md
│   ├── facturation-et-abonnement.md
│   ├── parametres-fiscaux.md
│   └── factures.md
├── gerer-une-boutique/
│   ├── creer-une-boutique.md
│   ├── apparence-et-informations.md
│   ├── catalogue-et-produits.md
│   ├── creneaux-de-retrait.md
│   ├── publier-et-partager.md
│   ├── commandes-et-encaissements.md
│   └── avis.md
├── piloter-son-activite/
│   ├── tableau-de-bord-et-indicateurs.md
│   ├── clients.md
│   ├── campagnes-et-evenements.md
│   ├── territoire.md
│   ├── impact.md
│   └── parrainage.md
├── administrer-la-plateforme/
│   ├── acces-et-securite.md
│   ├── utilisateurs-et-organisations.md
│   ├── abonnements-et-plans.md
│   ├── liste-d-attente.md
│   ├── newsletter.md
│   └── signalements.md
├── reference/
│   ├── roles-et-autorisations.md
│   ├── statuts-des-boutiques-et-commandes.md
│   ├── paiements-stripe.md
│   ├── notifications-et-emails.md
│   └── donnees-personnelles.md
├── developpeurs/
│   ├── vue-d-ensemble-technique.md
│   ├── authentification-api.md
│   ├── organisations-et-entetes.md
│   ├── webhooks.md
│   └── environnements-et-support.md
└── aide/
    ├── problemes-de-connexion.md
    ├── paiement-et-remboursement.md
    ├── signaler-un-probleme.md
    └── contacter-le-support.md
```

## Périmètre par audience

| Audience | Entrée principale | À documenter en premier | À laisser hors de cette documentation |
| --- | --- | --- | --- |
| Acheteur particulier | `Acheter` | recherche, boutique, panier, paiement, retrait, commandes, favoris | argumentaire produit et contenus éditoriaux |
| Producteur / gestionnaire de boutique | `Gérer une boutique` | organisation, catalogue, créneaux, publication, commandes, paiements | procédures internes d’administration Racines |
| Collectivité / structure territoriale | `Gérer une organisation` puis `Piloter son activité` | membres, accès, territoire, statistiques, facturation | configuration technique de la plateforme |
| Professionnel | `Gérer une organisation` | clients, commandes, facturation, paramètres fiscaux | parcours acheteur détaillé, sauf liens contextuels |
| Administrateur Racines | `Administrer la plateforme` | utilisateurs, organisations, plans, liste d’attente, newsletters, parrainages | guides publics et secrets d’exploitation |
| Développeur partenaire | `Développeurs` | API, authentification, en-tête d’organisation, webhooks, erreurs | documentation de l’interface utilisateur |

## Priorités de rédaction

1. **Socle de confiance** : connexion, mot de passe, compte, rôles, support et données personnelles.
2. **Parcours acheteur complet** : rechercher, commander, payer, récupérer, suivre ou annuler une commande.
3. **Parcours boutique complet** : création d’organisation, boutique, produits, créneaux, publication, commandes et encaissement.
4. **Exploitation multi-utilisateurs** : membres, invitations, sièges producteur/annexe, clients, facturation et fiscalité.
5. **Pilotage** : statistiques, impact, territoire, campagnes, événements et parrainage.
6. **Référence et intégrations** : statuts et règles métier validés avec l’équipe produit, puis API/webhooks issus du backend AdonisJS.
7. **Administration interne** : contenu restreint, avec avertissement visible et contrôles de droits ; à publier seulement dans un espace authentifié si requis.

## Inventaire et décisions à prendre avant rédaction

- Valider la matrice des rôles et permissions : elle conditionne toutes les instructions d’accès.
- Établir une source de vérité pour les statuts de boutique, commande, paiement et abonnement ; les écrans ne suffisent pas pour la référence.
- Définir si les pages d’administration et la référence API sont publiques, authentifiées ou privées.
- Préparer des comptes de démonstration et des captures anonymisées pour chaque parcours.
- Désigner un propriétaire produit par rubrique et une date de revue à chaque livraison majeure.
- Ajouter un lien « Aide » contextuel depuis les écrans Racines vers la page de tâche correspondante, plutôt qu’un lien générique vers l’accueil de la documentation.

## Règle de maintenance

Toute évolution fonctionnelle doit être livrée avec : la page de guide modifiée si un geste utilisateur change, la page de référence modifiée si une règle ou un statut change, et une note de version sur le site principal si le changement est visible par les utilisateurs.
