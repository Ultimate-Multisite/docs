---
id: signup_get_available_languages
title: Filtre - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: abfd9a9381c23503be93e034d42f32c8
---
# Filter: signup_get_available_languages

Filtre la liste des langues disponibles pour les inscriptions de sites front-end.

Passer un tableau vide à ce crochet désactivera l'affichage du paramètre sur le formulaire d'inscription, et la langue par défaut sera utilisée lors de la création du site. Les langues non déjà installées seront supprimées.

## Parameters

| Nom | Type | Description |
|------|------|-------------|
| $available_languages | `array` | Langues disponibles. |

### Depuis

- 4.4.0
### Source

Défini dans [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L125) à la ligne 125
