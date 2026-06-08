---
title: Configuration du fournisseur et installation
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller : Configuration et fournisseurs

L'extension Domain Seller est livrée avec un assistant de configuration guidé qui vous accompagne à chaque étape nécessaire. Cette page couvre le déroulement de cet assistant et la manière de configurer ou de reconfigurer les fournisseurs par la suite.

## Prérequis

- **Multisite Ultimate** v2.4.12 ou supérieur, activé au niveau du réseau
- **PHP** 7.4+
- Des identifiants API pour au moins un registraire pris en charge

## Assistant de configuration initial

L'assistant de configuration se lance automatiquement la première fois que vous activez l'extension au niveau du réseau. Il est également disponible à tout moment dans **Admin du réseau › Ultimate Multisite › Configuration de Domain Seller**.

### Étape 1 — Choisir un fournisseur

Sélectionnez le registraire que vous souhaitez connecter. Options prises en charge :

| Fournisseur | Gestion DNS | Confidentialité WHOIS |
|---|---|---|
| OpenSRS | Oui | Oui |
| Namecheap | Non | Oui (WhoisGuard, gratuit) |
| GoDaddy | Non | Non |
| ResellerClub | Oui | Non |
| NameSilo | Non | Non |
| Enom | Oui | Non |

### Étape 2 — Entrer les identifiants

Chaque fournisseur possède des champs d'identifiants différents :

**OpenSRS** — Nom d'utilisateur et clé privée (depuis le OpenSRS Reseller Control Panel)

**Namecheap** — Nom d'utilisateur et clé API (depuis Account › Tools › API Access)

**GoDaddy** — Clé API et secret (depuis developer.godaddy.com)

**ResellerClub** — ID de revendeur et clé API (depuis le panneau de contrôle ResellerClub)

**NameSilo** — Clé API (depuis namesilo.com › Account › API Manager)

**Enom** — ID de compte et jeton API

Vérifiez le **mode Sandbox** lorsque disponible pour tester l'environnement de test du fournisseur avant de passer en production.

### Étape 3 — Tester la connexion

Cliquez sur **Test Connection**. L'assistant envoie un appel API léger pour vérifier les identifiants et la connectivité. Veuillez corriger tout problème d'identifiants avant de continuer.

### Étape 4 — Importer les TLD

Cliquez sur **Import TLDs** pour récupérer tous les TLD disponibles et les prix de gros auprès du fournisseur connecté. Cela peuple la liste des TLD utilisée par les produits de domaine. L'importation peut prendre 30 à 60 secondes pour les fournisseurs ayant de grands catalogues de TLD.

Les TLD sont également resynchronisés automatiquement une fois par jour via un job cron planifié.

### Étape 5 — Créer un produit de domaine

L'assistant crée un produit de domaine par défaut (catch-all) avec une majoration de 10 %. Vous pouvez modifier ce produit immédiatement ou passer cette étape pour créer des produits manuellement dans **Ultimate Multisite › Produits**.

Consultez [Domain Products and Pricing](./domain-products) pour le guide complet de configuration des produits.

---

## Reconfigurer un fournisseur

Allez dans **Admin du réseau › Ultimate Multisite › Paramètres › Domain Seller** (ou cliquez sur **Settings** dans la liste des extensions).

La page de paramètres contient :

- **Enable domain selling** — basculez la fonctionnalité entière sur/off
- **Default provider** — le fournisseur utilisé pour les recherches de domaine et les nouveaux produits
- **Max TLDs per search** — combien de TLD vérifier lorsqu'un client effectue une recherche ; des valeurs plus élevées affichent plus d'options mais sont plus lentes
- **Availability cache duration** — combien de temps mettre en cache les résultats de disponibilité et de prix ; des valeurs plus faibles sont plus précises mais augmentent les appels API
- **Manage domain products** — lien rapide vers la liste des Produits
- **Configure providers** — ouvre l'Assistant d'intégration pour ajouter ou reconfigurer des fournisseurs

### Ajouter un deuxième fournisseur

Cliquez sur **Configure providers** et exécutez à nouveau l'assistant pour le nouveau registraire. Vous pouvez avoir plusieurs fournisseurs configurés simultanément. Affectez chaque produit de domaine à un fournisseur spécifique, ou laissez-le sur le fournisseur par défaut.

### Synchroniser les TLD manuellement

Dans la page de paramètres, cliquez sur **Sync TLDs** à côté de tout fournisseur configuré pour récupérer les derniers prix. Ceci est utile après qu'un fournisseur ait mis à jour ses prix de gros ou ajouté de nouveaux TLD.

---

## Journaux (Logs)

Chaque fournisseur écrit dans son propre canal de journalisation. Les journaux sont consultables dans **Admin du réseau › Ultimate Multisite › Logs** :

| Canal de journalisation | Contenu |
|---|---|
| `domain-seller-registration` | Toutes les tentatives d'enregistrement (succès et échec) |
| `domain-seller-renewal` | Résultats du job de renouvellement |
| `domain-seller-opensrs` | Activité API OpenSRS brute |
| `domain-seller-namecheap` | Activité API Namecheap brute |
| `domain-seller-godaddy` | Activité API GoDaddy brute |
| `domain-seller-resellerclub` | Activité API ResellerClub brute |
| `domain-seller-namesilo` | Activité API NameSilo brute |
| `domain-seller-enom` | Activité API Enom brute |
