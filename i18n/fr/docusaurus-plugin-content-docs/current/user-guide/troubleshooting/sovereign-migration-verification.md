---
title: Vérification de migration souveraine
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Vérification de la migration souveraine

Ultimate Multisite : Multi-Tenancy 1.2.0 inclut des commandes de vérification WP-CLI pour les migrations de tenants souverains. Utilisez-les lorsque la migration d'un tenant, une visite SSO ou une installation isolée ne se comporte pas comme prévu.

## Commandes à exécuter {#commands-to-run}

Exécutez la vérification depuis l'installation WordPress du réseau :

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Utilisez l'ID du site pour le tenant que vous êtes en train de migrer. La première commande vérifie que le tenant ne dépend plus des données héritées côté réseau. La deuxième commande vérifie que les tâches de poussée souveraine peuvent être traitées et vidées.

## Échecs courants {#common-failures}

### Les droits de base de données ne correspondent pas à l'hôte {#database-grants-do-not-match-the-host}

Si la vérification signale des erreurs de droits (grant) ou d'utilisateur écrivain (writer-user), vérifiez l'hôte de base de données configuré. `localhost`, `127.0.0.1` et le nom du service de conteneur sont des hôtes MySQL différents pour les droits de base de données. Mettez à jour la liaison d'hôte du tenant ou les droits de base de données, puis relancez la vérification.

### Les installations Bedrock ou locales ne peuvent pas se connecter {#bedrock-or-local-installs-cannot-connect}

Les installations Bedrock et locales peuvent signaler la base de données comme étant `localhost` alors que l'exécution se connecte via une adresse normalisée. La version 1.2.0 normalise les chaînes d'hôte sur la même machine, mais les paramètres d'hôte personnalisés peuvent toujours entrer en conflit avec les droits de base de données.

### La file de tâches asynchrones ne se vide pas {#async-push-queue-does-not-drain}

Si `verify-sovereign-push` ne se termine pas, vérifiez Action Scheduler ou le runner asynchrone configuré. Videz les tâches échouées uniquement après avoir confirmé qu'elles sont sûres à être réessayer ou à être jetées.

### Le nombre d'utilisateurs du tenant est incorrect {#tenant-user-count-is-wrong}

La migration doit provisionner des utilisateurs pour le tenant souverain. Si l'utilisateur d'installation attendu manque, relancez l'étape de provisionnement utilisateur avant de réessayer la connexion SSO.

### La visite SSO est rejetée {#sso-visit-is-rejected}

L'authentification automatique du locataire sans état nécessite que le nom de domaine du locataire, le code PIN d'origine (origin pin), l'objectif du jeton (token purpose), le nonce et la date d'expiration correspondent. Assurez-vous que l'URL du locataire est correcte et que la connexion est tentée peu après avoir généré la visite SSO.

## Quand réessayer {#when-to-retry}

Réessayez la vérification après chaque changement d'infrastructure. Ne pas basculer le trafic de production, supprimer les données sources ou retirer les identifiants de migration tant que toutes les vérifications sont réussies.
