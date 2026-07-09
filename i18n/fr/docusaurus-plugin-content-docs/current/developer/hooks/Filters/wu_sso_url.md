---
id: wu_sso_url
title: Filtre - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filtre : wu_sso_url {#filter-wussourl}

Filtre les URL SSO générées avant qu’elles ne soient renvoyées pour les actions client inter-domaines.

Utilisez ce filtre lorsqu’une intégration doit ajouter un contexte de confiance à un lien SSO de locataire souverain ou remplacer l’URL du courtier tout en préservant la validation du token d’Ultimate Multisite.

## Paramètres {#parameters}

| Nom | Type | Description |
|------|------|-------------|
| $sso_url | `string` | URL SSO générée. |
| $user | `WP_User` | Utilisateur qui sera authentifié par la visite SSO. |
| $site_id | `int` | ID du site cible pour la visite. |
| $redirect_to | `string` | URL de destination après une validation SSO réussie. |

### Depuis {#since}

- 2.13.0

### Source {#source}

Défini dans `inc/sso/class-sso.php`.


## Retours {#returns}

URL SSO filtrée.
