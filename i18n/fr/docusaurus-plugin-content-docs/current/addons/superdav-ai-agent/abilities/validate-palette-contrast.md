---
title: Valider le contraste de la palette
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Valider le contraste de la palette {#validate-palette-contrast}

La fonctionnalité **Valider le contraste de la palette** vérifie les paires de couleurs de votre palette de design pour s'assurer de leur conformité aux normes WCAG (Web Content Accessibility Guidelines) avant de les appliquer à votre thème.

## Vue d'ensemble {#overview}

Cette fonctionnalité garantit que le schéma de couleurs de votre site répond aux normes d'accessibilité en validant les rapports de contraste entre les couleurs de texte et d'arrière-plan. Elle aide à prévenir les combinaisons de couleurs qui pourraient être difficiles à lire pour les utilisateurs ayant des déficiences visuelles.

## Format des entrées {#input-format}

La fonctionnalité accepte une palette de couleurs en entrée :

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### Paramètres {#parameters}

| Paramètre | Type | Requis | Description |
|-----------|------|----------|-------------|
| `colors` | array | Oui | Tableau d'objets de couleurs avec les propriétés `name` et `hex` |
| `wcag_level` | string | Non | Niveau de conformité WCAG : "A", "AA" (par défaut), ou "AAA" |
| `pairs_to_check` | array | Non | Paires de couleurs spécifiques à valider (ex. : `["primary-text", "background-text"]`) |

## Niveaux WCAG vérifiés {#wcag-levels-checked}

La fonctionnalité valide les rapports de contraste selon les normes WCAG :

| Niveau | Texte normal | Texte grand | Ratio minimum |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Texte normal** — texte de moins de 18 points (ou 14 points en gras)
- **Texte grand** — texte de 18 points ou plus (ou 14 points en gras ou plus)

## Schéma de sortie {#output-schema}

La fonctionnalité renvoie un rapport de validation détaillé :

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### Champs de sortie {#output-fields}

| Champ | Type | Description |
|-------|------|-------------|
| `compliant` | boolean | Indique si toute la palette respecte le niveau WCAG spécifié |
| `wcag_level` | string | Le niveau WCAG qui a été vérifié |
| `pairs` | array | Résultats détaillés pour chaque paire de couleurs |
| `contrast_ratio` | number | Le rapport de contraste calculé (de 1:1 à 21:1) |
| `status` | string | "pass" ou "fail" pour chaque paire |
| `recommendations` | array | Suggestions pour améliorer les paires défaillantes |

## Exemple d'utilisation {#usage-example}

**Requête :**
```
Vérifiez si ma palette de couleurs respecte les normes WCAG AA. J'ai la couleur primaire #678233, la couleur de texte #ffffff et l'arrière-plan #f5f5f5.
```

**Résultat :**
La fonctionnalité valide toutes les combinaisons de couleurs et renvoie :
- ✅ Primaire + Texte : ratio de 5.2:1 (passe WCAG AA)
- ✅ Arrière-plan + Texte : ratio de 12.1:1 (passe WCAG AAA)
- Globalement : Conforme avec WCAG AA

## Intégration avec le constructeur de thème {#integration-with-theme-builder}

Lorsque vous utilisez la sélection de direction de design du Constructeur de thème, la fonctionnalité Valider le contraste de la palette :

1. Analyse votre palette de couleurs sélectionnée
2. Vérifie toutes les combinaisons texte-arrière-plan
3. Valide par rapport au niveau WCAG choisi
4. Fournit des recommandations pour les paires non conformes
5. Empêche l'application de schémas de couleurs inaccessibles

## Bonnes pratiques {#best-practices}

- **Commencez par le niveau AA** — WCAG AA est la norme pour la plupart des sites web
- **Testez avant d'appliquer** — validez votre palette avant de vous engager dans un design
- **Vérifiez toutes les combinaisons** — assurez-vous que le texte, les liens et les éléments d'interface respectent les normes
- **Tenez compte des préférences utilisateur** — certains utilisateurs peuvent avoir une sensibilité accrue aux couleurs
- **Utilisez des vérificateurs de contraste** — combinez cette fonctionnalité avec des outils de navigateur pour une vérification complète

## Paires défaillantes et recommandations {#failing-pairs-and-recommendations}

Si une paire de couleurs échoue à la validation, la fonctionnalité fournit des recommandations :

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Éclaircir la couleur de texte à #ffffff (le ratio serait de 5.2:1)",
    "Assombrir la couleur d'arrière-plan à #556b2f (le ratio serait de 4.8:1)",
    "Utiliser une couleur primaire différente comme #4a6b1f (le ratio serait de 6.1:1)"
  ]
}
```

## Fonctionnalités associées {#related-abilities}

- [Générer un SVG de logo](./generate-logo-svg.md) — créer des logos avec votre palette de couleurs validée
- [Créer un menu](./create-menu.md) — construire une navigation avec des couleurs accessibles
