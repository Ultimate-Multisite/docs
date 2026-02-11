---
title: Intégration du panneau de contrôle Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Intégration du panneau de contrôle Hestia

Ce guide explique comment configurer l'intégration Hestia d'Ultimate Multisite afin que les domaines mappés dans votre réseau soient automatiquement ajoutés (et supprimés) en tant qu'alias de domaine Web dans Hestia.

- Référence CLI Hestia : v-add-web-domain-alias / v-delete-web-domain-alias
- Documentation officielle de l'API REST : https://hestiacp.com/docs/server-administration/rest-api.html

## Ce qu'il fait
- Lorsqu'un domaine est mappé dans Ultimate Multisite, l'intégration appelle l'API Hestia pour exécuter :
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Lorsqu'un mappage de domaine est supprimé, il exécute :
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Ajoute / supprime éventuellement l'alias `www.` en fonction du paramètre « Auto-créer le sous-domaine www » dans les paramètres de mappage de domaine.

## Prérequis
- Un domaine Web Hestia existant qui pointe déjà vers votre installation WordPress. L'intégration attachera les alias à ce domaine de base.
- Accès API Hestia activé. Vous pouvez vous authentifier soit avec un mot de passe, soit avec un hash/token API.
Consultez la documentation de l'API REST Hestia pour activer l'accès API et les détails d'authentification :
https://hestiacp.com/docs/server-administration/rest-api.html

## Configuration (Assistant → Intégrations → Hestia)
Fournissez les valeurs suivantes :

- `WU_HESTIA_API_URL` (obligatoire)
  - Le point de terminaison API de base, généralement `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (obligatoire)
  - Utilisateur Hestia utilisé pour les commandes API (souvent `admin`).
- `WU_HESTIA_API_PASSWORD` ou `WU_HESTIA_API_HASH` (au moins un)
  - Choisissez une méthode d'authentification : mot de passe ou hash/token API.
- `WU_HESTIA_ACCOUNT` (obligatoire)
  - Le compte (propriétaire) du domaine Web dans Hestia ; c'est le premier argument de la CLI.
- `WU_HESTIA_WEB_DOMAIN` (obligatoire)
  - Le domaine Web Hestia existant qui sert votre WordPress (les alias seront attachés ici).
- `WU_HESTIA_RESTART` (facultatif ; valeur par défaut `yes`)
  - Indique s'il faut redémarrer/recharger les services après les changements d'alias.

Vous pouvez laisser l'assistant injecter ces constantes dans `wp-config.php`, ou les définir manuellement.

## Vérification de la configuration
- Dans l'étape « Test » de l'assistant, le plugin appelle `v-list-web-domains <WU_HESTIA_ACCOUNT> json` via l'API. Une réponse réussie confirme la connectivité et l'authentification.
- Après avoir mappé un domaine, vérifiez dans Hestia : Web > le domaine de base > Aliases. Vous devriez voir le nouvel alias ajouté.

## Notes et astuces
- Assurez-vous que `WU_HESTIA_WEB_DOMAIN` existe déjà et est détenu par `WU_HESTIA_ACCOUNT`.
- Si SSL est requis, gérez les certificats dans Hestia. Cette intégration ne gère actuellement que les alias.
- Le plugin peut également ajouter/supprimer `www.<domain>` en fonction du paramètre « sous-domaine www » de la cartographie de domaine.

## Exemple d'appel API (cURL)
Voici un exemple conceptuel (ajustez-le à votre environnement). Reportez-vous à la documentation officielle pour les paramètres exacts.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Pour la suppression, utilisez `cmd=v-delete-web-domain-alias` et les mêmes arguments.

## Dépannage
- Erreur HTTP de l'API : vérifiez que `WU_HESTIA_API_URL` est accessible et inclut `/api`.
- Erreurs d'authentification : confirmez `WU_HESTIA_API_USER` et soit `WU_HESTIA_API_PASSWORD` soit `WU_HESTIA_API_HASH`.
- « Compte/domaine de base manquant » dans les journaux : assurez-vous que `WU_HESTIA_ACCOUNT` et `WU_HESTIA_WEB_DOMAIN` sont définis et valides dans Hestia.

## Références
- API REST Hestia : https://hestiacp.com/docs/server-administration/rest-api.html
- Référence CLI Hestia (Alias) : https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
