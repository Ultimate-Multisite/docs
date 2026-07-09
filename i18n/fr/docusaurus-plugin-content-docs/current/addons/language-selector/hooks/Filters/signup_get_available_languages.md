---
id: signup_get_available_languages
title: Filtre - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filtre : signup_get_available_languages

Filtre la liste des langues disponibles pour les inscriptions au site en front-end.

Transmettre un tableau vide à ce hook désactivera l’affichage du réglage dans le formulaire d’inscription, et la langue par défaut sera utilisée lors de la création du site. Les langues qui ne sont pas déjà installées seront supprimées.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $available_languages | `array` | Langues disponibles. |

### Depuis

- 4.4.0
### Source

Défini dans [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) à la ligne 117
