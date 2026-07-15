---
title: Créer un menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Créer un menu

La capacité **Créer un menu** permet de créer des menus de navigation WordPress avec la possibilité de définir des libellés de navigation distincts des titres de page.

## Aperçu {#overview}

Cette capacité étend la fonctionnalité standard de création de menus en ajoutant la possibilité de spécifier un paramètre `navigation_label`. Cela vous permet de créer des menus où le libellé affiché dans la navigation diffère du titre de la page, offrant ainsi plus de flexibilité dans la structure du site et l'expérience utilisateur.

## Paramètres {#parameters}

| Paramètre | Type | Requis | Description |
|-----------|------|----------|-------------|
| `name` | string | Oui | Nom du menu, ex. `Navigation principale` |
| `location` | string | Non | Emplacement du thème auquel assigner ce menu, ex. `primary` |
| `navigation_label` | string | Non | Libellé à afficher dans la navigation (différent du titre de la page) |

## Valeur de retour {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Libellé de navigation vs Titre de page {#navigation-label-vs-page-title}

Le paramètre `navigation_label` vous permet de séparer le nom interne du menu du libellé affiché aux utilisateurs :

- **`name`** — Identifiant de menu interne utilisé par WordPress (ex. "Primary Navigation")
- **`navigation_label`** — Le libellé affiché aux visiteurs du site dans la navigation (ex. "Main Menu")

Ceci est utile lorsque :
- Votre convention de nommage interne diffère des libellés destinés aux utilisateurs
- Vous souhaitez des libellés plus courts dans la navigation qu'avec le titre dans le panneau d'administration
- Vous devez prendre en charge plusieurs langues avec des longueurs de libellés différentes
- Vous créez des menus pour des régions ou des groupes d'utilisateurs spécifiques

## Exemples d'utilisation {#usage-examples}

### Exemple 1 : Menu simple avec libellé de navigation {#example-1-simple-menu-with-navigation-label}

**Requête :**
```
Créer un menu de navigation principal appelé "Main Navigation" avec le libellé de navigation "Menu".
```

**Résultat :**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Exemple 2 : Menu pour un emplacement de thème spécifique {#example-2-menu-for-specific-theme-location}

**Requête :**
```
Créer un menu de pied de page appelé "Footer Links" avec le libellé de navigation "Quick Links" et l'assigner à l'emplacement du pied de page.
```

**Résultat :**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Intégration avec Theme Builder {#integration-with-theme-builder}

Lorsque vous utilisez Theme Builder, la capacité Créer un menu :

1. Détecte automatiquement les emplacements de menu disponibles dans le thème
2. Crée des menus avec les libellés de navigation appropriés pour votre design
3. Assigne les menus aux emplacements de thème corrects
4. Prend en charge l'ajout d'éléments de menu après la création

## Capacités associées {#related-abilities}

- **`add_menu_item`** — Ajouter des éléments à un menu existant
- **`update_menu`** — Renommer un menu ou le réassigner à un emplacement de thème
- **`delete_menu`** — Supprimer un menu de votre site

## Bonnes pratiques {#best-practices}

- **Utilisez des libellés de navigation clairs** — gardez les libellés concis et descriptifs pour les utilisateurs
- **Associez les emplacements de thème** — assignez les menus à l'emplacement de thème correct pour un affichage approprié
- **Planifiez la structure du menu** — décidez de la hiérarchie de votre menu avant de créer les éléments
- **Testez la réactivité** — vérifiez que les menus s'affichent correctement sur les appareils mobiles
- **Localisez les libellés** — utilisez différents libellés de navigation pour différentes versions linguistiques

## Limitations {#limitations}

- Les libellés de navigation sont uniquement à des fins d'affichage ; le `name` interne est toujours utilisé pour l'identification par WordPress
- Le support des thèmes varie ; tous les thèmes ne prennent pas en charge tous les emplacements de menu
- Les éléments de menu doivent être ajoutés séparément après la création du menu
- Changer un libellé de navigation nécessite de mettre à jour le menu

## Capacités associées {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — créer des logos pour l'en-tête de votre site
- [Validate Palette Contrast](./validate-palette-contrast.md) — garantir des schémas de couleurs accessibles
