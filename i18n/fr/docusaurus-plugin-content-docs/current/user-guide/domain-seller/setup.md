---
title: Installation et configuration du fournisseur
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Vendeur de domaines : configuration et configuration des fournisseurs

Le module complémentaire Vendeur de domaines est fourni avec un assistant de configuration guidé qui vous accompagne à chaque étape requise. Cette page couvre le déroulement de l’assistant et la manière de configurer ou de reconfigurer les fournisseurs par la suite.

## Exigences {#requirements}

- **Multisite Ultimate** v2.4.12 ou supérieure, activé sur le réseau
- **PHP** 7.4+
- Identifiants API pour au moins un bureau d’enregistrement pris en charge

## Assistant de configuration au premier lancement {#first-run-setup-wizard}

L’assistant de configuration se lance automatiquement la première fois que vous activez le plugin sur le réseau. Il est également disponible à tout moment depuis **Administration réseau › Ultimate Multisite › Configuration du Vendeur de domaines**.

### Étape 1 — Choisir un fournisseur {#step-1--choose-a-provider}

Sélectionnez le bureau d’enregistrement que vous souhaitez connecter. Options prises en charge :

| Fournisseur | Gestion DNS | Confidentialité WHOIS |
|---|---|---|
| OpenSRS | Oui | Oui |
| Namecheap | Non | Oui (WhoisGuard, gratuit) |
| HostAfrica | Oui | Oui (protection d’ID) |
| Openprovider | Oui | Oui |
| Hostinger | Via le mappage de domaines Hostinger de base pour les domaines hébergés | Oui |
| GoDaddy | Non | Non |
| ResellerClub | Oui | Non |
| NameSilo | Non | Non |
| Enom | Oui | Non |

### Étape 2 — Saisir les identifiants {#step-2--enter-credentials}

Chaque fournisseur possède des champs d’identifiants différents :

**OpenSRS** — Nom d’utilisateur et clé privée (depuis le panneau de contrôle revendeur OpenSRS)

**Namecheap** — Nom d’utilisateur et clé API (depuis Account › Outils › Accès API)

**HostAfrica** — Endpoint API revendeur de domaines et identifiants depuis le module revendeur HostAfrica. Aucun endpoint sandbox séparé n’est actuellement documenté ; testez avec des vérifications sûres en lecture seule avant de lancer des enregistrements en production.

**Openprovider** — Nom d’utilisateur et mot de passe avec accès API activé. Le mode sandbox facultatif utilise l’API sandbox Openprovider, et un identifiant client par défaut facultatif peut être réutilisé pour les enregistrements.

**Hostinger** — Le token API Hostinger hPanel partagé depuis l’intégration Hostinger de base. Le même token alimente le mappage de domaines de base et les opérations d’enregistrement du Vendeur de domaines.

**GoDaddy** — Clé API et secret (depuis developer.godaddy.com)

**ResellerClub** — ID revendeur et clé API (depuis le panneau de contrôle ResellerClub)

**NameSilo** — Clé API (depuis namesilo.com › Account › Gestionnaire API)

**Enom** — ID Account et token API

Cochez **Mode sandbox** lorsque disponible afin de tester avec l’environnement de test du fournisseur avant de passer en production.

### Étape 3 — Tester la connexion {#step-3--test-the-connection}

Cliquez sur **Tester la connexion**. L’assistant envoie un appel API léger pour vérifier les identifiants et la connectivité. Corrigez tout problème d’identifiants avant de continuer.

### Étape 4 — Importer les TLD {#step-4--import-tlds}

Cliquez sur **Importer les TLD** pour récupérer tous les TLD disponibles et les tarifs de gros depuis le fournisseur connecté. Cela renseigne la liste des TLD utilisée par les produits de domaine. L’import peut prendre 30 à 60 secondes pour les fournisseurs disposant de grands catalogues de TLD.

Les TLD sont également resynchronisés automatiquement une fois par jour via une tâche cron planifiée.

### Étape 5 — Créer un produit de domaine {#step-5--create-a-domain-product}

L’assistant crée un produit de domaine fourre-tout par défaut avec une marge de 10 %. Vous pouvez modifier ce produit immédiatement ou passer cette étape et créer des produits manuellement sous **Ultimate Multisite › Produits**.

Consultez [Produits de domaine et tarification](./domain-products) pour le guide complet de configuration des produits.

---

## Reconfigurer un fournisseur {#reconfiguring-a-provider}

Accédez à **Administration réseau › Ultimate Multisite › Réglages › Vendeur de domaines** (ou cliquez sur **Réglages** dans la liste des plugins).

La page de réglages contient :

- **Activer la vente de domaines** — activer/désactiver toute la fonctionnalité
- **Fournisseur par défaut** — le fournisseur utilisé pour les recherches de domaines et les nouveaux produits
- **Nombre maximal de TLD par recherche** — le nombre de TLD à vérifier lorsqu’un client effectue une recherche ; des valeurs plus élevées affichent davantage d’options, mais sont plus lentes
- **Durée du cache de disponibilité** — durée pendant laquelle mettre en cache les résultats de disponibilité et de tarification ; des valeurs plus basses sont plus précises, mais augmentent les appels API
- **Gérer les produits de domaine** — lien rapide vers la liste des produits
- **Configurer les fournisseurs** — ouvre l’assistant d’intégration pour ajouter ou reconfigurer des fournisseurs

### Ajouter un deuxième fournisseur {#adding-a-second-provider}

Cliquez sur **Configurer les fournisseurs** et exécutez de nouveau l’assistant pour le nouveau bureau d’enregistrement. Vous pouvez avoir plusieurs fournisseurs configurés simultanément. Assignez chaque produit de domaine à un fournisseur spécifique, ou laissez-le sur la valeur par défaut.

### Synchroniser les TLD manuellement {#syncing-tlds-manually}

Dans la page de réglages, cliquez sur **Synchroniser les TLD** à côté de tout fournisseur configuré pour récupérer les derniers tarifs. C’est utile après qu’un fournisseur met à jour ses tarifs de gros ou ajoute de nouveaux TLD.

---

## Journaux {#logs}

Chaque fournisseur écrit dans son propre canal de journal. Les journaux sont consultables sous **Administration réseau › Ultimate Multisite › Journaux** :

| Canal de journal | Contenu |
|---|---|
| `domain-seller-registration` | Toutes les tentatives d’enregistrement (réussites et échecs) |
| `domain-seller-renewal` | Résultats des tâches de renouvellement |
| `domain-seller-opensrs` | Activité API OpenSRS brute |
| `domain-seller-namecheap` | Activité API Namecheap brute |
| `domain-seller-hostafrica` | Activité API HostAfrica brute |
| `domain-seller-openprovider` | Activité API Openprovider brute |
| `domain-seller-hostinger` | Activité API Hostinger brute |
| `domain-seller-godaddy` | Activité API GoDaddy brute |
| `domain-seller-resellerclub` | Activité API ResellerClub brute |
| `domain-seller-namesilo` | Activité API NameSilo brute |
| `domain-seller-enom` | Activité API Enom brute |

---

## Notes sur les capacités des fournisseurs {#provider-capability-notes}

Toutes les API de bureaux d’enregistrement n’exposent pas les mêmes opérations. Le module complémentaire affiche les opérations non prises en charge avec des erreurs claires destinées à l’administrateur, au lieu d’échouer silencieusement.

- **HostAfrica** prend en charge le flux de travail revendeur en direct le plus complet, notamment la recherche, la synchronisation des TLD/prix, l’enregistrement, le renouvellement, le transfert, les mises à jour des serveurs de noms, les enregistrements DNS, les codes EPP, le verrouillage du bureau d’enregistrement et la protection de l’ID.
- **Openprovider** prend en charge la synchronisation des TLD aux tarifs revendeur, l’enregistrement, le renouvellement, les transferts, les mises à jour des serveurs de noms, les zones DNS, les codes EPP, le verrouillage du bureau d’enregistrement et la confidentialité WHOIS. Il s’authentifie avec un bearer token de courte durée que l’addon actualise automatiquement.
- **Hostinger** prend en charge la recherche de disponibilité, l’enregistrement, la consultation du portefeuille, les mises à jour des serveurs de noms, le verrouillage du bureau d’enregistrement et la confidentialité WHOIS via le jeton API hPanel partagé. L’API Domains publique de Hostinger n’expose pas les tarifs revendeur/de gros, le transfert entrant, le renouvellement explicite ni la récupération de code EPP ; les renouvellements se font uniquement par renouvellement automatique.
